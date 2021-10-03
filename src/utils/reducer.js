export const initialState = {
  user: null,
  currentUserData: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "CURRENT_USER_DATA":
      return {
        ...state,
        currentUserData: action.currentUserData,
      }
    default:
      throw new Error("Wrong action")
  }
}

export default reducer
