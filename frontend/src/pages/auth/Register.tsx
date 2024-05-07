import { InputText } from 'primereact/inputtext';
import AuthService from '../../services/auth/AuthService.js';

import React, { useState } from 'react';
import { Button } from 'primereact/button';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await AuthService.register(email, password);
        if (result.success) {
            window.location.href = '/login';
        } else {
            console.error('Registration failed:', result.message);
        }
    };

    return (
        <>
            <div className="Register">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>

                    <Button label="Check" icon="pi pi-check" />

                </form>

           
            </div>
        </>
    );
}
