import { useLayoutEffect } from 'react';

const defaultTheme = {
    'admin-header-height': '70px',
    'admin-footer-height': '70px',
    'admin-nav-width': '250px',
    'admin-header-background': '#fff',
    'admin-nav-background': '#313541',
    'admin-main-background': '#f4f7fa',
    'admin-footer-background': '#1d2127',
    'admin-footer-color': '#4e5561',
    'admin-link-color': '#dc5a60',
    'admin-logo-background': '#dc5a60',
    'admin-logo-color': '#ffffff',
    'admin-menu-link-color': '#76808f',
    'admin-menu-link-color-active': '#ffffff',
    'admin-menu-link-background-active': '#1f222d',
    'admin-primary-button-background': '#56bf89',
    'admin-primary-button-color': '#fff'

}

function useTheme(theme) {
    useLayoutEffect(() => {
        for (const key in theme) {
            document.documentElement.style.setProperty(`--${key}`, theme[key]);
        }
    }, [theme]);
}

export {
    defaultTheme,
    useTheme
}

