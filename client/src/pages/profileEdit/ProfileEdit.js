import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import "./profileEdit.scss";
import ProfileInfoEditCon from "../../components/profileInfoEditCon/ProfileInfoEditCon";

function ProfileEdit() {
  return (
    <div className="profileEditPage">
      <div className="pepWrapper">
        <Navbar />
        <div className="pepBeforeSplit">
          <div className="pepLeftCon">
            <LeftBar />
          </div>

          <div className="pepCenterCon">
            <ProfileInfoEditCon/>
          </div>

          <div className="pepRightCon">
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
