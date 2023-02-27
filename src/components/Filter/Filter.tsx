import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IFilter, IState } from '../../types';
import * as actions from '../../store/actions';

import classes from './Filter.module.scss';

const Filter = ({ sortType, sortByPrice, sortByDuration, sortByOptimal }: IFilter) => {
  const [price, setPrice] = useState(false);
  const [duration, setDuration] = useState(false);
  const [optimal, setOptimal] = useState(false);
  console.log(sortType);
  return (
    <form className={classes.form}>
      <div
        className={classes['form_radio_btn first']}
        onClick={() => {
          sortByPrice();
          setPrice(true);
          setDuration(false);
          setOptimal(false);
        }}
      >
        <input
          className={classes['form_radio_btn__input']}
          id="radio-1"
          type="radio"
          name="Price"
          value="1"
          checked={price}
        />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-1">
          Самый дешевый
        </label>
      </div>

      <div
        className={classes['form_radio_btn second']}
        onClick={() => {
          sortByDuration();
          setPrice(false);
          setDuration(true);
          setOptimal(false);
        }}
      >
        <input
          className={classes['form_radio_btn__input']}
          id="radio-2"
          type="radio"
          name="Duration"
          value="2"
          checked={duration}
        />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-2">
          Самый быстрый
        </label>
      </div>

      <div
        className={classes['form_radio_btn']}
        onClick={() => {
          sortByOptimal();
          setPrice(false);
          setDuration(false);
          setOptimal(true);
        }}
      >
        <input
          className={classes['form_radio_btn__input']}
          id="radio-3"
          type="radio"
          name="Optimal"
          value="3"
          checked={optimal}
        />
        <label className={classes['form_radio_btn__label']} htmlFor="radio-3">
          Оптимальный
        </label>
      </div>
    </form>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    sortType: state.sortStation,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { sortByPrice, sortByDuration, sortByOptimal } = bindActionCreators(actions, dispatch);
  return {
    sortByPrice,
    sortByDuration,
    sortByOptimal,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
