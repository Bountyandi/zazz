import {
  ADD_TERMINO,
  SET_TERMINOS,
  DELETE_TERMINO,
  EDIT_TERMINO
} from '../constants/ActionsTypes'

const initialState = [];

const terminos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TERMINO:
      return [
        ...state,
        action.termino
      ];

    case EDIT_TERMINO:
      return state.map( t => {
        if (t._id === action.termino._id) {
          return {...t, ...action.termino}
        }
        return t
      });

    case SET_TERMINOS:
      return action.terminos;

    case DELETE_TERMINO:
      return state.filter( t =>
        t._id !== action._id
      );

    default: return state
  }
};

export default terminos
