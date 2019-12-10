export const userReducer = ( state, action ) => {
  switch ( action.type ) {
    case "STORE_USER":
      return [
      ...state,
      {
        name: action.user.displayName,
        email: action.user.email,
        uid: action.user.uid,
      }
    ]
    default:
      return state
  }
}