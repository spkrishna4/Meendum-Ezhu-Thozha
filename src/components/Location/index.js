import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
           <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5281.522833423382!2d78.0978540078582!3d9.915158507055486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf778e3b4b67%3A0xc10be659ae7f8041!2sH625%2C+State+Bank+Supervisors+Colony%2C+Madurai%2C+Tamil+Nadu+625016!5e0!3m2!1sen!2sin!4v1564413955666!5m2!1sen!2sin" 
           width="100%" 
           height="500px" 
           frameBorder="0" 
           allowFullScreen>
               </iframe>
               <div className="location_tag">
                   <div>Location</div>
                </div> 
        </div>
    );
};

export default Location; 