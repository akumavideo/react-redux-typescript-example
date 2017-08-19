import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RouterState, push } from 'react-router-redux';
import Hello from '../components/Hello';
import * as actions from '../actions/';
import { Enthusiasm } from '../types/index';

interface CombinedState {
  enthusiasm: Enthusiasm;
  router: RouterState;
}

export function mapStateToProps(state: CombinedState) {
  const enthusiasmLevel = state.enthusiasm.enthusiasmLevel;
  const name = state.enthusiasm.languageName;
  return {
    enthusiasmLevel,
    name: name,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    toAnswersPage: () => dispatch(push('/answers')),
  };
}

export default withRouter<{}>(connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(Hello));