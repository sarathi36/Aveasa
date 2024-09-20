import React from "react";
import './info.css';
import i1 from './inimages/i1.jpg';
import i2 from './inimages/i2.jpg';
import i3 from './inimages/i3.jpg';
function Info(){
    return(
        <>
        <div id="coc">
            <p>Info</p>
        </div>
        <div className="info">
            <div id="info">
                <div>
                    <img src={i1} width={100} />
                </div>
                <div>
                    <img src={i2} width={100} />
                </div>
                <div>
                    <img src={i3} width={100} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Info;