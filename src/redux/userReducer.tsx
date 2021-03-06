export interface User {
    id: number;
    email: string;
    username: string;
  }
  
  const initialState: User = {
    id: 0,
    email: '',
    username: ''
  };
  
  type Actiontype = { type: 'UPDATE_USER'; payload: User } | { type: 'LOGOUT_USER' };
  
  export default function userReducer(state = initialState, action: Actiontype): User {
    switch (action.type) {
      case 'UPDATE_USER':
        return {
          ...state,
          id: action.payload.id,
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
  