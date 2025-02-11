
export default function Header() {
    return (
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container justify-center mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center lg:justify-around">
                <a class="flex title-font font-medium items-center justify-center lg:justify-start text-white mb-4 md:mb-0">
                    <img class="w-2/3 text-white " viewBox="0 0 24 24" src="https://www.storiesarabia.com/assets/img/logo.png" />
                </a>
                <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">CONNECT
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>
        </header>
    );
}