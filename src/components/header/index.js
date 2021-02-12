import { h } from 'preact';
import { Link } from 'preact-router/match';

import baseroute from '../../baseroute';

import style from './style.css';

const Header = () => (
  <header class={style.header}>
    <h1>Practice Preact On GitHub Pages</h1>
    <nav>
      <Link activeClassName={style.active} href={`${baseroute}/`}>Home</Link>
      <Link activeClassName={style.active} href={`${baseroute}/profile`}>Me</Link>
      <Link activeClassName={style.active} href={`${baseroute}/profile/john`}>John</Link>
    </nav>
  </header>
);

export default Header;
