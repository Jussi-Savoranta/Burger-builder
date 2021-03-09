import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
// <img src="../../assets/images/burger-logo.png"/> won't work because src is just a working folder
// webpack will bundle everything and creates a new output folder

    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBrgr" />
    </div>
);

export default logo;