import React from "react";
import './video.css';
import Iframe from "react-iframe";
import Navigation from "../Navigation/Nav";
import Footer from "../footer";
function Mainvideo(){
    return(
        <>
        <Navigation />
        
        <div id="banner">
            <h1>VIDEOS</h1>

        </div>
         <div className="video" style={{backgroundColor:'white'}}>
            <div id="video">
                <div>
                <Iframe  height="350px" width="50%" src="https://www.youtube.com/embed/lvXe5uRcOhk?si=u9ZLIkTg2Qjhjk-b" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Iframe>              
                    <p>Animal Communications</p>     
                </div>
                <div>
                    <p>Grounding</p>
                <Iframe  height="400px" width="50%" src="https://www.youtube.com/embed/mLyuFQnf2gc?si=vFt54UCbaUyKRSBh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Iframe>
                  
                </div>
                <div>
                <Iframe  height="350px" width="50%" src="https://www.youtube.com/embed/v-Vdrr3PkwM?si=JzsTZBsiQUk42-jN" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Iframe>              
                    <p>Self Love</p>     
                </div>
                <div>
                    <p>Yoga</p>
                <Iframe  height="400px" width="50%" src="https://www.youtube.com/embed/rJSTaY-tcP4?si=DYROatltFXAiMQ6K" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Iframe>
                  
                </div>
               
            </div>
        </div>

        <Footer />
        </>
    )
}

export default Mainvideo;