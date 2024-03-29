import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueNFO = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duartion={500}>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                    <div
                                    className="vn_icon"
                                    style={{
                                        background:`url(${icon_calendar})`
                                    }} ></div>
                                <div className="vn_title">
                                    Event Date & Time
                                </div>
                                <div className="vn_desc">
                                    16 December 2019 @10.00 pm
                                </div>
                            </div>
                        </div>
                    </div>
                    </Zoom>                
                    <Zoom  duaration={500}    delay={500}>               
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow"></div>
                                    <div
                                    className="vn_icon"
                                    style={{
                                        background:`url(${icon_location})`
                                    }} ></div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    Ellisnagar,
                                    Madurai, TN
                                </div>
                            </div>
                        </div>
                    </div>

                    </Zoom> 

                </div>
            </div>
            
        </div>
    );
};

export default VenueNFO;