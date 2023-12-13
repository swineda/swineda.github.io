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
import "./FavoritesPage.css"


/******************************* COMPONENT *******************************/
function FavoritesPage() {

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

  if (products.length > 0) {
    favorites = (
        <>
            <div className="product-card-container">

            {products.length > 0 && products.map((product) => (
                <div className="product-card">

                <div className="product-card-thumbnail-container">
                <Link
                exact
                to={`/departments/${product.departmentId}/products/${product.productId}`}
                onClick={(e) => window.scrollTo(0,0)}
                >
                <img
                src={product.previewImage}
                className="product-card-thumbnail"
                // onMouseOver={}
                ></img>
                </Link>
                </div>


                <div className="product-card-title-container">
                  <div className="product-card-name-container">
                    <Link
                        key={`${product.id}`}
                        exact to={`/departments/${product.departmentId}/products/${product.productId}`}
                        className="product-card-name"
                        onClick={(e) => window.scrollTo(0,0)}
                        >
                        {product.name}
                    </Link>
                  </div>
                  <div className="product-card-favorite-button-container">
                      <UpdateFavorite productId={product.productId}/>
                  </div>
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
                    <div className="product-card-price">${(product.price).toFixed(2)}</div>
                    <div className="product-card-location">When purchased online</div>
                </div>


                <div className="product-card-CartAdd-container">

                    <div className="product-card-CartAdd-shipping-offer">
                    <span>Free shipping</span> with RedCard
                    </div>

                    <div className="product-card-CartAdd-ISPU-offer">
                    <span>Ready within 2 hours</span> with pickup
                    </div>

                    <AddToCart
                    productId={product.productId}
                    text={`Add to cart`}
                    cssSelector={"UserFavorites-AddToCart-button"}
                    />
                </div>

            </div>

            ))}
            </div>
        </>
    )

  } else {
    favorites = (
        <>
        <div className="no-favorites-message-container">

            <i class="fa-solid fa-heart" id="heart-icon-UserFavorites-no-favorites"></i>

            <p className="no-favorites-message-title">Show some love!</p>

            <p className="no-favorites-message-main">You currently don't have any favorited items. Once you've favorited items that you love or want to keep track of, they will be shown here.</p>

            <p className="no-favorites-message-subtext">Here are some popular categories to get you started</p>

            <div className="no-favorites-message-suggested-categories">
              <NavLink exact to={'/departments/5'} onClick={(e) => window.scrollTo(0,0)}>Electronics</NavLink>
              <NavLink exact to={'/departments/6'} onClick={(e) => window.scrollTo(0,0)}>Video Games</NavLink>
              <NavLink exact to={'/departments/9'} onClick={(e) => window.scrollTo(0,0)}>Furniture</NavLink>
              <NavLink exact to={'/departments/8'} onClick={(e) => window.scrollTo(0,0)}>Pets</NavLink>
            </div>
        </div>
        </>
    )
  }

  /**************** render component *****************/
  return (
    <div className="UserFavorites-page-wrapper-container">
      <div id={products.length > 0 ? "UserFavorites-component" : "UserFavorites-component-empty"}>

        <div className='UserFavorites-title'>
            <div><i class="fa-solid fa-heart" id="heart-icon-UserFavorites"></i> {'  '} Favorites</div>

            <div id="UserFavorites-directory-container">
                <NavLink exact to={'/'} onClick={(e) => window.scrollTo(0,0)}>
                    Market
                </NavLink>
                <p>/</p>
                <p>Favorites</p>
                </div>
        </div>

        {favorites}

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default FavoritesPage
