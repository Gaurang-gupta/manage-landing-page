import React from 'react'
import "./Features.css"
const Features = () => {
    return (
        <div className='features__wrapper'>
            <div className='features__intro'>
                <h1 className='features__intro__heading'>What's different about Manage?</h1>
                <p className='features__intro__para'>
                    Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
                </p>
            </div>
            <div className='features__cards'>
                <div className='features__card'>
                    <div className='features__card__title__container'>
                        <span className='features__card__number'>01</span>
                        <span className='feature__card__heading'>Track company-wise progress</span>
                    </div>
                    <div className='features__card__content space'>
                        <p className='feature__card__para'>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                    </div>
                </div>
                <div className='features__card'>
                    <div className='features__card__title__container'>
                        <span className='features__card__number'>02</span>
                        <span className='feature__card__heading'>Advanced built-in reports</span>
                    </div>
                    <div className='features__card__content space'>
                        <p className='feature__card__para'>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                    </div>
                </div>
                <div className='features__card'>
                    <div className='features__card__title__container'>
                        <span className='features__card__number'>03</span>
                        <span className='feature__card__heading'>Everything you need in one place</span>
                    </div>
                    <div className='features__card__content'>
                        <p className='feature__card__para'>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features