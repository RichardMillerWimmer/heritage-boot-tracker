import React, {useState} from 'react';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    return (
        <div>
            <h3>Login Component</h3>
            <form onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault();
                login();
            }}>
                <label htmlFor="email">email:</label>
                <input 
                type="text"
                value={email}
                placeholder="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value)}
                />
                <label htmlFor="password">password:</label>
                <input 
                type="password"
                value={password}
                placeholder="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Login;