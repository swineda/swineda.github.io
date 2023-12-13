/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
// local files
import "./RedCardPanelBenefits.css"
import shoppingBasket from "../../../../../images/branding/market-village/market-village-shopping-basket.png"
import deliveryTruck from "../../../../../images/branding/market-village/market-village-delivery-truck.png"
import calendar from "../../../../../images/branding/market-village/market-village-calendar.png"
import gifts from "../../../../../images/branding/market-village/market-village-gifts.png"
import starbucks from "../../../../../images/RedCard/icon-starbucks.png"
import giftCard from "../../../../../images/RedCard/icon-disney.png"
import driveUp from "../../../../../images/RedCard/icon-drive-up.png"
import shipt from "../../../../../images/RedCard/icon-shipt-delivery.png"

/******************************* COMPONENT *******************************/
function RedCardPanelBenefits() {


    /**************** render component *****************/
    return (
        <div className="RedCardPanelBenefits-component">

            <div className="RedCardPanelBenefits-panel-container">

                <div className="RedCardPanelBenefits-caption-container" id="core-benefits">
                    Everyday RedCard benefits:
                </div>

                <div className="RedCardPanelBenefits-cards-container">
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={shoppingBasket} alt="shopping basket" id="shopping-basket-icon"></img>
                        </div>
                        <p>5% off at Market</p>
                        <p>In store. Online. Every time.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={deliveryTruck} alt="delivery truck" id="delivery-truck-icon"></img>
                        </div>
                        <p>More to your door</p>
                        <p>Free shipping on most items at Market.com.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={calendar} alt="calendar" id="calender-icon"></img>
                        </div>
                        <p>More return time</p>
                        <p id="wider-details">An additional 30 days for returns and exchanges.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div    className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={gifts} alt="gifts" id="gifts-icon"></img>
                        </div>
                        <p>More exclusives</p>
                        <p id="wider-details">Including special items and offers.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                </div>

                <div className="RedCardPanelBenefits-disclaimer-container">
                <sup id="RedCard-benefits-foot-note-superscript">1</sup>Some restrictions apply. See below for RedCard benefits & program rules.
                </div>
            </div>



            <div className="RedCardPanelBenefits-panel-container">

            <div className="RedCardPanelBenefits-caption-container" id="more-benefits">
                Your everyday 5% discount
                applies to so much more.<sup id="caption-superscript">1</sup>
            </div>

                <div className="RedCardPanelBenefits-cards-container">
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={starbucks} alt="shopping basket" id="more-benefits-icon"></img>
                        </div>
                        <p>Starbucks</p>
                        <p id="wider-details">Save 5% at any in store location.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={giftCard} alt="delivery truck" id="gift-card-benefits-icon"></img>
                        </div>
                        <p>Specialty gift cards</p>
                        <p id="wider-details">Save 5% on specialty gift cards for travel, restaurants, movie tickets, and more.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={driveUp} alt="calendar" id="more-benefits-icon"></img>
                        </div>
                        <p>Drive Up</p>
                        <p id="wider-details">Stay in your car and save 5%.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                    <div    className="RedCardPanelBenefits-card">
                        <div id="icon-container">
                            <img src={shipt} alt="gifts" id="more-benefits-icon"></img>
                        </div>
                        <p>Shipt</p>
                        <p id="wider-details">Save 5% on your same day delivery order placed on Market.com.<sup className="RedCard-benefits-superscript">1</sup></p>
                    </div>
                </div>

                <div className="RedCardPanelBenefits-disclaimer-container">
                <sup id="RedCard-benefits-foot-note-superscript">1</sup>Some restrictions apply. See below for RedCard benefits & program rules.
                </div>
            </div>

        </div>
    )
}


/******************************** EXPORTS ********************************/
export default RedCardPanelBenefits
