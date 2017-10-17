import {
  ADD_TERMINO,
  SET_TERMINOS,
  DELETE_TERMINO,
  EDIT_TERMINO
} from '../constants/ActionsTypes'

const initialState = [];

const totalCount = (state = initialState, action) => {

  switch (action.type) {
    case SET_TERMINOS:
      return action.totalCount;

    default: return state
  }
};

export default totalCount
