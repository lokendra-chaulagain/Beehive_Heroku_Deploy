export const GetUserDetail = () => ({
  type: "GETUSERDETAIL_START",
});

export const GetUserDetailSuccess = (userDetail) => ({
  type: "GETUSERDETAIL_SUCCESS",
  payload: userDetail,
});

export const GetUserDetailFailure = () => ({
  type: "GETUSERDETAIL_FAILURE",
});
