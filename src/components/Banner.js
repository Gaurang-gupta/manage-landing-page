import React from 'react'
import "./Banner.css"
const Banner = () => {
    return (
        <>
            <div className='mobile'>
            </div>
            <div className="banner__wrapper">
                <div className='banner__content'>
                    <h1 className='banner__heading'>Bring everyone</h1>
                    <h1 className='banner__heading'>together to build</h1>
                    <h1 className='banner__heading'>better products.</h1>
                    <p className='banner__para'>
                        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view
                    </p>
                    <div className='banner__button'>
                        Get Started
                    </div>
                </div>
            </div>
        </>

    )
}

export default Banner