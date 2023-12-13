/******************************** IMPORTS ********************************/
// libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
// local files
import { Modal } from "../../../context/Modal";
import ProfileButtonModal from "./ProfileButtonModal";
import './ProfileButton.css'


/******************************* COMPONENT *******************************/
function ProfileButton({user}) {

  /************ reducer/API communication ************/
  const dispatch = useDispatch();

  /****************** manage state *******************/
  const [showModal, setShowModal] = useState(false);


  /**************** render component *****************/
  return (
    <>
      <button
        onClick={()=> setShowModal(true)}
        className='ProfileButton-container'
        >
          <i className="fas fa-user-circle" />
          <p>{user ? `Hello, ${user.firstName}`: `Sign in` }</p>
          {/* <i class="fa-solid fa-chevron-down" id='visible-on-hover'></i> */}
      </button>


      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ProfileButtonModal user={user} modalFunc={setShowModal} />
        </Modal>
      )}
    </>
  );
}


/******************************** EXPORTS ********************************/
export default ProfileButton;
