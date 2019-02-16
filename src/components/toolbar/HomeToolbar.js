import React, { Fragment } from "react";
import { useStore } from 'react-hookstore';
import appStore from './../../stores/appStore';

function HomeToolbar() {

  const dispatch = useStore(appStore)[1];

  const handleClick = event => {
    event.preventDefault();
    dispatch({type: 'set_snack', snack: { message: 'Plumbus Added!'}});
  }
  return (
    <Fragment>
      <button className="btn btn--primary" onClick={handleClick}>Add New Plumbus</button>
    </Fragment>
  );
}

export default HomeToolbar;
