import {put, takeEvery } from 'redux-saga/effects';

function* changeLangSagaFunc() {
  yield put({ type: 'changeLangReducer'});

}
function* changeNavTransitionSagaFunc(action) {
  yield put({ type: 'changeNavTransitionReducer', payload: action.payload});

}
function* getPostsSagaFunc(action) {
  yield put({ type: 'getPostsReducer', payload: action.payload});

}

function* mySaga() {
  yield takeEvery('changeLangAction', changeLangSagaFunc);
  yield takeEvery('changeNavTransitionAction', changeNavTransitionSagaFunc);
  yield takeEvery('getPostsAction', getPostsSagaFunc);
}

export default mySaga;