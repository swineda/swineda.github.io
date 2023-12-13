/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
import ImageGallery from 'react-image-gallery';
// local files
import "./ProductPage.css"
import { Modal } from "../../../context/Modal";
import ProductReviews from "../../Reviews/ProductReviews";
import AddToCart from "../../Cart/AddToCart";
import UpdateFavorite from "../../Favorites/UpdateFavorite";
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";
import { thunkReadAllProductReviews, thunkReadAllUserReviews } from "../../../store/reviewsReducer";
import { thunkReadFavorites } from "../../../store/favoritesReducer";


/******************************* COMPONENT *******************************/
function ProductPage() {

  /****************** access store *******************/
  const user = useSelector(state => state.session.user);
  const product = useSelector(state => state.products.singleProductDetails)
  const productImages = useSelector(state => state.products.singleProductDetails.ProductImages)
  // console.log("productImages", productImages)
  const reviewsState = useSelector(state => state.reviews);
  const favoritesState = useSelector(state => state.favorites);

  /************ key into pertinent values ************/
  const { productId } = useParams()
  const mainImage = productImages[0]
  // reviews
  const userReviews = Object.values(reviewsState.allReviewsByUser)
  let alreadyReviewedByUser = userReviews.find((review) => review.productId == productId)
  // images for modal
  // const modalImages = []
  // productImages && productImages.forEach(img => modalImages.push({original: img.url, thumbnail: img.url}))

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(thunkReadSingleProductDetails(productId));
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadAllProductReviews(productId));
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadAllUserReviews());
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkReadFavorites())
  }, [dispatch])

  /****************** manage state *******************/
  const [showModal, setShowModal] = useState(false);

  /************* conditional components **************/
  let displayReviewButton
  if (user == null) {
    displayReviewButton = (
      <></>
      // <NavLink exact to={`/reviews/${alreadyReviewedByUser.id}/edit`} id="review-button-link">
      //   <button id="ProductPage-write-a-review-button">Edit review</button>
      // </NavLink>
      )
  } else if (user && alreadyReviewedByUser ) {
    displayReviewButton = (
    <></>
    )
  } else {
    displayReviewButton = (
      <NavLink
        exact to={`/products/${product.id}/add-review`}
        id="review-button-link"
        onClick={(e) => window.scrollTo(0,0)}
      >
        <button id="ProductPage-write-a-review-button">Write a review</button>
      </NavLink>
    )
  }


  /**************** render component *****************/

  return (
    <div className="ProductPage-page-wrapper-container">

      <div id="ProductPage-component">


          <div className="ProductPage-header-container">

            <div className="ProductPage-directory-container">
              <NavLink
                exact to={'/'}
                onClick={(e) => window.scrollTo(0,0)}
              >
                Market
              </NavLink>

              <p>/</p>

              <NavLink
                exact to={`/departments/${product.Department.id}/`}
                onClick={(e) => window.scrollTo(0,0)}
              >
                {product.Department.name}
              </NavLink>
            </div>

            <div className="ProductPage-title-container">
                <div className="ProductPage-title">{product.name}</div>
            </div>
          </div>



          <div className="ProductPage-body-container">

            <div className="ProductPage-thumbnails-container">
              {productImages.length > 0 && productImages.map((image, index) => (
                <div className="ProductPage-thumbnail-container">
                  <img
                    src={image.url}
                    key={index + 1}
                    id="ProductPage-thumbnail"
                    // onClick={()=> setShowModal(true)}
                  >
                  </img>
                </div>
                ))}
            </div>

            {mainImage && (
              <div
                id="ProductPage-main-image-container"
                style={{
                  backgroundImage:`url(${productImages[0].url})`,
                  backgroundRepeat:"no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                // onClick={()=> setShowModal(true)}
                >

                <div id="ProductPage-UpdateFavorite-button">
                  <UpdateFavorite productId={productId}/>
                </div>

              </div>
            )}

            {/* {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <ImageGallery items={modalImages} showPlayButton={false} showThumbnails={true} onClick={(e) => setShowModal(false)}/>
              </Modal>
            )} */}

            <div className="ProductPage-review-and-actions-container">

                <div className="ProductPage-price-container">
                  <div>{product && `$${parseInt(product.price).toFixed(2)}`}</div>
                  <p>When purchased online</p>
                </div>

                <div className="ProductPage-rating-container">
                <StarRatings
                  rating={product.avgRating}
                  starRatedColor="#ffd700"
                  numberOfStars={5}
                  name='rating'
                  starDimension='20px'
                  starSpacing='0'
                />
                  <div id="ProductPage-rating-review-count">{product.numReviews}</div>
                </div>

                <div>
                  <AddToCart
                    productId={productId}
                    text={`Add to cart`}
                    cssSelector={"ProductPage-AddToCart-button"}
                    />
                </div>
              </div>

            </div>

        <div className="random-div">

        <div className="ProductPage-description-container">

          <div className="ProductPage-description-header-container">
            <div>About this item</div>
            <div><p>Details</p></div>
          </div>

          <div className="ProductPage-description-highlights-container">
            <div>Highlights</div>
            <p>{product.description}</p>
          </div>


        </div>


        </div>

      <ProductReviews product={product} reviewsState={reviewsState}/>
        {displayReviewButton}
      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ProductPage
