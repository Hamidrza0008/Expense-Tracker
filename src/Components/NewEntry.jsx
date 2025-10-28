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
            id:Date.now(),
            type:activeType,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted:", formData);

        // const newEntry = {
        //     type: activeType,
        //     description: description,
        //     amount: amount,
        //     category: category,
        //     date: date,
        // }

        setEntries([...entries, formData])

        setFormData({
            description: "",
            amount: "",
            category: "",
            date: "",
        })
    }





    return (
        <div className="text-white h-[40%] w-96 p-4 backdrop-blur-md bg-white/10 border border-white/30 rounded-2xl shadow-lg flex flex-col items-center justify-center">
            <div className="my-4">
                <h1 className="text-2xl">
                    <i className="fa-solid fa-plus"></i> Add New Entry
                </h1>
            </div>

            <hr />
            <form onSubmit={handleSubmit}>
                <div className="space-y-2.5 mt-2">
                    <label>Entry Type</label>
                    <div className="flex items-center justify-around mt-2">

                        {/* Income Button */}
                        <button
                            type="button"
                            onClick={() => setActiveType("income")}
                            className={`p-3 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg transition-all duration-300
                ${activeType === "income"
                                    ? "bg-green-500/70 scale-105 shadow-[0_0_25px_rgba(100,255,100,0.5)]"
                                    : "bg-green-500/30 hover:scale-105"
                                }`}
                        >
                            Income {img2}
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveType("expense")}
                            className={`p-3 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg transition-all duration-300
                ${activeType === "expense"
                                    ? "bg-red-500/70 scale-105 shadow-[0_0_25px_rgba(255,100,100,0.5)]"
                                    : "bg-red-500/30 hover:scale-105"
                                }`}
                        >
                            Expanse {img1}
                        </button>
                    </div>

                    <div className="flex flex-col items-start w-fit space-y-1">
                        <label>Description</label>
                        <input
                            className="border-2 rounded-2xl h-10 w-2xs p-2"
                            name="description"
                            type="text"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter Description"
                        />
                    </div>

                    <div className="flex flex-col items-start w-fit space-y-1">
                        <label>Amount</label>
                        <input
                            className="border-2 rounded-2xl h-10 w-2xs p-2"
                            name="amount"
                            type="number"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="Enter Amount"
                        />
                    </div>

                    <div className="flex flex-col items-start w-fit space-y-1">
                        <label>Category</label>
                        <select
                            className="border-2 rounded-2xl h-10 w-2xs p-2 "
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

                    <div className="flex flex-col items-start w-fit space-y-1">
                        <label>Date</label>
                        <input
                            className="border-2 rounded-2xl h-10 w-2xs p-2"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] w-42 mx-auto ml-14 mt-2.5 p-3 backdrop-blur-md bg-white-200/10 border border-white/30 rounded-2xl shadow-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default NewEntry;
