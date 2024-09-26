import {put, takeEvery } from 'redux-saga/effects';

function* changeLangSagaFunc() {
  yield put({ type: 'changeLangReducer'});

}

function* mySaga() {
  yield takeEvery('changeLangAction', changeLangSagaFunc);
}

export default mySaga;