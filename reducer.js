export const initialState = {
  user: null,
}

const reducer = (State, action) => {
  switch (action.type) {
    case 'Add_User':
      return { ...State, user: action.auth }
    case 'Remove':
      return { ...State, user: action.auth }

    default:
      return State
  }
}

export default reducer
