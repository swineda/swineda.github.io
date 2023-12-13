/******************************** IMPORTS ********************************/
// libraries
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import  StarRatings from 'react-star-ratings';
// local files
import { thunkAddSingleProductToFavorites, thunkReadFavorites, thunkRemoveSingleProductFromFavorites } from "../../../store/favoritesReducer";
import AddToCart from "../../Cart/AddToCart";
import "./UpdateFavorite.css"


/******************************* COMPONENT *******************************/
function UpdateFavorite({productId, cssSelector}) {

    /****************** access store *******************/
    const user = useSelector(state => state.session.user);
    const favoritesState = useSelector(state => state.favorites)

    /************ key into pertinent values ************/
    const products = favoritesState.allProductsByUser.Products;
    // const products = []; // uncomment to test for condition (no favorites)
    const alreadyFavorite = products.find(obj => obj.productId == productId)

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkReadFavorites());
    }, [dispatch, products])

    /***************** handle events *******************/
    const history = useHistory()
    function dispatchAppropriateThunk(productId) {

        if (user == null) {
            window.scrollTo(0,0)
            history.push('/login')
        }

        let productData = {
            productId: productId
        }

        // alreadyFavorite ? dispatch(thunkRemoveSingleProductFromFavorites(alreadyFavorite.favoriteId)) : dispatch(thunkAddSingleProductToFavorites(productData))

        if (alreadyFavorite) {
            dispatch(thunkRemoveSingleProductFromFavorites(alreadyFavorite.favoriteId))
        } else {
            dispatch(thunkAddSingleProductToFavorites(productData))
        }
    }

    /**************** render component *****************/
    return (
        <>
            <button
                className="favorite-button"
                id={cssSelector}
                type="submit"
                onClick={(e) => dispatchAppropriateThunk(productId)}
            >
                {alreadyFavorite ?
                    <i class="fa-solid fa-heart" id="is-favorite"></i> :
                    <i class="fa-regular fa-heart" id="is-not-favorite"></i>
                }
            </button>
        </>
    )
}


/******************************** EXPORTS ********************************/
export default UpdateFavorite
