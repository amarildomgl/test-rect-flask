import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import UserService from "../../services/user/UserService";

import { Toast } from "primereact/toast";

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const toast = useRef<Toast>(null);

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const result = await UserService.login(email, password);

        if (result.success) {
            toast.current?.show({
                severity: "success",
                summary: "Success",
                detail: result?.message,
                life: 2000,
            });
            setTimeout(() => {
                window.location.href = "/home";
            }, 1000);
        } else {
            toast.current?.show({
                severity: "error",
                summary: "error",
                detail: result?.message,
                life: 3000,
            });
        }
    };

    return (
        <>
            <Toast ref={toast} />

            <div className="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-800">
                <div className="relative">
                    <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
                        <svg
                            id="patternId"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="a"
                                    patternUnits="userSpaceOnUse"
                                    width="40"
                                    height="40"
                                    patternTransform="scale(0.6) rotate(0)"
                                >
                                    <rect x="0" y="0" width="100%" height="100%" fill="none" />
                                    <path
                                        d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                                        strokeWidth="1"
                                        stroke="none"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="800%"
                                height="800%"
                                transform="translate(0,0)"
                                fill="url(#a)"
                            />
                        </svg>
                    </div>
                    <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
                        <svg
                            id="patternId"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="b"
                                    patternUnits="userSpaceOnUse"
                                    width="40"
                                    height="40"
                                    patternTransform="scale(0.5) rotate(0)"
                                >
                                    <rect x="0" y="0" width="100%" height="100%" fill="none" />
                                    <path
                                        d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                                        strokeWidth="1"
                                        stroke="none"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="800%"
                                height="800%"
                                transform="translate(0,0)"
                                fill="url(#b)"
                            />
                        </svg>
                    </div>

                    <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                        <div className="flex-auto p-6">
                            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                                <span className="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
                                    <Link to="/">
                                        <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">
                                            Ucan-Gift.
                                        </span>
                                    </Link>
                                </span>
                            </div>

                            <h4 className="mb-2 font-medium text-gray-700 xl:text-sm">
                                Transformando presentes em momentos inesquecíveis!
                            </h4>
                            <p className="mb-6 text-gray-500">
                                Entre com os dados da sua conta
                            </p>

                            <form id="" className="mb-4" action="#" method="POST">
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        type="text"
                                        className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                        name="email-username"
                                        placeholder="digite o email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="flex justify-between">
                                        <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative flex w-full flex-wrap items-stretch">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                            name="password"
                                            placeholder="············"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <button
                                        onClick={handleRegister}
                                        className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                                    >
                                        Entrar
                                    </button>
                                </div>
                            </form>

                            <p className="mb-4 text-center">
                                Não possui uma conta?
                                <Link to="/registrar">
                                    <span className="ml-2 cursor-pointer text-indigo-500 no-underline hover:text-indigo-500">
                                        Cadastrar-se
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
