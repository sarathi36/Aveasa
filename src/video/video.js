import React from "react";
import Iframe from "react-iframe";
import './video.css';
import { NavLink } from "react-router-dom";
function Video(){
    return(
        <>
        <div id="coc">
            <p>Videos</p>
        </div>
        <div className="video">
            <div id="video">
                <div>
                <Iframe  height="350px" width="50%" src="https://www.youtube.com/embed/lvXe5uRcOhk?si=u9ZLIkTg2Qjhjk-b" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Iframe>              
                    <p>Animal Communications</p>     
                </div>
                <div>
                    <p>Grounding</p>
                <Iframe  height="400px" width="50%" src="https://www.youtube.com/embed/mLyuFQnf2gc?si=vFt54UCbaUyKRSBh" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Iframe>
                  
                </div>

                
               
            </div>
        </div>

        <div id="more">
            <NavLink to='/Mainvideo'>
            <li> <a>More Videos </a></li>
            </NavLink>
           
          
        </div>

        </>
    )
}

export default Video;