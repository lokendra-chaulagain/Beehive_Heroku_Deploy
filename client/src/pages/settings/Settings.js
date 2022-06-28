import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./settings.scss";
import RightBar from "../../components/rightBar/RightBar";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Settings() {
  const { user } = useContext(AuthContext);
  const [showSettingEditCon, setShowSettingEditCon] = React.useState(false);

  const notifySuccess = (msg) => toast.success(msg, { theme: "colored" });
  const notifyFailure = (msg) => toast.error(msg, { theme: "colored" });

  //Edit userCredentials
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/users/update/${user._id}`, {
        username,
        email,
        password,
      });
      //update local storage also
      localStorage.setItem("user", JSON.stringify(res.data));
      // window.location.reload();
      setTimeout(function () {
        window.location.reload();
      }, 2000);
      notifySuccess("Credential updated successfully");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch (error) {
      console.log(error);
      notifyFailure("Something went wrong");
    }
  };

  return (
    <div className="settingsPage">
      <div className="spWrapper">
        <Navbar />
        <div className="spBeforeSplit">
          <div className="spLeftCon">
            <LeftBar />
          </div>

          <div className="spCenterCon">
            <div className="userCredentialEditCon">
              <div className="usiRow1">
                <span className="usiTitle">General Account Setting</span>
                <button
                  className="usiEditBut"
                  onClick={() => setShowSettingEditCon(!showSettingEditCon)}
                >
                  Edit
                </button>
              </div>

              <hr className="suiHr1" />
              <div className="usiItemCon">
                <span className="usiItemTitle">Username</span>
                <span className="usiItemTitleValue">{user.username}</span>
              </div>
              <hr className="suiHr2" />

              <div className="usiItemCon">
                <span className="usiItemTitle">Email</span>
                <span className="usiItemTitleValue">{user.email}</span>
              </div>
              <hr className="suiHr2" />

              <div className="usiItemCon">
                <span className="usiItemTitle">Password</span>
                <span className="usiItemTitleValue">*************</span>
              </div>
              <hr className="suiHr1" />
            </div>
            {/* --------------------------------- */}

            {/* User Credential Edit Mode Container */}
            {showSettingEditCon && (
              <form className="userCredentialEditForm" onSubmit={handleSubmit}>
                <div className="userCredentialEditModeCon">
                  <div className="ucemcRow1">
                    <span className="ucemcTitle">
                      Change Account Credentials
                    </span>
                    <button
                      className="ucemcCancelBut"
                      onClick={() => setShowSettingEditCon(!showSettingEditCon)}
                    >
                      Cancel
                    </button>
                  </div>

                  <hr className="ucemcHr1" />
                  <div className="ucemcItemCon">
                    <span className="ucemcItemTitle">Username</span>
                    <input
                      type="text"
                      className="ucemcItemTitleValueInput"
                      placeholder="New Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <hr className="ucemcHr2" />

                  <div className="ucemcItemCon">
                    <span className="ucemcItemTitle">Email</span>
                    <input
                      type="email"
                      className="ucemcItemTitleValueInput"
                      placeholder="New Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <hr className="ucemcHr2" />

                  <div className="ucemcItemCon">
                    <span className="ucemcItemTitle">Password</span>
                    <input
                      type="text"
                      className="ucemcItemTitleValueInput"
                      placeholder="New Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <hr className="ucemcHr1" />
                  <button className="ucemcSaveBut" type="submit">
                    Save
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="spRightCon">
            <RightBar />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Settings;
