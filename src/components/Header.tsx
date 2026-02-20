import { useState } from 'react';

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="h-[70px] bg-white shadow-sm px-[136px] max-md:px-5">
            <div className="h-full flex items-center justify-between">

                {/*Лого*/}
                <img src="/images/Mirro-Logotype-Green.svg" alt="mirro-logo" className="h-[30px] w-[113px]"/>

                {/*Навигация*/}
                <nav className="flex gap-5 max-md:hidden">

                    <div className="flex gap-3.5 items-center">
                        <a href='#' className="font-['Roboto'] font-normal text-base leading-4 text-[#3A5F56]">Presets</a>
                        <a href='#' className="font-['Roboto'] font-normal text-base leading-4 text-[#3A5F56]">Prints</a>
                        <a href='#' className="font-['Roboto'] font-normal text-base leading-4 text-[#3A5F56]">Store</a>
                        <a href='#' className="font-['Roboto'] font-normal text-base leading-4 text-[#3A5F56]">About</a>
                        <a href='#' className="font-['Roboto'] font-normal text-base leading-4 text-[#3A5F56]">Contact</a>
                    </div>

                    <button className="w-[122px] h-[44px] flex items-center justify-center gap-3 bg-[#3A5F56] rounded-[6px]">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-basket-fill" viewBox="0 0 16 16">
                            <path
                                d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
                        </svg>

                        <p className="text-white font-['Roboto'] font-normal text-base leading-[22.4px]">Cart</p>

                    </button>

                </nav>

                {/*кнопка для мобильчиков*/}
                <button onClick={()=>setIsOpen(!isOpen)}
                    className="max-md:flex hidden flex-col gap-1.5 w-8 h-8 items-center justify-center">
                    <span className="w-6 h-0.5 bg-[#3A5F56]"></span>
                    <span className="w-6 h-0.5 bg-[#3A5F56]"></span>
                    <span className="w-6 h-0.5 bg-[#3A5F56]"></span>
                </button>

                {isOpen && (
                    <div className="max-md:block hidden absolute top-[70px] left-0 w-full bg-white shadow-lg z-50 animate-slideDown">
                        <nav className="flex flex-col p-4 gap-4 items-center">
                            <a href='#' className="text-[#3A5F56] py-2 ">Presets</a>
                            <a href='#' className="text-[#3A5F56] py-2">Prints</a>
                            <a href='#' className="text-[#3A5F56] py-2">Store</a>
                            <a href='#' className="text-[#3A5F56] py-2">About</a>
                            <a href='#' className="text-[#3A5F56] py-2">Contact</a>
                            <button className="w-full h-[44px] bg-[#3A5F56] text-white rounded-[6px]">
                                Cart
                            </button>
                        </nav>
                    </div>
                )}

            </div>

        </header>
    );
}
