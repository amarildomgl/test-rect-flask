
import { Button } from "primereact/button";

import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div class=" bg-gray-800">
        <header class="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-blue-900 md:mx-auto md:flex-row md:items-center">


          <Link to="/">
            <a
              href="#"
              class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black text-blue-500"
            >
              <span class="mr-2 text-4xl">
                <Button icon="pi pi-gift" className="p-button-rounded p-button-text" />
              </span>
              UCAN-Gift
            </a>
          </Link>

          <input type="checkbox" class="peer hidden" id="navbar-open" />
          <label
            class="absolute top-5 right-7 cursor-pointer md:hidden text-blue-600"
            for="navbar-open"
          >
            <span class="sr-only">Toggle Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
          >
            <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
              <li class="md:mr-12">
                <Link to="/entrar">
                  <button class="rounded-full border-2 border-white px-6 py-1 font-medium text-white transition-colors hover:bg-white hover:text-gray-700">
                    Entrar
                  </button>
                </Link>

              </li>
            </ul>
          </nav>
        </header>

        <div class="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div class="flex flex-col items-center justify-between lg:flex-row">
            <div class="">
              <div class="lg:max-w-xl lg:pr-5">
                <p class="flex text-sm uppercase text-gray-300">
                  <i class="pi pi-gift mr-5"></i>
                  Transformando presentes em momentos inesquecíveis!
                </p>
                <h2 class="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
                  Seja você fora do
                  <span class="my-1 inline-block border-b-8 border-white bg-orange-400 px-4 font-bold text-white">
                    comum
                  </span>
                </h2>
                <p class="text-base text-gray-400">
                  Acreditamos que presentear é mais do que apenas entregar um
                  item - é compartilhar amor, carinho e alegria. <br />
                  Com nossa plataforma, você pode surpreender seus entes
                  queridos com presentes exclusivos e emocionantes, entregues
                  diretamente em suas mãos.
                </p>
              </div>
              <div class="mt-10 flex flex-col items-center md:flex-row">
                <Link to="/registrar">
                  <a
                    href="/"
                    class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800"
                  >
                    Registrar-se
                  </a>
                </Link>

                <Link to="/entrar">
                  <a
                    href="/"
                    class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-700 px-6 font-medium tracking-wide text-white shadow-md transition md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800"
                  >
                    Entrar
                  </a>
                </Link>


              </div>
            </div>
            <div class="relative hidden lg:ml-32 lg:block lg:w-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
              <div class="abg-orange-400 w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none">
                <div class="flex w-96 flex-wrap">
                  <div class="h-48 w-1/2 rounded-full rounded-br-none bg-red-400"></div>
                  <div class="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-violet-400"></div>
                  <div class="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-yellow-400"></div>
                  <div class="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-indigo-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
