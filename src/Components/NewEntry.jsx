import { useState } from "react";

function NewEntry({ img1, img2, activeType, setActiveType, entries, setEntries }) {
    const [formData, setFormData] = useState({
        description: "",
        amount: "",
        category: "",
        date: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            id: Date.now(),
            type: activeType,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEntries([...entries, formData]);
        setFormData({
            description: "",
            amount: "",
            category: "",
            date: "",
        });
    }

    return (
        <div className="text-white w-[90%] sm:w-80 md:w-96 p-4 backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-lg flex flex-col items-center justify-center">
            <div className="my-3">
                <h1 className="text-xl sm:text-2xl">
                    <i className="fa-solid fa-plus"></i> Add New Entry
                </h1>
            </div>

            <hr className="w-full border-gray-300/50" />
            <form onSubmit={handleSubmit} className="w-full">
                <div className="space-y-3 mt-3 text-white" >
                    <label>Entry Type</label>
                    <div className="flex items-center justify-around mt-2 gap-3">
                        <button
                            type="button"
                            onClick={() => setActiveType("income")}
                            className={`w-full  p-3 rounded-2xl transition-all duration-300 ${activeType === "income"
                                    ? "bg-green-500/70 scale-105 shadow-[0_0_25px_rgba(100,255,100,0.5)]"
                                    : "bg-green-500/30 hover:scale-105"
                                }`}
                        >
                            Income {img2}
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveType("expense")}
                            className={`w-full  p-3 rounded-2xl transition-all duration-300 ${activeType === "expense"
                                    ? "bg-red-500/70 scale-105 shadow-[0_0_25px_rgba(255,100,100,0.5)]"
                                    : "bg-red-500/30 hover:scale-105"
                                }`}
                        >
                            Expense {img1}
                        </button>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label>Description</label>
                        <input
                            className="border-2  rounded-2xl h-10 w-full p-2"
                            name="description"
                            type="text"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter Description"
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label>Amount</label>
                        <input
                            className="border-2  rounded-2xl h-10 w-full p-2 "
                            name="amount"
                            type="number"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Enter Amount"
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label>Category</label>
                        <select
                            className="border-2  rounded-2xl h-10 w-full p-2 "
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="">Select Category</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Salary">Salary</option>
                            <option value="Savings">Savings</option>
                        </select>
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label>Date</label>
                        <input
                            className="border-2  rounded-2xl h-10 w-full p-2 "
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full mt-4 p-3 backdrop-blur-md bg-white-200/10 border border-white/30 rounded-2xl shadow-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NewEntry;
