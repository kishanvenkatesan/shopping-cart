import axMacOS from 'axMacOS';
import { put, all, takeLatest } from 'redux-saga/effects';
import {
  INIT_CATALOG,
  GET_USER,
  GET_CART
} from '../constants';
import * as actions from '../actions';

function* initCatalog() {
  try {
    const catalog = yield axMacOS.get('/api/catalog');

    yield put(actions.initCatalogSuccess(catalog.data));
  } catch(e) {
    yield put(actions.initCatalogFail('COULD NOT GET CATALOG'));
  }
}

function* getUser() {
  try {
    const user = yield axMacOS.get('/api/user');

    yield put(actions.getUserSucces(user.data));
  } catch(e) {
    yield put(actions.getUserFail('COULD NOT GET USER'));
  }
}

function* getCart() {
  try {
    const cart = yield axMacOS.get('/api/cart');

    yield put(actions.getCartSuccess(cart.data));
  } catch(e) {
    yield put(actions.getCartFail('COULD NOT GET CART'));
  }
}

export default function*() {
  yield all([
    takeLatest(INIT_CATALOG, initCatalog),
    takeLatest(GET_USER, getUser),
    takeLatest(GET_CART, getCart)
  ]);
}
