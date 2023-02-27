import { bindActionCreators } from 'redux';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ISideBar, IState } from '../../types';
import * as actions from '../../store/actions';

import classes from './SideBar.module.scss';

const SideBar = ({ all, zero, one, two, three, showZero }: ISideBar) => {
  const [checkedAllTicket, setCheckedAllTicket] = useState(false);
  const [checkedZero, setCheckedZero] = useState(false);
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  console.log(showZero);
  useEffect(() => {
    if (checkedZero && checkedOne && checkedTwo && checkedThree) {
      all({
        all: true,
        zeroP: checkedZero,
        oneP: checkedOne,
        twoP: checkedTwo,
        threeP: checkedThree,
      });
      setCheckedAllTicket(true);
    } else {
      setCheckedAllTicket(false);
    }
  }, [checkedZero, checkedOne, checkedTwo, checkedThree]);

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case 'All':
        all({
          all: target.checked,
          zeroP: target.checked,
          oneP: target.checked,
          twoP: target.checked,
          threeP: target.checked,
        });
        if (target.checked === false) {
          all({
            all: false,
            zeroP: target.checked,
            oneP: target.checked,
            twoP: target.checked,
            threeP: target.checked,
          });
          setCheckedOne(false);
          setCheckedTwo(false);
          setCheckedThree(false);
          setCheckedZero(false);
        } else if (target.checked === true) {
          setCheckedOne(true);
          setCheckedTwo(true);
          setCheckedThree(true);
          setCheckedZero(true);
        }
        setCheckedAllTicket(target.checked);
        break;
      case 'Zero':
        try {
          zero(target.checked);
          setCheckedZero(target.checked);
        } catch (err) {
          console.log(err);
        }

        break;
      case 'One':
        one(target.checked);
        setCheckedOne(target.checked);
        break;
      case 'Two':
        two(target.checked);
        setCheckedTwo(target.checked);
        break;
      case 'Three':
        three(target.checked);
        setCheckedThree(target.checked);
        break;
      default:
        setCheckedAllTicket(target.checked);
        setCheckedZero(target.checked);
        setCheckedOne(target.checked);
        setCheckedTwo(target.checked);
        setCheckedThree(target.checked);
    }
  };

  return (
    <div className={classes.sideBar}>
      <h3 className={classes['sideBar__title']}>Количество пересадок</h3>
      <form action="" className={classes.option}>
        <label htmlFor="1" className={classes['sideBar__label']}>
          <input
            onChange={handleChange}
            name="All"
            type="checkbox"
            className={classes['sideBar__input']}
            id="1"
            checked={checkedAllTicket}
          />
          <span className={classes['sideBar__chekBox']}></span>
          Все
        </label>

        <label className={classes['sideBar__label']} htmlFor="2">
          <input
            onChange={handleChange}
            name="Zero"
            type="checkbox"
            className={classes['sideBar__input']}
            id="2"
            checked={checkedZero}
          />
          <span className={classes['sideBar__chekBox']}></span>
          Без пересадок
        </label>

        <label className={classes['sideBar__label']} htmlFor="3">
          <input
            onChange={handleChange}
            name="One"
            type="checkbox"
            className={classes['sideBar__input']}
            id="3"
            checked={checkedOne}
          />
          <span className={classes['sideBar__chekBox']}></span>1 пересадка
        </label>

        <label className={classes['sideBar__label']} htmlFor="4">
          <input
            onChange={handleChange}
            name="Two"
            type="checkbox"
            className={classes['sideBar__input']}
            id="4"
            checked={checkedTwo}
          />
          <span className={classes['sideBar__chekBox']}></span>2 пересадки
        </label>

        <label className={classes['sideBar__label']} htmlFor="5">
          <input
            onChange={handleChange}
            name="Three"
            type="checkbox"
            className={classes['sideBar__input']}
            id="5"
            checked={checkedThree}
          />
          <span className={classes['sideBar__chekBox']}></span>3 пересадки
        </label>
      </form>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    showZero: state.showZeroDuration,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { all, zero, one, two, three } = bindActionCreators(actions, dispatch);
  return {
    all,
    zero,
    one,
    two,
    three,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
