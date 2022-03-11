import styled from 'styled-components';

const BackgroundVideo = () => { 
    return (
        <VideoBackground autoPlay muted loop >
            <source src='https://res.cloudinary.com/omnizaar/video/upload/v1646219181/Wallpaper_Moon_4624e6aca3.mp4' type="video/mp4" />
            <source src='https://res.cloudinary.com/omnizaar/video/upload/v1646219182/Wallpaper_Moon_031aa84830.webm' type="video/webm" />
        </VideoBackground>
    )
}

export default BackgroundVideo;

const VideoBackground = styled.video` 
    position: fixed;
    top: 0;
    left: 0;
	bottom: 0;
	right: 0;
    background-position: center;
	background-repeat: no-repeat;
	background-size: cover;    
    min-height: 100%;
    min-width: 100%;
    z-index: -1;
`