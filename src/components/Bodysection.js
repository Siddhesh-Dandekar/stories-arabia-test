import React from 'react';

export default function Body() {

    const showMessage = () => {
        alert("Your purchase was successful");
      };
    return (
    
        <section class="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <video controls muted autoPlay loop alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                        <source src="https://cdn.artstation.com/p/video_sources/000/458/817/turntable-01.mp4" type="video/mp4" />
                    </video>
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">TRANSPARENT MODEL</h2>
                        <h1 class="text-white text-3xl title-font font-medium mb-1">ONEPLUS SMARTPHONE</h1>
                        <div class="flex mb-4">
                            <span class="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span class="ml-3">4 Reviews</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                                <a>
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a>
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                        <p class="leading-relaxed">Display: 6.5-inch OLED with a maximum refresh rate of 120Hz
                            Resolution: 1080x2400 pixels
                            Processor: Snapdragon 7 Gen 1 or Snapdragon 778+
                            RAM: 8GB or 12GB
                            Internal storage: 128GB or 256GB
                            Battery capacity: 4500mAh with 33W charging speed
                            Front camera: 16MP
                            Rear camera: 50MP + 50MP
                            Operating system: Android 12</p>
                        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                            <div class="flex">
                                <span class="mr-3">Color</span>
                                <button class="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button class="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button class="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div class="flex ml-6 items-center">
                                <span class="mr-3">Variant</span>
                                <div class="relative">
                                    <select class="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-white pl-3 pr-10">
                                        <option className="bg-black">64 + 4GB</option>
                                        <option className="bg-black">128 + 6GB</option>
                                        <option className="bg-black">256 + 8GB</option>
                                    </select>
                                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex">
                            <span class="title-font font-medium text-2xl text-white">$120.99 </span>
                            <button onClick={showMessage} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Purchase Now</button>
                            <button class="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}