import { delay } from 'redux-saga';

export function* currentUserSaga(params) {
  while (true) {
    yield delay(1000);
    console.info('User saga loop');
  }
}
