export const setUsername=(username)=>{
    return{
        type: 'SET_USERNAME',
        payload: username,
    };
};
export const setPassword = (password) => {
    return {
      type: 'SET_PASSWORD',
      payload: password,
    };
  };
  export const setEmail = (email) => {
    return {
      type: 'SET_EMAIL',
      payload:email,
    };
  };
  export const setSource = (source) => {
    return {
      type: 'SET_SOURCE',
      payload:source,
    };
  };
  export const setDestination = (destination) => {
    return {
      type: 'SET_DESTINATION',
      payload:destination,
    };
  };
  // export const setPw = (pw) => {
  //   return {
  //     type: 'SET_PW',
  //     payload:pw,
  //   };
  // };