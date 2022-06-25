import React,{useState,useEffect} from 'react';
import "./Nav.css";
function Nav() {
    const [show,handleShow]=useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(() => {
      window.addEventListener("scroll",transitionNavBar);
      return () => {
        window.removeEventListener("scroll",transitionNavBar);
      }
    }, [])
    
  return (
    <div className={`nav ${show&&'nav_black'}`}>
        <div className="nav_contents">
            <h1 className="nav_logo">MR.VIEWER</h1>
            
        </div>
    </div>
  )
}

export default Nav;