/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import  StarRatings from 'react-star-ratings';
// local files
import "./ReviewCreateForm.css"
import { thunkCreateSingleReview, thunkReadAllProductReviews, thunkReadAllUserReviews } from "../../../store/reviewsReducer";
import { thunkReadSingleProductDetails } from "../../../store/productsReducer";

/******************************* COMPONENT *******************************/
function ReviewCreateForm() {

    /****************** access store *******************/
    const sessionState = useSelector(state => state.session);
    const reviewsState = useSelector(state => state.reviews);
    const user = useSelector(state => state.session.user);
    const product = useSelector(state => state.products.singleProductDetails);

    /************ key into pertinent values ************/
    const { productId } = useParams()
    const departmentId = product.Department.id
    const imagesArr = product.ProductImages
    const displayImage = imagesArr[0]
    // reviews
    const userReviews = Object.values(reviewsState.allReviewsByUser)
    let alreadyReviewedByUser = userReviews.find((review) => review.productId == productId)

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkReadSingleProductDetails(productId))
    }, [dispatch])

    useEffect(() => {
        dispatch(thunkReadAllUserReviews())
    }, [dispatch])

    /****************** manage state *******************/
    const [rating, setRating] = useState(5);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    // render errors
    useEffect(() => {
        const errors = [];

        if (!rating) {
            errors.push("Please enter a rating.")
        }

        if (title.length > 0 && title.length < 5) {
        errors.push("Please write a longer title.")
        } else if (title.length > 50) {
        errors.push("Please write a shorter title.")
        }

        if (description.length > 0 && description.length < 20) {
            errors.push("Please write a longer description.")
        } else if (description.length > 255) {
            errors.push("Please write a shorter description.")
        }

        if (errors.length) {
            setValidationErrors([...errors])
        }

        setValidationErrors([...errors])
    }, [rating, title, description])

  /***************** handle events *******************/
  const history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.push(`/departments/${departmentId}/products/${productId}`)
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    let errors = [];
    setValidationErrors(errors);

    let createReviewData = {
      rating: rating,
      title: title,
      description: description,
    }

    dispatch(thunkCreateSingleReview(parseInt(productId), createReviewData)).catch(
      async (res) => {

          const data = await res.json();

          if (data && data.errors) {
            data.errors.forEach(message => errors.push(message));
            setValidationErrors(errors);
          }
      });

    history.push(`/departments/${departmentId}/products/${productId}`)
  }

  /**************** render component *****************/
  if (sessionState && user == null) {
    return <Redirect to="/"></Redirect>
  }
  if (alreadyReviewedByUser) {
    return <Redirect to={`/reviews/${alreadyReviewedByUser.id}/edit`}></Redirect>
  }

  return (
    <div className="page-wrapper-container">
      <div id="ReviewCreateForm-component">

        <div class="ReviewCreateForm-left-container">
            {displayImage && <img src={displayImage.url} className="ReviewCreateForm-display-image"></img>}
        </div>


        <div className="ReviewCreateForm-right-container">

            <div className="ReviewCreateForm-title-container">
                <div className="review-form-title">Review this item</div>
                <div className="review-form-item">{product.name}</div>
                <div className="review-form-display-name">Display name: {sessionState.user && sessionState.user.username}</div>
            </div>



            <form onSubmit={handleSubmit} className="review-form">


                <div className="review-form-star-section">
                    <h2>First, rate this item</h2>
                    <StarRatings
                        isSelectable={true}
                        rating={rating}
                        changeRating={(rating) => setRating(rating)}
                        starRatedColor="#ffd700"
                        starHoverColor="#ffd700"
                        numberOfStars={5}
                        name='rating'
                        starDimension='32px'
                        starSpacing='0'
                    />
                </div>



                <div className="review-form-written-section">

                    <label>
                        <div>
                            <div className="review-form-title-prompt">Write your review</div>
                        </div>
                        <input
                            className="review-form-text-field"
                            type="text"
                            name="title"
                            minLength={5}
                            placeholder="Review title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required={true}
                            >
                        </input>
                        <p className="review-form-subtext">summarize your thoughts in a short headline</p>
                    </label>


                    <label>
                        <textarea
                            className="review-form-textarea-field"
                            type="textarea"
                            name="description"
                            placeholder="Provide a brief description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required={true}
                            minLength={20}
                            >
                        </textarea>
                        <p className="review-form-subtext">Minimum length is 20 characters.
                        {/* <span>
                        Tips for writing helpful reviews
                        </span> */}
                        </p>
                    </label>

                </div>



            <div className="review-form-errors-section">
                {validationErrors.map((error, idx) => (
                    <p key={idx} className="form-validation-errors">{error}</p>
                    ))}
            </div>


            <div className="review-form-submit-section">
                <p>By submitting, I agree to the {' '}
                    <span id="review-form-guidelines-link">review guidelines</span></p>


                <button
                // onClick={() => <Redirect to={`/departments/${departmentId}/products/${productId}`}></Redirect>}
                onClick={handleCancel}
                className="review-form-button"
                >
                Cancel
                </button>

                <button
                type="submit"
                disabled={!!validationErrors.length}
                className="review-form-button"
                >
                Submit review
                </button>
            </div>

            </form>

        </div>

      </div>
    </div>
  )
}


/******************************** EXPORTS ********************************/
export default ReviewCreateForm
