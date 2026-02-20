export default function Hero(){
    return(
        <section className="relative h-[973px] bg-[#F4F3F0] overflow-hidden">


            <div
                className="absolute w-[400px] h-[400px] md:w-[813px] md:h-[813px] -bottom-[200px] -left-[200px] md:-bottom-[400px] md:-left-[400px]"
                style={{
                    background: 'radial-gradient(circle, rgba(184, 125, 88, 0.8) 0%, rgba(184, 125, 88, 0) 70%)'
                }}
            />

            <div
                className="absolute w-[300px] h-[300px] md:w-[494px] md:h-[494px] -top-[150px] -right-[150px] md:-top-[250px] md:-right-[250px]"
                style={{
                    background: 'radial-gradient(circle, rgba(58, 95, 86, 0.55) 0%, rgba(58, 95, 86, 0) 70%)'
                }}
            />

            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="flex gap-16 items-center max-md:flex-col-reverse max-md:px-4">
                    <div  className = " max-w-[552px] max-md:flex max-md:flex-col max-md:items-center">
                        <h1 className="font-['Source-Serif-4'] font-normal text-5xl leading-[57.6px] text-[#3A5F56] mb-[11px] max-md:text-4xl max-md:text-center">Hi, I'm James Mirro & <br/> I'm a photographer.</h1>

                         <h2 className = "font-['Roboto'] font-normal text-base leading-[22.4px] text-[#292C32] mb-[17px] max-md:text-[14px] max-md:text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h2>

                        <button type = "button" className = "w-[118px] h-[44px] rounded-[6px] bg-[#3A5F56] font-['Roboto'] font-normal text-base leading-[22.4px] text-[#FFFFFF] max-md:w-[98px] max-md:h-[36px]">Read more</button>
                    </div>

                    <img src="/images/hero-image.jpg" alt="Hero"  className = "rounded-3xl max-w-[552px] max-h-[773px] max-md:max-w-[324px] max-h-[454px]"/>

                </div>
            </div>


        </section>
    );
}