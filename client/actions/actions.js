import * as types from '../constants/ActionsTypes'

export const setTerminos = ( terminos, totalCount ) => {
  return {
    type: types.SET_TERMINOS,
    terminos,
    totalCount
  }
};

export const addTermino = termino => {
  return {
    type: types.ADD_TERMINO,
    termino
  }
};

export const editTermino = (termino) => {
  return {
    type: types.EDIT_TERMINO,
    termino
  }
};

export const deleteTermino = (_id) => {
  return {
    type: types.DELETE_TERMINO,
    _id
  }
};
