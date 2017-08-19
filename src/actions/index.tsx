import * as constants from '../constants';

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface ToAnswersPage {
  type: constants.TO_ANSWERS_PAGE;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | ToAnswersPage;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}

export function toAnswersPage(): ToAnswersPage {
  return {
    type: constants.TO_ANSWERS_PAGE
  };
}