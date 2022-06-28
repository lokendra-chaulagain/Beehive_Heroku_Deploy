import React, { useContext, useEffect, useState } from "react";
import "./userInfoEdit.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";

function UserInfoEdit() {
    const { user } = useContext(AuthContext);
    console.log(user._id);
    console.log(user);

    ///update userInfo
    const [currentJobAt, setCurrentJobAt] = useState("");
    // console.log(userInfo1);

    const handleInfoSave = (e) => {
        e.preventDefault();
        try {
            const res = axios.put(`/users/update/${user._id}`, {
                currentJobAt,
            });

            console.log(res.data);
            alert("update success");
        } catch (error) {
            console.log(error);
        }
    };

    //   get user by id
    const [ak, setak] = useState({});
    useEffect(() => {
        const getUserrData = async () => {
            try {
                const res = await axios.get(`/users/get/${user._id}`);
                setak(res.data);
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUserrData();
    }, [user._id]);

    console.log(ak);

    return (
        <form className="userInfoEdit">
            <div className="uieRow1">
                <div className="uieRow1_1">
                    <ArrowBackIcon classes="uieArrowBackIcon" />
                    <span className="uieArrowBackTxt">Edit profile</span>
                </div>
                <button className="uieRow1Btn">Save</button>
            </div>
            <hr className="uieHr1" />
            <div className="uieRow2">
                <span className="uieSpan1">Profile picture</span>
                <span className="uieSpan2">Edit</span>
            </div>
            <img src="" alt="" className="uieProfilePic" />
            <hr className="uieHr2" />
            <div className="uieRow3">
                <span className="uieSpan1">cover picture</span>
                <span className="uieSpan2">Edit</span>
            </div>
            <img src="" alt="" className="uieCoverPic" />
            <hr className="uieHr3" />
            <div className="uieRow4">
                <span className="uieSpan1">Bio</span>
                <span className="uieSpan2">Edit</span>
            </div>
            <input type="text" className="bioInput" placeholder="Add Bio Here" />

            {/* update */}
            <div className="userInfoItemEditCon">
                <BusinessCenterIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder={user.currentJobAt}
                    name="currentJobAt"
                    onChange={(e) => setCurrentJobAt(e.target.value)}
                />
            </div>

            <div className="userInfoItemEditCon">
                <BusinessCenterIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="Co-founder at Ask Buddie"
                />
            </div>

            <div className="userInfoItemEditCon">
                <BusinessCenterIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="Former WordPress Engineer at Eagle Eye"
                />
            </div>

            <div className="userInfoItemEditCon">
                <SchoolOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="Went to Oxfors Academy"
                />
            </div>

            <div className="userInfoItemEditCon">
                <ApartmentOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="R.M.E school"
                />
            </div>

            <div className="userInfoItemEditCon">
                <PermIdentityOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="lokendra"
                />
            </div>

            <div className="userInfoItemEditCon">
                <CakeOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="2002/12/28"
                />
            </div>

            <div className="userInfoItemEditCon">
                <BadgeOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="loki"
                />
            </div>

            <div className="userInfoItemEditCon">
                <LoyaltyOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="single/relationship/married/divorced"
                />
            </div>

            <div className="userInfoItemEditCon">
                <LocationOnOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="From Butwal"
                />
            </div>

            <div className="userInfoItemEditCon">
                <InstagramIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="ashiishme"
                />
            </div>

            <div className="userInfoItemEditCon">
                <TwitterIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="ashiishme"
                />
            </div>

            <div className="userInfoItemEditCon">
                <GitHubIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="ashiishme"
                />
            </div>

            <div className="userInfoItemEditCon">
                <LinkedInIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="ashiishme"
                />
            </div>

            <div className="userInfoItemEditCon">
                <EmailOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="ashiishme@gmail.com"
                />
            </div>

            <div className="userInfoItemEditCon">
                <LocalPhoneOutlinedIcon className="userInfoItemEditIcon" />
                <input
                    type="text"
                    className="userInfoItemEditInput"
                    placeholder="9864755749"
                />
            </div>

            <button className="uieSaveBtn" type="submit" onClick={handleInfoSave}>
                Save
            </button>
        </form>
    );
}

export default UserInfoEdit;














//Alternative=====================================================>
// import React, { useContext, useEffect, useState } from "react";
// import "./userInfoEdit.scss";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
// import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
// import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { AuthContext } from "../../context/authContext/AuthContext";
// import axios from "axios";

// function UserInfoEdit() {
//     const { user } = useContext(AuthContext);
//     console.log(user._id);
//     console.log(user);

//     ///update userInfo
//     const [currentJobAt, setCurrentJobAt] = useState("");
//     // console.log(userInfo1);

//     const handleInfoSave = (e) => {
//         e.preventDefault();
//         try {
//             const res = axios.put(`/users/update/${user._id}`, {
//                 currentJobAt,
//             });

//             console.log(res.data);
//             alert("update success");
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     //   get user by id
//     const [ak, setak] = useState({});
//     useEffect(() => {
//         const getUserrData = async () => {
//             try {
//                 const res = await axios.get(`/users/get/${user._id}`);
//                 setak(res.data);
//                 console.log(res.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         getUserrData();
//     }, [user._id]);

//     console.log(ak);

//     return (
//         <form className="userInfoEdit">
//             <div className="uieRow1">
//                 <div className="uieRow1_1">
//                     <ArrowBackIcon classes="uieArrowBackIcon" />
//                     <span className="uieArrowBackTxt">Edit profile</span>
//                 </div>
//                 <button className="uieRow1Btn">Save</button>
//             </div>
//             <hr className="uieHr1" />
//             <div className="uieRow2">
//                 <span className="uieSpan1">Profile picture</span>
//                 <span className="uieSpan2">Edit</span>
//             </div>
//             <img src="" alt="" className="uieProfilePic" />
//             <hr className="uieHr2" />
//             <div className="uieRow3">
//                 <span className="uieSpan1">cover picture</span>
//                 <span className="uieSpan2">Edit</span>
//             </div>
//             <img src="" alt="" className="uieCoverPic" />
//             <hr className="uieHr3" />
//             <div className="uieRow4">
//                 <span className="uieSpan1">Bio</span>
//                 <span className="uieSpan2">Edit</span>
//             </div>
//             <input type="text" className="bioInput" placeholder="Add Bio Here" />

//             {/* update */}
//             <div className="userInfoItemEditCon">
//                 <BusinessCenterIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder={user.currentJobAt}
//                     name="currentJobAt"
//                     onChange={(e) => setCurrentJobAt(e.target.value)}
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <BusinessCenterIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="Co-founder at Ask Buddie"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <BusinessCenterIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="Former WordPress Engineer at Eagle Eye"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <SchoolOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="Went to Oxfors Academy"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <ApartmentOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="R.M.E school"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <PermIdentityOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="lokendra"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <CakeOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="2002/12/28"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <BadgeOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="loki"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <LoyaltyOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="single/relationship/married/divorced"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <LocationOnOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="From Butwal"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <InstagramIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="ashiishme"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <TwitterIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="ashiishme"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <GitHubIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="ashiishme"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <LinkedInIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="ashiishme"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <EmailOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="ashiishme@gmail.com"
//                 />
//             </div>

//             <div className="userInfoItemEditCon">
//                 <LocalPhoneOutlinedIcon className="userInfoItemEditIcon" />
//                 <input
//                     type="text"
//                     className="userInfoItemEditInput"
//                     placeholder="9864755749"
//                 />
//             </div>

//             <button className="uieSaveBtn" type="submit" onClick={handleInfoSave}>
//                 Save
//             </button>
//         </form>
//     );
// }

// export default UserInfoEdit;

