


function Header({ h1, amount, img, bgColor }) {


    return (
        <>
            <div className={`h-22 w-3xs ${bgColor} backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg flex  items-center justify-around
            transition-transform transform hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]`}>

                <div>
                    <h2 class="text-xl font-semibold text-black">{h1}</h2>
                    <p class="text-3xl text-white font-bold mt-1">{amount}</p>
                </div>

                <div className="text-white p-2   backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg">
                    {img}
                </div>

            </div>
        </>
    )
}

export default Header