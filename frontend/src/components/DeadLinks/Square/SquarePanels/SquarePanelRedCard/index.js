/******************************** IMPORTS ********************************/
// libraries
import { NavLink } from "react-router-dom";
// local files
import "./SquarePanelRedCard.css"
import redcard from "../../../../../images/Square/square-redcard-icon.png";


/******************************* COMPONENT *******************************/
function SquarePanelRedCard() {


    /**************** render component *****************/
    return (
        <div className="SquarePanelRedCard-component">
            <div className="SquarePanelRedCard-content-container">

                <div className="SquarePanelRedCard-image-container">
                    <img src={redcard} alt="RedCard icon" id="Square-RedCard-icon-2"></img>
                </div>

                <div className="SquarePanelRedCard-text-container">
                    <h2>Have a RedCard™?</h2>
                    <p>Join Market Square to start receiving the benefits of voting and offers. You’ll continue to save 5% when you pay with your RedCard, instead of earning 1% with Market Square.<sup>2</sup></p>
                    <span>Don’t have a RedCard yet? {' '}
                        <NavLink exact to="/redcard" onClick={(e) => window.scrollTo(0,0)}>Learn more about RedCard</NavLink>
                    </span>
                </div>

            </div>
        </div>
    )
}


/******************************** EXPORTS ********************************/
export default SquarePanelRedCard
