import React from 'react';
import bemCssModule from 'bem-css-modules';
import {Link} from 'react-router-dom';

import {default as AsideMenuStyles} from '../AsideMenu.module.scss';

const style = bemCssModule(AsideMenuStyles);

const AdminMenu = ({ isUserLogged }) =>(
<>
  <p className={style('title')}>Panel administratora</p>
  <nav>
    <ul>
      <li className={style('link')}>
        <Link to="/manage-courses">Zarzadzanie kursami</Link>
      </li>
      
    </ul>
  </nav>
</>
);

export default AdminMenu;