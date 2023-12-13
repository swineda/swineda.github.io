/******************************** IMPORTS ********************************/
// libraries

// local files
import "./Footer.css"
import { Link, NavLink } from "react-router-dom";
import footerImage from "../../images/Footer/market-footer-image.png";
import cranebnbLogo from "../../images/Footer/CraneBnB-logo-square.png";

/******************************* COMPONENT *******************************/
function Footer() {

    return (
      // <div id="Footer-wrapper-container">
        <div id="Footer-component">

          <div className="footer-top-section">

          </div>

          <div className="footer-middle-section">
            <img src={footerImage} id="footer-image"></img>

          </div>

          <div className="footer-bottom-section">
            <div className="footer-bottom-halves-container">

              <div className="footer-bottom-left-section">
                <div className="footer-about-links-container">
                  <a href="https://www.linkedin.com/in/kevinlongboy/">
                    <i class="fa-brands fa-linkedin" id="footer-about-link"></i>
                  </a>
                </div>

                <div className="footer-about-links-container">
                  <a href="https://github.com/kevinlongboy">
                    <i class="fa-brands fa-github" id="footer-about-link"></i>
                  </a>
                </div>

                <div className="footer-about-links-container">
                  <a href="https://kl-airbnb.herokuapp.com/">
                    <img src={cranebnbLogo} id="footer-about-link-image"></img>
                  </a>
                </div>
              </div>

              <div className="footer-bottom-right-section">
                <p>TM & © 2022 Market Brands, Inc.</p>
              </div>
            </div>


          </div>

        </div>
      // </div>

    )
}


/******************************** EXPORTS ********************************/
export default Footer
