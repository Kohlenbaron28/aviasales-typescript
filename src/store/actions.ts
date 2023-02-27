import {
  SHOW_ALL,
  SHOW_ZERO,
  SHOW_ONE,
  SHOW_TWO,
  SHOW_THREE,
  SHOW_MORE,
  SORT_BY_DURATION,
  SORT_BY_OPTIMAL,
  SORT_BY_PRICE,
  UPDATE_PACKET_TICKETS,
  UPDATE_SEARCH_ID,
  TICKETS_ERROR,
  TOGGLE_STOP,
} from '../constants';
import { ITicket, IShowAll, IShowOne, IShowThree, IShowTwo, IShowZero } from '../types';

import apiServise from './service';

export const all = (payload: { all: boolean; zeroP: boolean; oneP: boolean; twoP: boolean; threeP: boolean }) => {
  return { type: SHOW_ALL, payload };
};
export const zero = (payload: boolean) => {
  return { type: SHOW_ZERO, payload };
};
export const one = (payload: boolean) => {
  return { type: SHOW_ONE, payload };
};
export const two = (payload: boolean) => {
  return { type: SHOW_TWO, payload };
};
export const three = (payload: boolean) => {
  return { type: SHOW_THREE, payload };
};
export const sortByPrice = () => {
  return { type: SORT_BY_PRICE };
};
export const sortByDuration = () => {
  return { type: SORT_BY_DURATION };
};
export const sortByOptimal = () => {
  return { type: SORT_BY_OPTIMAL };
};
export const updateSearchId = (searchId: number) => ({
  type: UPDATE_SEARCH_ID,
  payload: searchId,
});
export const updatePacketTickets = (tickets: ITicket) => ({
  type: UPDATE_PACKET_TICKETS,
  payload: tickets,
});
export const showMore = () => ({
  type: SHOW_MORE,
});
export const ticketsError = (error: string) => ({
  type: TICKETS_ERROR,
  payload: error,
});
export const toggleStop = (booleanValue: boolean) => ({
  type: TOGGLE_STOP,
  payload: booleanValue,
});

export const getTicketsById = (searchId: string) => {
  return function (dispatch: any) {
    apiServise.getTickets(searchId).then((res) => {
      dispatch(updatePacketTickets(res.tickets));
      // если от сервера пришло, что stops: true обновляет isStop
      if (res.stop) {
        dispatch(toggleStop(res.stop));
      }
    });
  };
};
