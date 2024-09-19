import VideoPageHeader from '../pages/InfoPageComponents/VideoPageHeader.jsx'
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
            <ProgressBar/>
        </>
    )
}