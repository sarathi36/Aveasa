import React from "react";
import './footer.css';
import insta from './images/instagram-brands-solid.svg';
import fb from './images/facebook-brands-solid.svg';
import mail from './images/envelope-regular.svg';
import wa from './images/whatsapp-brands-solid.svg';
import linkedin from './images/linkedin-brands-solid.svg';
function Footer(){
    return(
        <>
        <div className="footer">
            <div>
                <p>Connect with us</p>
            </div>
            <div id="footer">
                <div>
                <img src={linkedin} width={100} />
                </div>
                <div>
                <img src={mail} width={100} />
                </div>
                <div>
                <img src={wa} width={100} />
                </div>
                <div>
                <img src={fb} width={100} />
                </div>
                <div>
                <img src={insta} width={100} />
                </div>
                
               
            </div>
            
        </div>
        </>
    )
}

export default Footer;