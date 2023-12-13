/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import { thunkReadFavorites } from "../../../store/favoritesReducer";
import AddToCart from "../../Cart/AddToCart";
import Footer from "../../Footer";
import UpdateFavorite from "../UpdateFavorite";
import "./CartFavorites.css"


/******************************* COMPONENT *******************************/
function CartFavorites() {

  /****************** access store *******************/
  const favoritesState = useSelector(state => state.favorites)

  /************ key into pertinent values ************/
  const products = favoritesState.allProductsByUser.Products;
  // const products = []; // uncomment to test for condition (no favorites)


  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadFavorites());
  }, [dispatch])

  /************* conditional components **************/
  let favorites

  if (products.length === 0) {
    favorites = (
        <>
          <div className="favorite-card" id="favorite-card-empty">
            <img src="https://target.scene7.com/is/content/Target/GUEST_812be4e4-60a2-449f-8488-8db14c0ce443?wid=40&hei=40&qlt=80&fmt=webp" className="empty-cart-favorites-graphic"></img>
            <p>Track your favorite items</p>
            <p>While browsing, select the heart icon on your favorite items to keep tabs on availability and new sale prices.</p>
          </div>
        </>
    )

  } else {
    favorites = (
      <>
          {products.length > 0 && products.map((product) => (
            <div className="favorite-card" id="favorite-card-contents">

              <div className="favorite-card-contents-left-container">
                <div id="cart-favorites-thumbnail-container">
                  <NavLink exact to={`departments/${product.departmentId}/products/${product.productId}`} onClick={(e) => window.scrollTo(0,0)}>
                    <img src={product.previewImage} id="cart-favorites-thumbnail"></img>
                  </NavLink>
                </div>

                <div className="cart-favorites-product-info-container">
                    <NavLink exact to={`departments/${product.departmentId}/products/${product.productId}`} id="cart-favorites-product-name" onClick={(e) => window.scrollTo(0,0)}>
                      <p>{product.name}</p>
                    </NavLink>
                  <div className="cart-favorites-ratings">
                    <StarRatings
                      rating={product.avgRating}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      name='rating'
                      starDimension='12px'
                      starSpacing='0'
                      />
                    <span id="cart-favorites-product-numReviews">{product.numReviews}</span>
                  </div>
                  <div className="cart-favorites-action-buttons-container">
                    <AddToCart
                      productId={product.productId}
                      text={`Add to cart`}
                      cssSelector={"CartFavorites-AddToCart-button"}
                    />
                    <UpdateFavorite productId={product.productId} cssSelector={"CartFavorites-UpdateFavorite-button"} />
                  </div>
                </div>
              </div>

              <div className="favorite-card-contents-right-container">
                <div className="cart-favorites-product-price-container">
                  <p>${(product.price).toFixed(2)}</p>
                </div>
              </div>

          </div>
          ))}
      </>
  )
  }

  /**************** render component *****************/
  return (
    <div className="CartFavorites-component">

      <div className="CartFavorites-header-container">
        <p>Favorites ({products.length})</p>
      </div>

      {favorites}

    </div>
  )
}


/******************************** EXPORTS ********************************/
export default CartFavorites
