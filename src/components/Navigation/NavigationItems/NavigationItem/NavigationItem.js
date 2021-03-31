import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';


const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink 
        to={props.link}
        exact // this will ensure that this is used only when the Route is exatly '/orders'
        activeClassName={classes.active}
        >{props.children}</NavLink>
    </li>
);

export default navigationItem;