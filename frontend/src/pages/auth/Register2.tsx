import { Link } from "react-router-dom";
import React, { useState } from "react";
import UserService from "../../services/user/UserService";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await UserService.register(email, password);
    if (result.success) {
        console.log(result);
     // window.location.href = "/login";
    } else {
      console.error("Registration failed:", result.message);
    }
  };

  return (
    <>
      <div className="mx-auto flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10 bg-gray-800">
        <div className="max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
          <Link to="/">
            <p className="mb-20 font-bold tracking-wider"> Ucan-Gift.</p>
          </Link>

          <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
            Transformando presentes <br /> em momentos inesquecíveis!
          </p>
          <div className="bg-blue-600/80 rounded-2xl px-4 py-8">
            <p className="mb-3 text-gray-200">
              O verdadeiro presente é aquele que nós mesmos não podemos dar e a
              outra pessoa não pode comprar.
            </p>
            <div className="">
              <div className="flex items-center">
                <p className="ml-4 w-56">
                  <strong className="block font-medium">Dale Carnegie</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-20">
          <h2 className="mb-2 text-3xl font-bold">Sign Up</h2>
          <a href="#" className="mb-10 block font-bold text-gray-600">
            Have an account
          </a>
          {/* <p className="mb-1 font-medium text-gray-500">Escolha o seu plano</p>
                    <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
                        <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            <input className="peer hidden" type="radio" name="radio" id="radio1" checked />
                            <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio1"> </label>
                            <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
                            <span className="pointer-events-none z-10">Projects</span>
                        </div>
                        <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            <input className="peer hidden" type="radio" name="radio" id="radio3" checked />
                            <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio3"> </label>
                            <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
                            <span className="pointer-events-none z-10">Job</span>
                        </div>
                        <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                            <input className="peer hidden" type="radio" name="radio" id="radio3" checked />
                            <label className="peer-checked:border-blue-600 peer-checked:bg-blue-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio3"> </label>
                            <div className="peer-checked:border-transparent peer-checked:bg-blue-600 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-blue-600 ring-offset-2"></div>
                            <span className="pointer-events-none z-10">Job</span>
                        </div>
                    </div> */}

          <p className="mb-1 font-medium text-gray-500">Email</p>
          <div className="mb-4 flex flex-col">
            <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <p className="mb-1 font-medium text-gray-500">Password</p>
          <div className="mb-4 flex flex-col">
            <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="Digite a senha"
              />
            </div>
          </div>
          <button
            onClick={handleRegister}
            className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
