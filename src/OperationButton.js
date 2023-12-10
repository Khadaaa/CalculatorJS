import {ACTIONS} from './App.js';
export default function OperationButtonButton({dispatch, operation}) {
    return <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>{operation}</button>
}