import React from 'react';
import "./Banner.css";
function Banner() {
  return(
    <header className="banner" style={{
        backgroundSize:"cover",
        backgroundImage: `url("https://coldfeet-space.nyc3.digitaloceanspaces.com/wsb/2014/12/IMG_2891.png")`,
        backgroundPosition:"center center",
    }}>    
    </header>
  );
}

export default Banner;