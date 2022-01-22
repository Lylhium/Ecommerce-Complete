import React, { useEffect } from "react";
import '../MainPage/MainPage.css'
export default function MainPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='background'>
        <div>
            <img className="solid-img" src="../../assets/solid-image.jpg" alt='imagen inicio' />
        </div>
        </div>
        
        )
        
    };