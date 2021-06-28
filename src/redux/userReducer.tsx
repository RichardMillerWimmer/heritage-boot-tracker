export interface User {
    user_id: number | null;
    email: string;
    username: string;
  }
  
  const initialState: User = {
    user_id: null,
    email: '',
    username: ''
  };
  
  type Actiontype = { type: 'UPDATE_USER'; payload: User } | { type: 'LOGOUT_USER' };
  
  export default function userReducer(state = initialState, action: Actiontype): User {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          user_id: action.payload.user_id,
          email: action.payload.email,
          username: action.payload.username
        };
      case 'LOGOUT_USER':
        return initialState;
      default:
        return state;
    }
  }
  export {};
  