import React from 'react';
import './speakers.css';
import HocSpeakers from './HocSpeakers';

  const WithHocSpeakers = ({speakers}) => {
              return  (
                  <div className="speakers">
                      <h2>Speakers with HOC</h2>
                      {
                          speakers.map(({ imageSrc, name }) => {
                              return <img src={imageSrc} alt={name} key={imageSrc} />
                          })
                      }
                  </div>
              );
  };
  
  const NewComponent = HocSpeakers(WithHocSpeakers);


export default NewComponent;
