import React,{ useEffect, useState } from 'react'
import "./LandingPage.css"
import IntroduceFragment from "./IntroduceFragment"

function LandingPage(props) {

    const [isHome, setisHome] = useState(true)
    const [isAbout, setisAbout] = useState(false)

    const toAbout =(e)=>{
      setisHome(false)
      setisAbout(true)
    }
    const toHome =(e)=>{
        setisHome(true)
        setisAbout(false)
      }
    function parallax(e){
        document.querySelectorAll('.elementsX').forEach(layer =>{
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX*speed)/100;
            layer.style.transform = `translateX(${x}px)`;
        })
    }
    function parallay(e){
        document.querySelectorAll('.elementsY').forEach(layer =>{
            const speed = layer.getAttribute('data-speed');
            const y = (window.innerWidth - e.pageY*speed)/100;
            layer.style.transform = `translateY(${y}px)`;
        })
    }
    document.addEventListener("mousemove", parallax)
    document.addEventListener("mousemove", parallay)
    return (
    
        <div className="container">
            <form className="left"  >
                <form className="home" style={{visibility : isHome ? "visible": "hidden"}}>
                    <h2>CHAEYEON's</h2>
                    <h2>PORTFOLIO</h2>
                </form>
                <form className="introduce" style={{visibility : isAbout ? "visible": "hidden", display : isHome ? 'none' : 'inline'}}>
                    <IntroduceFragment />
                    <img src="circle.png" className="elementsX" data-speed="10" style={{ top:'100px', left:'250px'}}/>
                    <img src="polygon.png"  className="elementsX" data-speed="8" style={{ top:'180px', right:'180px'}}/>
                    <img src="square.png" className="elementsX" data-speed="-10" style={{ bottom:'100',left:'500px'}}/>
                    <img src="triangle.png"  className="elementsY" data-speed="-8" style={{ top:'250px',right:'50px'}}/>
                    <img src="star.png"  className="elementsY" data-speed="6" style={{ bottom:'150px',left:'50px'}}/>
                </form>
            </form >
            <form className="right">
                <ul>
                    <li><a href="/land" data_text="HOME" onClick={toHome}>Home</a></li>
                    <li><a data_text="About" onClick={toAbout} style={{ cursor: 'pointer'}}>About</a></li>
                    <li><a href="/land/portfolio" data_text="Portfolio">Portfolio</a></li>
                </ul>
            </form>
       </div>
   
    )
}

export default LandingPage
