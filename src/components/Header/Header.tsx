import Logo from '../img/Logo.png';

import classes from './Header.module.scss';

export default function Header() {
  return (
    <div className={classes.header}>
      <img src={Logo} alt="logo" />
    </div>
  );
}
