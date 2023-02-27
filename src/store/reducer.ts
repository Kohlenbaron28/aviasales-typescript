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
import { IState } from '../types';

const initialState: IState = {
  tickets: [],
  showCount: 10,
  id: '',
  error: '',
  isStop: false,
  sortStation: '',
  showAllTickets: false,
  showZeroDuration: false,
  showOneDuration: false,
  showTwoDuration: false,
  showThreeDuration: false,
  loading: true,
};
export const checkboxReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_ALL:
      if (
        action.payload.zeroP === true &&
        action.payload.oneP === true &&
        action.payload.twoP === true &&
        action.payload.threeP === true
      ) {
        return {
          ...state,
          showAllTickets: true,
        };
      }
      return Object.assign({}, state, {
        showAllTickets: action.payload.all,
        showZeroDuration: action.payload.zeroP,
        showOneDuration: action.payload.oneP,
        showTwoDuration: action.payload.twoP,
        showThreeDuration: action.payload.threeP,
        tickets: state.tickets.filter(
          (obj) =>
            obj.segments[0].stops.length === 1 ||
            obj.segments[1].stops.length === 1 ||
            obj.segments[0].stops.length === 0 ||
            obj.segments[1].stops.length === 0 ||
            obj.segments[0].stops.length === 2 ||
            obj.segments[1].stops.length === 2 ||
            obj.segments[0].stops.length === 3 ||
            obj.segments[1].stops.length === 3
        ),
      });

    case SHOW_ZERO:
      return Object.assign({}, state, {
        showZeroDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 0 || obj.segments[1].stops.length === 0
        ),
      });
    case SHOW_ONE:
      return Object.assign({}, state, {
        showOneDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 1 || obj.segments[1].stops.length === 1
        ),
      });
    case SHOW_TWO:
      return Object.assign({}, state, {
        showTwoDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 2 || obj.segments[1].stops.length === 2
        ),
      });
    case SHOW_THREE:
      return Object.assign({}, state, {
        showThreeDuration: action.payload.payload,
        tickets: state.tickets.filter(
          (obj) => obj.segments[0].stops.length === 3 || obj.segments[1].stops.length === 3
        ),
      });
    case SORT_BY_PRICE:
      return Object.assign({}, state, {
        sortStation: action.type,
        tickets: [...state.tickets].sort((prev, next) => (prev.price > next.price ? 1 : -1)),
      });
    case SORT_BY_DURATION:
      return Object.assign({}, state, {
        sortStation: action.type,
        tickets: [...state.tickets].sort((prev, next) =>
          prev.segments[0].duration + prev.segments[1].duration > next.segments[0].duration + next.segments[1].duration
            ? 1
            : -1
        ),
      });
    case SORT_BY_OPTIMAL:
      return Object.assign({}, state, {
        sortStation: action.type,
        tickets: [...state.tickets].sort((prev, next) =>
          prev.price > next.price &&
          prev.segments[0].duration + prev.segments[1].duration > next.segments[0].duration + next.segments[1].duration
            ? 1
            : -1
        ),
      });
    case UPDATE_PACKET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload],
        loading: false,
      };
    case SHOW_MORE:
      return {
        ...state,
        showCount: (state.showCount += 10),
      };
    case UPDATE_SEARCH_ID:
      return {
        ...state,
        id: action.payload,
      };
    case TOGGLE_STOP:
      return {
        ...state,
        isStop: action.payload,
      };

    case TICKETS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
