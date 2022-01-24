export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

export const getUsers = () => async (dispatch) => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch({ type: GET_USERS, payload: data.data });
      });
  };

  export const getUser = (id) => async (dispatch) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return dispatch({ type: GET_USER, payload: data.data });
      });
  };
