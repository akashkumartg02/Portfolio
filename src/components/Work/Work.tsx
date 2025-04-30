import './style.scss';

const Work = () => {
    return (
        <div id="work" className="mt-20 pb-10">
            <div className="bg-[#ffffff0a] text-xs p-2 inline">WORK</div>

            <h1 className="mt-5 text-[30px] font-medium text-white">My Work</h1>

            {/* <hr className="my-6 text-lime-500 opacity-60" /> */}

            <div className="mt-10">
                <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
                    <div className="h-[300px] w-full bg-[var(--primary)] relative">
                        <div className="w-[50px] h-[50px] bg-black rounded-full absolute top-10 left-6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;