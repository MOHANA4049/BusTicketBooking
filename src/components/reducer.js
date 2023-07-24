


    const initialState = {
        username: '',
        email: '',
        password: '',
        source:'',
        destination:'',
        // pw: false,
      };
      
const loginReducer = (state = initialState, action) => {
        switch (action.type) {
          case 'SET_USERNAME':
            return {
              ...state,
              username: action.payload,
            };
          case 'SET_PASSWORD':
            return {
              ...state,
              password: action.payload,
            };
            case 'SET_EMAIL':
              return {
                ...state,
                email: action.payload,
              };
              case 'SET_SOURCE':
                return {
                  ...state,
                  source: action.payload,
                };
                case 'SET_DESTINATION':
                  return {
                    ...state,
                    destination: action.payload,
                  };
          default:
            return state;
        }
      };
export default loginReducer;