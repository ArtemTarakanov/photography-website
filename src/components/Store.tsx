
const StoreCards = [
    {
       image: "/images/preset-1.jpg",
       title: "Mirro Preset Pack Vol. 01",
       description: "The first volume is my go-to presets when shooting action sports. Just the right amount of contrast and highlights to make your photo (literally) pop!"
    },

    {
        image: "/images/preset-2.jpg",
        title: "Mirro Preset Pack Vol. 02",
        description: "Vol. 02 is dedicated solely to landscape photography. Pay attention to your exposure while out there and these presets will make your photos look great."
    },

    {
        image: "/images/preset-3.jpg",
        title: "Mirro Preset Pack Vol. 03",
        description: "These are a collection of my most used wedding presets — use with caution as you'll end up loving wedding photography."
    }
]

export default function Store(){
    return(
        <section className="relative min-h-[890px] max-md:min-h-[600px] bg-[#F4F3F0] overflow-hidden mt-[100px] flex flex-col items-center justify-center gap-[40px] max-md:gap-6 max-md:px-4 max-md:py-12">

            <div
                className="absolute w-[400px] h-[400px] md:w-[813px] md:h-[813px] -bottom-[200px] -right-[200px] md:-bottom-[400px] md:-right-[400px]"
                style={{
                    background: 'radial-gradient(circle, rgba(219, 52, 59, 0.37) 0%, rgba(219, 52, 59, 0) 70%)'
                }}
            />

            <div className = "flex flex-col items-center justify-center gap-[13px] max-md:gap-[8px]">
                <img src = "/images/services-image.svg" alt = "Service Image" className = "max-w-[160px] max-h-[19px]"/>
                <h1 className="font-['Source-Serif-4'] font-normal text-[2rem] leading-[38.4px] text-[#DB343B] text-center">Preset Store</h1>
                <h2 className = "font-['Roboto] font-normal text-base leading-[22.4px] text-[#292C32] max-w-[591px] text-center max-md:text-sm max-md:p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</h2>
            </div>

            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-md:gap-6 max-w-[1200px]">
                {StoreCards.map((item, index) => (

                    <div key={index} className="bg-white shadow-[0px_3px_15px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-[252px] max-md:h-[200px] object-cover"
                        />
                        <div className="px-[30px] py-[30px] max-md:px-5 max-md:py-5">
                            <h3 className="font-['Source-Serif-4'] font-normal text-[24px] max-md:text-[22px] leading-[34px] text-[#3A5F56] mb-[6px]">{item.title}</h3>
                            <p className="font-['Roboto'] font-normal text-base max-md:text-[14px] leading-[22px] text-[#3A5F56]">{item.description}</p>
                        </div>
                    </div>

                ))}
            </div>

        </section>
    );
}