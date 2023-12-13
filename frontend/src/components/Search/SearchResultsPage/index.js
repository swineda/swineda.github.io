/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import { thunkReadFavorites } from "../../../store/favoritesReducer";
import { thunkSearchAllProducts } from "../../../store/searchReducer";
import AddToCart from "../../Cart/AddToCart";
import UpdateFavorite from "../../Favorites/UpdateFavorite";
import Footer from "../../Footer";
import LandingAdvertDepartmentList from "../../Landing/LandingAdvertPanels/LandingAdvertDepartmentList";
import "./SearchResultsPage.css"
import nullSearchResultsIcon from "../../../images/Search/null-search-icon.svg"


/******************************* COMPONENT *******************************/
function SearchResultsPage() {

  /****************** access store *******************/
  const searchState = useSelector(state => state.search)

  /************ key into pertinent values ************/
  const productsArr = Object.values(searchState.searchResults)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkSearchAllProducts());
  }, [])

  // useEffect(() => {
  //   dispatch(thunkReadFavorites())
  // })


  /************* conditional components **************/
  let searchResults;

  if (productsArr.length > 0) {
    searchResults = (
    <>
      <div className="DepartmentPage-product-quantity-results">
        <p>{productsArr.length} results for {searchState.searchTerm}</p>
      </div>

      <div className="product-card-container">

        {productsArr.map((product) => (
            <div className="product-card">

            <div className="product-card-thumbnail-container">
            <NavLink
              exact
              to={`/departments/${product.departmentId}/products/${product.id}`}
              onClick={(e) => window.scrollTo(0,0)}
            >
              <img
              src={product.previewImage}
              className="product-card-thumbnail"
              // onMouseOver={}
              ></img>
            </NavLink>
            </div>


            <div className="product-card-title-container">
              <div className="product-card-name-container">
                <NavLink
                  key={`${product.id}`}
                  exact
                  to={`/departments/${product.departmentId}/products/${product.id}`}
                  className="product-card-name"
                  onClick={(e) => window.scrollTo(0,0)}
                  >
                    {product.name}
                </NavLink>
              </div>
              {/* <div className="product-card-favorite-button-container">
                  <UpdateFavorite productId={product.id}/>
              </div> */}
            </div>


            <div className="product-card-brand-container">
              <p className="product-card-brand">{product.brand}</p>
            </div>


            <div className="DepartmentPage-rating-container">
              <StarRatings
                rating={product.avgRating}
                starRatedColor="#ffd700"
                numberOfStars={5}
                name='rating'
                starDimension='12px'
                starSpacing='0'
              />
                <div id="DepartmentPage-rating-review-count">{product.numReviews}</div>
              </div>


              <div className="product-card-price-container">
                {/* <div className="product-card-price">${(product.price).toFixed(2)}</div> */}
                <div className="product-card-location">When purchased online</div>
              </div>


              <div className="product-card-CartAdd-container">
                {/* <div className="product-card-CartAdd-shipping-offer">
                  <span>Get it as soon as 9am next day</span> with Shipt
                </div> */}

                <div className="product-card-CartAdd-shipping-offer">
                  <span>Free shipping</span> with RedCard
                </div>

                <div className="product-card-CartAdd-ISPU-offer">
                  <span>Ready within 2 hours</span> with pickup
                </div>

                <AddToCart
                  productId={product.id}
                  text={`Deliver it`}
                  cssSelector={"DepartmentPage-AddToCart-button"}
                />
              </div>

          </div>

        ))}
      </div>
    </>
    )
  } else {
    searchResults = (
      <>
        <div className="null-search-results-container">

          <div className="null-search-results-icon-container">
            <img
              src={nullSearchResultsIcon}
              alt="Null search results icon :P"
              className="null-search-results-icon"
            >
            </img>
          </div>

          <div className="null-search-results-term-container">"{searchState.searchTerm}"</div>
          <p>We couldn’t find a match for your search.</p>

        </div>
        <LandingAdvertDepartmentList header={'Featured categories'}/>
      </>

    )
  }


  /**************** render component *****************/
  return (
    <>
    <div className="page-wrapper-container">
      <div id="SearchResultsPage-component">

        {searchResults}

      </div>
    </div>
    </>
  )
}

/******************************** EXPORTS ********************************/
export default SearchResultsPage
