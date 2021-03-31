
import React from 'react';
// import { withRouter } from 'react-router-dom';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>
    }

  return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top"/>
          {transformedIngredients}         
          <BurgerIngredient type="bread-bottom"/>
      </div>
  );  
};

export default burger;
// a way to pass routing props to nested component (Burger.js is the nested component)
// without adding them manually in the routed component. You need to import it ofc
// export default withRouter(burger);