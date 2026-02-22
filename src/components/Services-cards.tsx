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
    return(
        <section className="flex justify-center px-[120px] pt-[40px] max-md:px-[30px]">

            <div className="grid grid-cols-3 gap-4 max-w-[1200px] max-md:grid max-md:grid-cols-1">
                {Cards.map((service, index)=>(
                    <div key={index} className="rounded-2xl bg-[#F4F3F0] shadow-md px-[30px] py-[30px]">
                        <img src={service.icon} alt={service.title} />
                        <h3 className="font-['Source-Serif-4'] font-normal text-[24px] leading-[28.8px] text-[#3A5F56] mt-[9px] mb-[6px] max-md:text-[22px]">{service.title}</h3>
                        <p className="font-['Roboto'] font-normal text-base leading-[22.4px] text-[#292C32] max-md:text-[14px]">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}