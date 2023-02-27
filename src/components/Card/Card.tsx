import { addMinutes, parseISO } from 'date-fns';

import Logo from '../img/s7.png';
import { ICard } from '../../types';
import classes from './Card.module.scss';

export default function Card({
  price,
  firstOrigin,
  firstDestination,
  secondOrigin,
  secondDestination,
  firstStops,
  secondStops,
  firstName,
  secondName,
  firstTime,
  secondTime,
  firstDate,
  firstDuration,
  secondDate,
  secondDuration,
  firstTimeComa,
  secondTimeComa,
}: ICard) {
  let resultFirst = addMinutes(parseISO(firstDate), firstDuration);
  let resultSecond = addMinutes(parseISO(secondDate), secondDuration);
  return (
    <div className={classes.card}>
      <div className={classes['card__top']}>
        <span className={classes['card__top__span']}>{`${price} P `}</span>
        <img className={classes['card__top__img']} src={Logo} alt="logo" />
      </div>
      <div className={classes['card__body']}>
        <div className={classes['card__place']}>
          <div>
            <div className={classes['card__place__title']}>{`${firstOrigin} - ${firstDestination}`}</div>
            <span className={classes['card__place__time']}>
              {`${firstTimeComa} - ${new Date(resultFirst).getHours()}:${
                new Date(resultFirst).getMinutes() > 9
                  ? new Date(resultFirst).getMinutes()
                  : '0' + new Date(resultFirst).getMinutes()
              }`}
            </span>
          </div>
          <div>
            <div className={classes['card__place__title']}>{`${secondOrigin} - ${secondDestination}`}</div>
            <span className={classes['card__place__time']}>
              {`${secondTimeComa} - ${new Date(resultSecond).getHours()}:${
                new Date(resultSecond).getMinutes() > 9
                  ? new Date(resultSecond).getMinutes()
                  : '0' + new Date(resultSecond).getMinutes()
              }`}
            </span>
          </div>
        </div>
        <div className={classes['card__ride']}>
          <div>
            <div className={classes['card__ride__title']}>В пути</div>
            <span className={classes['card__ride__time']}>{firstTime}</span>
          </div>
          <div>
            <div className={classes['card__ride__title']}>В пути</div>
            <span className={classes['card__ride__time']}>{secondTime}</span>
          </div>
        </div>
        <div className={classes['card__replace']}>
          <div>
            <div className={classes['card__replace__title']}>{firstName}</div>
            <span className={classes['card__replace__time']}>{firstStops.length > 0 ? firstStops.join(',') : '-'}</span>
          </div>
          <div>
            <div className={classes['card__replace__title']}>{secondName}</div>
            <span className={classes['card__replace__time']}>
              {secondStops.length > 0 ? secondStops.join(',') : '-'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
