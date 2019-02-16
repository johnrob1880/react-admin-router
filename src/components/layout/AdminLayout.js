import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './../menus/MainMenu';
import Toolbar from './../toolbar/Toolbar';
import Footer from './../footer/Footer';
import FlashMessage from './../messages/FlashMessage';
import SnackBar from './../messages/SnackBar';
import { useStore} from 'react-hookstore';
import authStore from './../../stores/authStore';
import appStore from './../../stores/appStore';
import useMedia from './../../hooks/useMedia';
import { useTheme, defaultTheme } from './../../hooks/useTheme';
import lightTheme from './../../assets/themes/light';

const themes = {
    'light': lightTheme,
    'default': defaultTheme
}

function AdminLayout(props) {
    const [state] = useStore(authStore);
    const [appState, dispatch] = useStore(appStore);

    let theme  = {...(themes[appState.theme] || themes['default'])}
    theme['admin-logo-background'] = appState.themeAccentBackground || '#56bf89';
    theme['admin-logo-color'] = appState.themeAccentTextColor || '#fff';
    theme['admin-footer-background'] = appState.themeAccentBackground || '#56bf89';
    theme['admin-footer-color'] = appState.themeAccentTextColor || '#fff';
    useTheme(theme);

    const title = useMedia(
        ['(min-width: 48rem)'],
        [props.title],
        props.icon || props.title.slice(0, 1)
    );

    const { snack, flash } = appState;

    const handleMessageClose = event => {
        event.preventDefault();
        dispatch({type: 'clear_flash'});        
    }
    
    return (
        <div className="admin">
            <header className="admin__header">
                <Link to={props.baseUrl} className="logo"><h1>{title}</h1></Link>
                <div className="toolbar">
                    <Toolbar {...props} {...state} />
                </div>
            </header>
            <nav className="admin__nav">
                <MainMenu {...props} {...state} />                
            </nav>
            <main className="admin__main">
                {flash && <FlashMessage message={flash.message} className={flash.className} onClose={handleMessageClose} />}
                {snack && <SnackBar message={snack ? snack.message : ''} />}
                {props.children}         
            </main>
            <footer className="admin__footer">
                <Footer {...props} {...state} />
            </footer>
        </div>
    )
}

export default AdminLayout;