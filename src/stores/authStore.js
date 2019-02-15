import { createStore } from 'react-hookstore';

const authStore = createStore(
    'auth',
    {
        user: null
    },
    (state, action) => {
        const { user } = action;
        switch(action.type) {
            case 'login':
                // Place your login functionality here.
                setTimeout(() => {
                    authStore.dispatch({type: 'login_success', user: {...user } });
                    action.onSuccess && action.onSuccess();
                }, 0);                
                return {...state, error: null, user: {...user}, authenticating: true};
            case 'login_success':    
                return {...state, error: null, user: {...user, loggedIn: true }, authenticating: false}
            case 'login_failure':
                return {...state, error: action.error, authenticating: false}
            case 'logout':
                // Do logout tasks here.
                setTimeout(() => {
                authStore.dispatch({type: 'logout_success', user: {...user}});
                }, 0);
                return {...state, loggingOut: true}
            case 'logout_success':
                return {...state, error: null, user: null, loggingOut: false }
            case 'logout_failure':
                return {...state, error: action.error, loggingOut: false }             
            default:
                return state;
        }
    }
)

export default authStore;