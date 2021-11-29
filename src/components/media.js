import React from "react";
import styled from 'styled-components'

const ImgStyle = styled.div`
img{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 15px;
  border-radius: 8px;
  width: 72vw;
  height: 72vh;
}
`



export default function Media({ url, picurl }) {
  const isVideo = () => {
    return (
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={url}
          frameBorder="2"
          allow="autoplay"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  };

  const isImage = () => {
    return (
      <ImgStyle>
        <img src={url} alt="Nasa Media of the day" />
        <div><a href="https://github.com/jessejohns-1?tab=repositories"><div><button class="glow-on-hover" type="button">My Github</button></div></a></div>
      </ImgStyle>
    );
  };

  return picurl === "image" ? (
    isImage()
  ) : picurl === "video" ? (
    isVideo()
  ) : (
    <h1>Error loading page</h1>
  );
}
