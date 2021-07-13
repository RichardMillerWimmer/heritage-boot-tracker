export interface Boot {
    name: String;
    img: String;
    note: String;
    wears: Number;
    ccs: Number;
  }

  export interface BootState {
      userBoots: Boot[];
  }
  
  const initialState: BootState = {
      userBoots: [
          {
              name: '',
              img: '',
              note: '',
              wears: 0,
              ccs: 0
          }
      ]
  };
  
  type Actiontype = { type: 'UPDATE_BOOTS'; payload: Boot[] } | { type: 'LOGOUT_BOOTS' };
  
  export default function bootReducer(state = initialState, action: Actiontype): BootState {
    switch (action.type) {
      case 'UPDATE_BOOTS':
        return {
          ...state,
          ...{userBoots: action.payload}
        };
      case 'LOGOUT_BOOTS':
        return initialState;
      default:
        return state;
    }
  }
  export {};