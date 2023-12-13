/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
// local files
import "./WeeklyAd.css"
import { Modal } from "../../../context/Modal";
import reminderBanner from "../../../images/WeeklyAd/weeklyAd-reminder-banner.jpeg";
import expectMoreBanner from "../../../images/WeeklyAd/weeklyAd-expect-more-banner.jpeg";
import weeklyAdPage1 from "../../../images/WeeklyAd/weeklyAd-1.png";
import weeklyAdPage2 from "../../../images/WeeklyAd/weeklyAd-2.jpeg";
import weeklyAdPage3 from "../../../images/WeeklyAd/weeklyAd-3.jpeg";
import weeklyAdPage4 from "../../../images/WeeklyAd/weeklyAd-4.jpeg";


/******************************* COMPONENT *******************************/
function WeeklyAd() {

    /************ key into pertinent values ************/
    const images = [
        {
            original: weeklyAdPage1,
            thumbnail: weeklyAdPage1,
        },
        {
            original: weeklyAdPage2,
            thumbnail: weeklyAdPage2,
        },
        {
            original: weeklyAdPage3,
            thumbnail: weeklyAdPage3,
        },
        {
            original: weeklyAdPage4,
            thumbnail: weeklyAdPage4,
        },
    ]

    /****************** manage state *******************/
    const [showModal, setShowModal] = useState(false);

    /**************** render component *****************/
    return (
        <div className="landing-wrapper-container">
            <div id="WeeklyAd-component">

                <div className="WeeklyAd-header">
                    <h3>Weekly Ads & Catalogs</h3>
                </div>

                <div className="WeeklyAd-main">
                    <div className="WeeklyAd-main-left">
                        <img
                            src={weeklyAdPage1}
                            // onClick={()=> setShowModal(true)}
                            id="WeeklyAd-advert-image"
                        >
                        </img>
                    </div>

                    <div className="WeeklyAd-main-right">
                        <h2>Weekly Ad</h2>
                        <h4>Prices Valid Jan 1 - Jan 7</h4>
                        <div className="View-WeeklyAd-button-container">
                            <button
                                className="View-WeeklyAd-button"
                                onClick={()=> setShowModal(true)}
                            >
                                View the Weekly Ad
                            </button>

                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <ImageGallery items={images} showPlayButton={false} onClick={(e) => setShowModal(false)}/>
                                </Modal>
                            )}
                        </div>
                        <div className="days-to-save-container">
                            <span>07</span>
                            <div className="days-to-save-container-left">
                                <span>days to</span>
                                <span>save</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border"></div>

                <div className="WeeklyAd-banners-container">
                    <div>
                        <img src={reminderBanner} className="WeeklyAd-banner"></img>
                    </div>
                    <div>
                        <img src={expectMoreBanner} className="WeeklyAd-banner"></img>
                    </div>
                </div>

                <div className="WeeklyAd-footer">
                    <div className="WeeklyAd-footer-line-1">
                        <p>Terms</p>
                        <p>Privacy<span style={{color:"#CC0000"}}> updated 12/2022</span></p>
                        <p>Interest-Based Ads</p>
                        <p>CA Supply Chain Act</p>
                        <p>CA Privacy</p>
                        <p>My Privacy Choices - CA</p>
                    </div>
                    <div className="WeeklyAd-footer-line-2">
                        <p>© 2023 Market Brands, Inc.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


/******************************** EXPORTS ********************************/
export default WeeklyAd
