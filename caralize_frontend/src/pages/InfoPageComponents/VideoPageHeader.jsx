import HeaderVideo from '../../assets/header_video.mp4';

export default function VideoPageHeader() {
    return (
        <div id='header_video_container'>
            <video autoPlay loop controls={false} src={HeaderVideo} typof='video/mp4' id='header_video' />
            <div id='menu_indicator'>&nbsp;</div>
        </div>
    )
}