/******************************** IMPORTS ********************************/
// libraries
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// local files
import "./Square.css"
import SquarePanelBenefits from "./SquarePanels/SquarePanelBenefits";
import SquarePanelHeader from "./SquarePanels/SquarePanelHeader";
import SquarePanelRedCard from "./SquarePanels/SquarePanelRedCard";
import SquarePanelRedemption from "./SquarePanels/SquarePanelRedemption";


/******************************* COMPONENT *******************************/
function Square() {

  /****************** access store *******************/

  /**************** render component *****************/
  return (
    // <div className="landing-wrapper-container">
      <div id="Square-component">

        <div className="Square-panel-container" id="Square-panel-container-full-width">
            <SquarePanelHeader />
        </div>

        <div className="Square-panel-container">
          <SquarePanelBenefits />
        </div>

        <div className="Square-panel-container">
          <SquarePanelRedemption />
        </div>

        <div className="Square-panel-container">
          <SquarePanelRedCard />
        </div>

      </div>
    // </div>
  )
}


/******************************** EXPORTS ********************************/
export default Square
