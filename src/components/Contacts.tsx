export default function Contacts() {
    return(
        <section className="bg-white min-h-[460px] flex items-center justify-center max-md:px-4 ">
            <div className="bg-[#F4F3F0] rounded-2xl w-[800px] h-[259px] flex items-center justify-around max-md:flex-col max-md:w-full max-md:max-w-full max-md:h-auto max-md:gap-6 max-md:py-8 max-md:px-6">
                <p className = "font-['Roboto'] font-normal text-[28px] leading-[33.6px] text-[#292C32] max-w-[313px] max-md:text-center max-md:text-[26px] ">Wan't to work together? Follow the link and let's get in touch.</p>
                <button className = "bg-[#3A5F56] rounded-[6px] w-[125px] h-[58px] font-['Roboto'] font-normal text-[20px] leading-[28px] text-white">Contact</button>
            </div>
        </section>
    );
}