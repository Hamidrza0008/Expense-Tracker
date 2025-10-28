import { useState } from "react";

function Dashboard({ entries , handleDelete }) {

    const [filter, setFilter] = useState("all");

    const filteredEntries = entries.filter((entry) => {
        if (filter === "all") {
            return true;
        }
        else {
            return(
                entry.type === filter
            )
        }
    })

    return (
        <>
            <div className="min-h-[300px] w-[600px] text-white backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg">

                {/* Buttons Section */}
                <div className="w-[90%] h-16 rounded-2xl bg-black/30 mx-auto mt-2 flex items-center justify-around">
                    <button
                        onClick={() => setFilter("all")}
                        className={`p-2 w-40 rounded-2xl text-center transition-all duration-200 ${filter === "all" ? "bg-blue-500/60" : "bg-black/20 hover:bg-black/40"
                            }`}
                    >
                        All Entries
                    </button>

                    <button
                        onClick={() => setFilter("income")}
                        className={`p-2 w-40 rounded-2xl text-center transition-all duration-200 ${filter === "income" ? "bg-green-400/60" : "bg-black/20 hover:bg-black/40"
                            }`}
                    >
                        Income
                    </button>

                    <button
                        onClick={() => setFilter("expense")}
                        className={`p-2 w-40 rounded-2xl text-center transition-all duration-200 ${filter === "expense" ? "bg-red-400/60" : "bg-black/20 hover:bg-black/40"
                            }`}
                    >
                        Expense
                    </button>
                </div>

                {/* Entries List */}
                <div className="mt-5 w-[90%] mx-auto flex flex-col gap-2">
                    {filteredEntries.length > 0 ? (
                        filteredEntries.map((entry, index) => (
                            <div
                                key={index}
                                className={`flex justify-around flex-col items-start h-24 px-4 py-2 rounded-2xl ${entry.type === "income"
                                        ? "bg-green-600/40"
                                        : "bg-red-600/40"
                                    }`}
                            >
                                <div className="flex justify-between items-center w-full">
                                    <span className="font-semibold text-2xl">{entry.description}</span>
                                <span className="text-2xl">₹{entry.amount}</span>
                                </div>
                                <div className="flex items-center justify-between  w-full">
                                    <span className="space-x-1"><i class="fa-solid fa-calendar"></i> {entry.date}</span>
                                    <span className="space-x-1"><i class="fa-solid fa-tag"></i>{entry.category}</span>
                                    <div className="space-x-5">
                                        <i class="fa-solid fa-pen"></i>
                                        <i onClick={() => handleDelete(entry.id)} class="fa-solid fa-trash"></i>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-300">No entries found</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Dashboard