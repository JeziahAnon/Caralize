import VideoPageHeader from '../pages/InfoPageComponents/VideoPageHeader.jsx'
import './InfoPageStyles/InfoStyle.css'; 
import VideoPageNavbar from '../pages/InfoPageComponents/VideoPageNavbar.jsx'
import CompanyNameStrip from '../pages/InfoPageComponents/VideoPageNameStrip.jsx'
import { useState, useEffect } from 'react';

const ActivePartIdent = ({ id, className }) => {
    return <div id={id} className={className}></div>;
}

export default function InfoPage() {
    const [activePagePart, setActivePart] = useState(1);
    const pageParts = 4;

    const currentIdentSwitch = (active) => {
        const pagePart = document.getElementById(`pagepart_ident_${activePagePart}`);

        if (active) {
            pagePart.classList.add('active_pagepart_ident');
            pagePart.classList.remove('inactive_pagepart_ident');
        } else {
            pagePart.classList.add('inactive_pagepart_ident');
            pagePart.classList.remove('active_pagepart_ident');
        }

    }


    const handleScroll = (e) => {
        const scrolling_up = e.deltaY > 0;

        setActivePart(prevPagePart => {
            let newPagePart = prevPagePart;

            if (!scrolling_up && prevPagePart > 0) {
                newPagePart = prevPagePart - 1;
            } else if (scrolling_up && prevPagePart < pageParts) {
                newPagePart = prevPagePart + 1;
            }

            newPagePart = Math.max(1, Math.min(pageParts, newPagePart));

            return newPagePart;
        });
    }

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
    }, [])

    return (
        <>
            <VideoPageHeader />
            <VideoPageNavbar />
            <CompanyNameStrip />
            <div className='progress_bar_container'>
                {Array.from({ length: pageParts }).map((_, i) => {
                    return (
                        <ActivePartIdent
                            key={i}
                            id={`pagepart_ident_${i}`}
                            className={i + 1 === activePagePart ? 'active_pagepart_ident' : 'inactive_pagepart_ident'}
                        />
                        )
                    })
                }
            </div>
        </>
    )
}