import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { useStore } from 'react-hookstore';
import authStore from './../../stores/authStore';

function Login(props) {
  
    const [state, dispatch] = useStore(authStore);
    
    const initialState = {
      username: '',
      password: ''
    };
    const [user, setUser] = useState(initialState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSuccess = () => {
      const { from } = props.location.state || { from: { pathname: "/" } };
      props.history && props.history.push(from.pathname);
    }
  return (
    <div className="login-page">
      <div className="form">
        <h4>Access is required</h4>
        <p>Please login to continue</p>
        <form className="login-form" onSubmit={event => {
            event.preventDefault();
            if (!user.username || !user.password) {
                return;
            }
            dispatch({type: 'login', user: {...state.user, ...user}, onSuccess: handleSuccess});
        }}>
          <input type="text" name="username" placeholder="username" value={user.username} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="password" value={user.password} onChange={handleInputChange} />
          <button>login</button>
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
