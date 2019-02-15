import React, { Fragment } from "react";
import { useStore } from 'react-hookstore';
import appStore from './../../stores/appStore';

function DashboardToolbar() {
  const [state, dispatch] = useStore(appStore);

  const handleClick = event => {
    event.preventDefault();
    dispatch({type: 'add_foobar', value: 1});
  }
  return (
    <Fragment>
      <button className="btn btn--primary" onClick={handleClick}>Add New Foobar</button>
    </Fragment>
  );
}

export default DashboardToolbar;
