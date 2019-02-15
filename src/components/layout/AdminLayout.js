import React from 'react';
import { Link } from 'react-router-dom';
import { useStore} from 'react-hookstore';
import authStore from './../../stores/authStore';
import useMedia from './../../hooks/useMedia';

function AdminLayout(props) {
    const [state] = useStore(authStore);

    const title = useMedia(
        ['(min-width: 48rem)'],
        [props.title],
        props.icon || props.title.slice(0, 1)
    );
    
    return (
        <div className="admin">
            <header className="admin__header">
                <Link to={props.baseUrl} className="logo"><h1>{title}</h1></Link>
                <div className="toolbar">
                    {props.renderToolbar && props.renderToolbar({...props, ...state})}
                </div>
            </header>
            <nav className="admin__nav">
                {props.renderMenu && props.renderMenu({...props, ...state})}
            </nav>
            <main className="admin__main">
                {props.children}                
            </main>
            <footer className="admin__footer">
                {props.renderFooter && props.renderFooter({...props, ...state})}
            </footer>
        </div>
    )
}

export default AdminLayout;