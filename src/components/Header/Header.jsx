import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to={'/'}>Main</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button>Log In</button>
        <button>Register</button>
      </div>
    </header>
  );
}

export default Header;