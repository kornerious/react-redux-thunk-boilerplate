import { FETCH_POST, NEW_POST, EDIT_POST, UPDATE_POST_FIELD, RESET_POST, DELETE_POST } from './types';

function fetchPosts() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch({
        type: FETCH_POST,
        payload: posts
      }));
  }
}

function editPost(post) {
    return (dispatch) => {
        dispatch({
            type: EDIT_POST,
            payload: post
        })
    }
}

function createPost(post) {
  return (dispatch) => {
      dispatch({
          type: NEW_POST,
          payload: post
      })
  }
}

function updatePostField(postField) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_POST_FIELD,
            payload: postField
        })
    }
}

function resetPost() {
    return (dispatch) => {
        dispatch({
            type: RESET_POST,
            payload: {}
        })
    }
}

function deletePost(id) {
    return (dispatch) => {
        dispatch({
            type: DELETE_POST,
            payload: id
        })
    }
}

export const funcA = () => {
    return async (dispatch) => {
        // const data = await doSomething(...)
        // dispatch({ action: DID_SOMETHING, payload: data })
    }
}

export const funcB = () => {
    return async (dispatch) => {
        // const data = await doSomethingElse(...)
        // dispatch({ action: DID_SOMETHING_ELSE, payload: data })
    }
}

export const funcC = () => {
    return async (dispatch) => {
        // const data = await doSomethingMore(...)
        // dispatch({ action: DID_SOMETHING_MORE, payload: data })
    }
}

export const thunkChain = () => {
    return async (dispatch) => {
        try {
            await dispatch(funcA())
            await dispatch(funcB())
            await dispatch(funcC())
        } catch (error) {
            //error handling
        }
    }
}

export { fetchPosts,  updatePostField, createPost, editPost, resetPost, deletePost};