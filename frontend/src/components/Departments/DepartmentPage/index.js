/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import { thunkReadSingleDepartmentDetails } from "../../../store/departmentsReducer";
import { thunkReadFavorites } from "../../../store/favoritesReducer";
import AddToCart from "../../Cart/AddToCart";
import UpdateFavorite from "../../Favorites/UpdateFavorite";
import Footer from "../../Footer";
import "./DepartmentPage.css"


/******************************* COMPONENT *******************************/
function DepartmentPage() {

  /****************** access store *******************/
  const departmentsState = useSelector(state => state.departments)
  const favoritesState = useSelector(state => state.favorites)

  // const [thumbnail, setThumbnail] = useState()
  // 'https://target.scene7.com/is/content/Target/GUEST_26eaf754-af71-48ba-9286-d884b7fed1d8'
  // const changeImage = () => {

  // }

  /************ key into pertinent values ************/
  const { departmentId } = useParams()
  const department = departmentsState.singleDepartmentDetails;
  const productsArr = Object.values(department.Products)

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleDepartmentDetails(departmentId));
  }, [dispatch, departmentId])

  // useEffect(() => {
  //   dispatch(thunkReadFavorites())
  // })


  /**************** render component *****************/
  return (
    <>
    <div className="page-wrapper-container">
      <div id="DepartmentPage-component">

      <div className='DepartmentPage-title'>
        <div>{department.name}</div>
      </div>

      <div className="DepartmentPage-product-quantity-results">
        <p>{productsArr.length} results</p>
      </div>

      <div className="product-card-container">

        {productsArr.map((product) => (
            <div className="product-card">

            <div className="product-card-thumbnail-container">
            <NavLink
              exact
              to={`/departments/${departmentId}/products/${product.id}`}
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
                  to={`/departments/${departmentId}/products/${product.id}`}
                  className="product-card-name"
                  onClick={(e) => window.scrollTo(0,0)}
                  >
                    {product.name}
                </NavLink>
              </div>
              <div className="product-card-favorite-button-container">
                  <UpdateFavorite productId={product.id}/>
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

      </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}


/******************************** EXPORTS ********************************/
export default DepartmentPage
