import React from 'react';
import OneCertificate from './OneCertificate';

function AllCertificate({ CertificateArray }) {
  return (
    <div className="carousel-inner text-center">
        {
            CertificateArray.map(Certificate => {
                return (
                        <OneCertificate 
                            key={Certificate.id} 
                            id={Certificate.id} 
                            course={Certificate.course}
                            center={Certificate.center}
                            country={Certificate.country}
                            date={Certificate.date}
                            active={Certificate.active}
                        />
                    )
            })
        }
    </div>
    )
  }
  export default AllCertificate;