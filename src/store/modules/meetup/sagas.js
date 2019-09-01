import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
  cancelMeetupSuccess,
  cancelMeetupFailure,
} from '~/store/modules/meetup/actions';

export function* createMeetup({ payload }) {
  try {
    yield call(api.post, 'meetups', payload.data);

    toast.success('Meetup criado com sucesso');

    yield put(createMeetupSuccess());

    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados informados');

    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  const { id, data } = payload;
  console.tron.log('updateMeetup', id, data);

  try {
    yield call(api.put, `meetups/${id}`, data);

    toast.success('Meetup atualizado com sucesso');

    yield put(updateMeetupSuccess());

    history.push('/dashboard');
  } catch (err) {
    toast.error('Erro ao atualizar meetup, confira os dados informados');

    yield put(updateMeetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  const { id } = payload;

  try {
    yield call(api.delete, `meetups/${id}`);

    toast.success('Meetup cancelado com sucesso');

    yield put(cancelMeetupSuccess());
    history.push('/');
  } catch (err) {
    toast.error('Erro ao cancelar meetup, tente novamente');

    yield put(cancelMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
