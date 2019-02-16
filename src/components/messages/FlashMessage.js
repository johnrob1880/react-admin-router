import React from 'react';


function FlashMessage(props) {

    let classNames = [
        'flash-message',
        props.className || ''
    ].join(' ');

    return (
        <div className={classNames}>
            <span className="closebtn" onClick={props.onClose}>&times;</span> 
            {props.message}
        </div>
    )
}

export default FlashMessage;