import {
    Outlet,
    Link,
    useLoaderData,
} from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <div className="landing-page">

                <Link to={`register`}>
                    <p>Login</p>
                </Link>

                <Link to={`register`}>
                    <p>Login</p>
                </Link>

                <h1>Bem-vindo ao Meu Aplicativo!</h1>
                <p>Este é um aplicativo incrível que faz coisas incríveis.</p>
                <button>Explore Agora</button>
            </div>
        </>
    );
}