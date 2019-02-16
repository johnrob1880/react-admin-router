import React from 'react';

function SnackBar(props) {
    return (
        <div id="snackbar" className='show'>{props.message}</div>
    )
}

export default SnackBar;