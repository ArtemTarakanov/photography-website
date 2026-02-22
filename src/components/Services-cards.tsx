import { useState } from 'react';

const Cards = [
    {
        icon: "/images/icon-1.svg",
        title: "Wedding Photography",
        description: "Wedding photography is often called the bread and butter of photographers — but that doesn't mean it has to be boring. Quite the opposite!",
    },

    {
        icon: "/images/icon-2.svg",
        title: "Sports Photography",
        description: "Sports photography is awesome. Sitting on the sidelines with a massive telephoto allows me to get right into the action — I love shooting sports where there's a lot of explosive movement.",
    },

    {
        icon: "/images/icon-3.svg",
        title: "Portrait Photography",
        description: "Who doesn't love portrait photography? I love being able to capture that expression, quirk, smile or whatever, that sort of defines a person.",
    },

    {
        icon: "/images/icon-4.svg",
        title: "Architecture Photography",
        description: "The nice thing about shooting architecture (in my opinion) is that it's so easy to do. Seriously, just pick up your camera and get out there.",
    },

    {
        icon: "/images/icon-5.svg",
        title: "Animal Photography",
        description: "Whenever I'm travelling I always make sure to pack gear that allows me to capture the local wildlife. The eagle that takes flight in this picture is probably my most prized image.",
    },

    {
        icon: "/images/icon-6.svg",
        title: "Food Photography",
        description: "I do food photography for blogs, restaurants, influencers, YouTube channels — but most importantly (if I manage to cook something that looks good) — I do food photography for myself.",
    },

    {
        icon: "/images/icon-7.svg",
        title: "Nature Photography",
        description: "Landscape photography just never gets old. Someone told me that those are the kinds of pictures you never look. Well, I don't agree.",
    },
]

export default function ServicesCards(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Cards.length) % Cards.length);
    };

    return(
        <section className="flex justify-center px-[120px] pt-[40px] max-md:px-4">

            {/*ноуты*/}
            <div className="grid grid-cols-3 gap-4 max-w-[1200px] max-md:hidden">
                {Cards.map((service, index)=>(
                    <div key={index} className="rounded-2xl bg-[#F4F3F0] shadow-md px-[30px] py-[30px]">
                        <img src={service.icon} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            {/*кобилка*/}
            <div className="hidden max-md:block w-full relative">

                {/*карточка*/}
                <div className="rounded-2xl bg-[#F4F3F0] shadow-md px-[30px] py-[30px] flex-col justify-center">
                    <img src={Cards[currentIndex].icon} alt={Cards[currentIndex].title} />
                    <h3 className="font-['Source-Serif-4'] text-[24px] text-[#3A5F56] mt-[9px] mb-[6px]">
                        {Cards[currentIndex].title}
                    </h3>
                    <p className="font-['Roboto'] text-base text-[#292C32]">
                        {Cards[currentIndex].description}
                    </p>
                </div>

                <div className="flex justify-between mt-4">
                    <button
                        onClick={prevSlide}
                        className="bg-[#3A5F56] text-white w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        ←
                    </button>

                    <div className="flex gap-2 items-center">
                        {Cards.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-[#3A5F56]' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="bg-[#3A5F56] text-white w-10 h-10 rounded-full flex items-center justify-center"
                    >
                        →
                    </button>
                </div>

            </div>

        </section>
    );
}
