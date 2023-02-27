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
} from './constants';

export type ITicket = {
  price: number;
  carrier: string;
  segments: {
    origin: string;
    destination: string;
    date: string;
    duration: number;
    stops: string[];
  }[];
}[];
export interface IState {
  tickets: ITicket;
  showCount: number;
  id: string;
  error: string;
  isStop: boolean;
  sortStation: string;
  showAllTickets: boolean;
  showZeroDuration: boolean;
  showOneDuration: boolean;
  showTwoDuration: boolean;
  showThreeDuration: boolean;
  loading: boolean;
}
export interface IListProps {
  tickets: ITicket;
  showMore: () => void;
  showCount: number;
}
export interface ICard {
  price: number;
  firstOrigin: string;
  firstDestination: string;
  secondOrigin: string;
  secondDestination: string;
  firstStops: string[];
  secondStops: string[];
  firstName: string;
  secondName: string;
  firstTime: string;
  secondTime: string;
  firstDate: string;
  firstDuration: number;
  secondDate: string;
  secondDuration: number;
  firstTimeComa: string;
  secondTimeComa: string;
}
export interface ISideBar {
  all: (payload: IShowAll['payload']) => void;
  zero: (payload: IShowZero['payload']) => void;
  one: (payload: IShowOne['payload']) => void;
  two: (payload: IShowTwo['payload']) => void;
  three: (payload: IShowThree['payload']) => void;
  showZero: boolean;
}
export interface IFilter {
  sortType: string;
  sortByPrice: () => void;
  sortByDuration: () => void;
  sortByOptimal: () => void;
}
export interface IShowAll {
  type: typeof SHOW_ALL;
  payload: {
    all: boolean;
    zeroP: boolean;
    oneP: boolean;
    twoP: boolean;
    threeP: boolean;
  };
}
export interface IShowZero {
  type: typeof SHOW_ZERO;
  payload: boolean;
}
export interface IShowOne {
  type: typeof SHOW_ONE;
  payload: boolean;
}
export interface IShowTwo {
  type: typeof SHOW_TWO;
  payload: boolean;
}
export interface IShowThree {
  type: typeof SHOW_THREE;
  payload: boolean;
}
