import { useState } from "react";

function Dashboard({ entries, handleDelete }) {
    const [filter, setFilter] = useState("all");

    const filteredEntries = entries.filter((entry) => {
        if (filter === "all") return true;
        return entry.type === filter;
    });

    return (
        <div className="min-h-[300px] w-[90%] sm:w-[500px] md:w-[600px] text-white backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-lg mt-4 mx-auto">
            <div className="w-[95%] h-auto rounded-2xl bg-black/30 mx-auto mt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-2">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1.5 text-sm sm:text-base rounded-2xl text-center transition-all duration-200 w-full sm:w-32 ${filter === "all" ? "bg-blue-500/60" : "bg-black/20 hover:bg-black/40"
                        }`}
                >
                    All
                </button>

                <button
                    onClick={() => setFilter("income")}
                    className={`px-3 py-1.5 text-sm sm:text-base rounded-2xl text-center transition-all duration-200 w-full sm:w-32 ${filter === "income"
                            ? "bg-green-400/60"
                            : "bg-black/20 hover:bg-black/40"
                        }`}
                >
                    Income
                </button>

                <button
                    onClick={() => setFilter("expense")}
                    className={`px-3 py-1.5 text-sm sm:text-base rounded-2xl text-center transition-all duration-200 w-full sm:w-32 ${filter === "expense"
                            ? "bg-red-400/60"
                            : "bg-black/20 hover:bg-black/40"
                        }`}
                >
                    Expense
                </button>
            </div>

            <div className="mt-3 w-[95%] mx-auto flex flex-col gap-3 pb-4">
                {filteredEntries.length > 0 ? (
                    filteredEntries.map((entry, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 px-3 py-2 rounded-2xl ${entry.type === "income"
                                    ? "bg-green-600/40"
                                    : "bg-red-600/40"
                                }`}
                        >
                            <div className="flex flex-col sm:flex-row justify-between w-full">
                                <span className="font-semibold text-base sm:text-lg">
                                    {entry.description}
                                </span>
                                <span className="text-base sm:text-lg">₹{entry.amount}</span>
                            </div>

                            <div className="flex flex-wrap items-center justify-between w-full text-xs sm:text-sm gap-2">
                                <span className="flex items-center gap-1">
                                    <i className="fa-solid fa-calendar"></i> {entry.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <i className="fa-solid fa-tag"></i> {entry.category}
                                </span>
                                <div className="flex items-center gap-3">
                                    <i className="fa-solid fa-pen"></i>
                                    <i
                                        onClick={() => handleDelete(entry.id)}
                                        className="fa-solid fa-trash cursor-pointer"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-300">No entries found</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
