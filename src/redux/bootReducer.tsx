export interface Boot {
  }

  export interface BootState {
      userBoots: Boot[];
  }
  
  const initialState: BootState = {
      userBoots: []
  };
  
  type Actiontype = { type: 'UPDATE_BOOTS'; payload: BootState } | { type: 'LOGOUT_BOOTS' };
  
  export default function bootReducer(state = initialState, action: Actiontype): BootState {
    switch (action.type) {
      case 'UPDATE_BOOTS':
        return {
          ...state
          //
          //
        };
      case 'LOGOUT_BOOTS':
        return initialState;
      default:
        return state;
    }
  }
  export {};