import { EnthusiasmAction } from '../actions';
import { Enthusiasm } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialState: Enthusiasm = {
  languageName: 'TypeScript',
  enthusiasmLevel: 1,
};

export function enthusiasm(state: Enthusiasm = initialState, action: EnthusiasmAction): Enthusiasm {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}