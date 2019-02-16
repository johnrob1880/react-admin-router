import React, { Fragment, useRef, useEffect } from 'react';

function ChartJs(props) {

    if (!window.Chart) {
        console.log('missing chart.js library.');
        return (<Fragment></Fragment>)
    }

    const canvasEl = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            new window.Chart(canvasEl.current, props.options)
        }, 0)        
    }, [])

    return (
        <canvas ref={canvasEl}></canvas>
    )

}

export default ChartJs