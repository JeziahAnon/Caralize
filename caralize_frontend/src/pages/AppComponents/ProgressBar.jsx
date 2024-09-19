import { useState, useEffect } from "react";

const SomeComponent = ({ id, className }) => {
    return (
        <div id={id} className={className}></div>
    );
}
export default function ProgressBar() {
    const [activePagePart, setActivePart] = useState(1);
    const [animationType, setAnimation] = useState('');
    const pageParts = 4;

    const handleScroll = (e) => {
        const scrolling_down = e.deltaY > 0;

        setActivePart(prevPagePart => {
            let newPagePart = prevPagePart;

            if (scrolling_down && prevPagePart < pageParts) {
                newPagePart = prevPagePart + 1;
                setAnimation('scrolling_down');

            } else if (!scrolling_down && prevPagePart > 1) {
                newPagePart = prevPagePart - 1;
                setAnimation('scrolling_up'); 
            }

            newPagePart = Math.max(1, Math.min(pageParts, newPagePart));

            return newPagePart;
        });

        setTimeout(() => {
            setAnimation('');
        }, 800);
    }

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
    }, [])

    return (
        <div className = 'progress_bar_container'>
            {
                Array.from({ length: pageParts }).map((_, i) => {
                    return (
                        <SomeComponent
                            key={i}
                            id={`pagepart_ident_${i}`}
                            className={i + 1 === activePagePart ? `page_part active ${animationType}` : 'page_part'}
                        />
                    );
                })
            }
        </div>
    )
}