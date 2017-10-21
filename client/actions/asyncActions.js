import {
  setTerminos,
  addTermino,
  editTermino,
  deleteTermino,
  addTerminos,
} from './actions';
import API from './helpers/api';


export const fetchTerminos = (page, afterSearch) => {
  let url = `/api/terminos/${page}`;
  return dispatch => {
    API.get(url)
      .then(data => {
        afterSearch ?
          dispatch(setTerminos(data.terminos))
          :
          dispatch(addTerminos(data.terminos))

        }
      )
  }
};

export const searchTerminos = ( substr ) => {
  let url = `/api/terminos/search/${substr}/`;
  return dispatch => {
    API.get(url)
      .then(data =>
        dispatch(setTerminos(data.terminos))
      )
  }
};

export const saveTermino = (data) => {
  let url = '/api/terminos';
  return dispatch => {
    API.post(url, data)
      .then( res =>
        dispatch(addTermino(res.termino))
      )
  }
};

export const changeTermino = (data) => {
  let url = '/api/terminos';
  return dispatch => {
    API.put(url, data)
      .then( res =>
        dispatch(editTermino(res))
      )
  }
};

export const removeTermino = (data) => {
  let url = '/api/terminos';
  return dispatch => {
    API.delete(url, data)
      .then( res =>
      dispatch(deleteTermino(data._id))
    )
  }
};
