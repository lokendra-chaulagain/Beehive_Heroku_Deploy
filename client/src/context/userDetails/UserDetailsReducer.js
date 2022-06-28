const UserDetailReducer = (state, action) => {
  switch (action.type) {
    case "GETUSERDETAIL_START":
      return {
        userDetail: null,
        isFetching: true,
        error: false,
      };

    case "GETUSERDETAIL_SUCCESS":
      return {
        userDetail: action.payload,
        isFetching: false,
        error: false,
      };

    case "GETUSERDETAIL_FAILURE":
      return {
        userDetail: null,
        isFetching: false,
        error: true,
      };

    default:
      return state;
  }
};

export default UserDetailReducer;
