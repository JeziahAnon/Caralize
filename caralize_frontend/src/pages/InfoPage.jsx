import VideoPageHeader from '../pages/InfoPageComponents/VideoPageHeader.jsx'
import OldTimer from '../assets/oldtimer.jpg';
import './Styles/InfoStyle.css'; 
import VideoPageNavbar from '../pages/InfoPageComponents/VideoPageNavbar.jsx'
import CompanyNameStrip from '../pages/InfoPageComponents/VideoPageNameStrip.jsx'
import { useState } from 'react';
import ProgressBar from './AppComponents/ProgressBar.jsx';

export default function InfoPage() {
    const [activePagePart, setActivePart] = useState(1);
    const pageParts = 4;

    return (
        <>
            <VideoPageHeader />
            <VideoPageNavbar />
            <CompanyNameStrip />
            <ProgressBar />
            <div className='info_container'>
                <div className='infobox'>
                    <img src={OldTimer} id='oldtimer_img'></img>
                    <div className='infobox text_container'>
                        <span>Im a text span with certainly important information to display</span>
                    </div>
                </div>
            </div>
        </>
    )
}