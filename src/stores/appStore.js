import { createStore } from 'react-hookstore';

const appStore = createStore(
    'app',
    {
        foobars: 41,
        doohickeys: 81.712
    },
    (state, action) => {
        switch(action.type) {
            case 'add_foobar':
                // Simulate async api call
                setTimeout(() => {
                    appStore.dispatch({type: 'add_foobar_success', value: action.value });
                    action.onSuccess && action.onSuccess();
                }, 1000);                
                return {...state, error: null, fetching: true};
            case 'add_foobar_success':    
                return {...state, error: null, foobars: state.foobars + action.value, fetching: false}                       
            default:
                return state;
        }
    }
)

export default appStore;