import React from 'react';

function DashboardItem({children, full, col}) {
    let classNames = [
        'dashboard__item',
        full ? 'dashboard__item--full' : '',
        col ? 'dashboard__item--col': ''
    ].join(' ');

    return (
        <div className={classNames}>
            <div className="card">
                {children}
            </div>
        </div>
    )
}

export default DashboardItem;