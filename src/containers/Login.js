import React from 'react';
import { Authentication } from '../components/App';

const Login = () => {
    return (
        <div>
            <Authentication isMember={true} />
        </div>
    );
}

export default Login;
