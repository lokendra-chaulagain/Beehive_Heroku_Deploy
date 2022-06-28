import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import "./allLikes.scss";
import axios from "axios";

function AllLikes({ setOpenLikesCon, peopleKoId }) {
  console.log(peopleKoId);

  //Fetching userDetail from id
  const [userInfo, setUserInfo] = React.useState([{}]);
  React.useEffect(() => {
    const fetchUserInfo = async () => {
      const res = await axios.post("/userDetails/getByUserID", {
        userID: peopleKoId,
      });
      setUserInfo(res.data);
    };
    fetchUserInfo([{}]);
  }, [peopleKoId]);
  console.log(userInfo);

  return (
    <>
      {userInfo.map((user, i) => (
        <div key={i} index={i} className="allLikesContainer">
          <h3 className="alcallComments">
            Who Liked Your Post
            <ClearIcon
              className="alcallCommentClearIcon"
              onClick={() => setOpenLikesCon(false)}
            />
          </h3>

          <Link to={`/profile/${user._id}`} className="link">
            <span className="alccomment1">
              <img src={user?.profilePic} alt="" className="alccommentImg" />
              {user.fullName}
            </span>
          </Link>

          {/* <hr className="acHr" /> */}
        </div>
      ))}
    </>
  );
}

export default AllLikes;
