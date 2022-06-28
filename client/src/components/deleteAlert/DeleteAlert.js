import axios from "axios";
import React from "react";
import "./deleteAlert.scss";

function DeleteAlert({ setShowDeleteAlert, id }) {
  //Delete jobPost
  const handleDelete = async () => {
    try {
      await axios.delete(`/jobPosts/delete/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="deleteAlertContainer">
      <span className="areYouSure">Are you sure ?</span>
      <div className="dacButton">
        <button className="dacYes" onClick={handleDelete}>
          Yes
        </button>
        <button className="dacYes" onClick={() => setShowDeleteAlert(false)}>
          No
        </button>
      </div>
    </div>
  );
}

export default DeleteAlert;
