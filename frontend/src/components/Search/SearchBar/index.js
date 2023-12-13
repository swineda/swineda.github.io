/******************************** IMPORTS ********************************/
// libraries
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// local files
import './SearchBar.css';
import { thunkSearchAllProducts } from '../../../store/searchReducer';

/******************************* COMPONENT *******************************/
function SearchBar(){

    /************ reducer/API communication ************/
    const dispatch = useDispatch();

    /****************** manage state *******************/
    const [term, setTerm] = useState('');

    /***************** handle events *******************/

    // submit form
    const history = useHistory();

    const handleSubmit = async (e) => {

        e.preventDefault();

        /******** Check for errors ********/
        // let errors = [];
        // setValidationErrors(errors);

        // errors for fields inputs go here, if any

        // setValidationErrors(errors);
        // if (errors.length) return;

        /******** Parse form data ********/
        let searchData = {};
        if (term) searchData.term = term

        console.log("searchData from component", searchData)


        dispatch(thunkSearchAllProducts(searchData))

        // e.target.reset();
        setTerm('')
        window.scrollTo(0,0)
        history.push(`/search`)
    }

    /************* conditional components **************/

    /**************** render component *****************/
    return (
        <div className="SearchBar-component">

                <form className='SearchBar-form'>

                    <div className='SearchBar-form-left'>
                        <label htmlFor='term' className='SearchBar-form-label'>
                            <input
                                type='text'
                                value={term}
                                onChange={e => setTerm(e.target.value)}
                                placeholder="Search"
                                className='SearchBar-form-text-input'
                                >
                            </input>
                        </label>
                    </div>

                    <div className='SearchBar-form-right'>
                        {term.length > 0 && (
                            <button className='search-form-clear-search-button-container'>
                                <i class="fa-solid fa-xmark" id='search-form-clear-search-button' onClick={(e) => setTerm('')}></i>
                            </button>
                            )}

                        <button
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            className='search-form-clear-search-button-container'
                            id="search-form-submit-search-button-container"
                        >
                                <i class="fa-solid fa-magnifying-glass" id='search-form-submit-search-button'></i>
                        </button>
                    </div>

                </form>

        </div>
    );
}


/******************************** EXPORTS ********************************/
export default SearchBar;
