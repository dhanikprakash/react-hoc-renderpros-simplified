import React from 'react';
import './speakers.css';
import RenderPropsSpeaker from './RenderPropsSpeakers';


const WithRenderProps = () => {
    return (
        <RenderPropsSpeaker >{({ speakers }) => {
            return (
                <div className="speakers">
                    <h2>Speakers with Render Props</h2>
                    {
                        speakers.map(({ imageSrc, name }) => {
                            return <img src={imageSrc} alt={name} key={imageSrc} />
                        })
                    }

                </div>
            )
        }}
        </ RenderPropsSpeaker>
    )
}

export default WithRenderProps
