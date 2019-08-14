import React from 'react';
import OneIndicator from './OneIndicator';

function AllIndicators({ CertificateArray }) {
  return (
    <ol className="carousel-indicators">
        {
            CertificateArray.map(Indicators => {
                return (
                        <OneIndicator
                            key={Indicators.id} 
                            id={Indicators.id}
                            active={Indicators.active}
                        />
                    )
            })
        }
    </ol>
    )
  }
  export default AllIndicators;