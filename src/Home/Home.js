import React from "react";
import Navigation from "../Navigation/Nav";
import dian from './Himages/dian.jpg';
import './home.css';
import { useEffect } from "react";
import Collection from "../Collection/collection";
import Event from "../Event/event";
import Footer from "../footer";
import Info from "../Info/info";
import Video from "../video/video";
function Home()
{
    useEffect(() => {
        document.title = "Aveasa Website"
      }, [])
    return(
        <>
       
       
        <Navigation />
       
       

        <div className="content">
            <div id="diamond" >
            <img src={dian} width={100} />
            </div>
            <div id="name">
                <h1>ROSE QUARTZ</h1>
            <h2>Heart Chakra</h2>
            <p>This soft pink stone exists solely to promote unconditional love and compassion for those surrounding it. Rose Quartz expands its expertise to encourage self-love, as well as forgiveness and acceptance for every other relationship. Keeping Rose Quartz in bedroom, nurtures love, respect and mutual understanding between couples.</p>
             <button>Shop Now !!!</button>
            </div>

           
           
        </div>

        <Collection />

        <Event />

        <Info />

        <Video />
        <Footer />
        </>
    )
}

export default Home;