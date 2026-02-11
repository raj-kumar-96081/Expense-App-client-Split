import { useState } from "react";
import { addExpense } from "../../service/expenseApi";

function AddExpenseForm({ groupId, onSuccess }) {
    const [formData, setFormData] = useState({
        description: "",
        amount: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addExpense({
            groupId,
            description: formData.description,
            amount: Number(formData.amount),
            paidBy: "CURRENT_USER_ID", // replace with auth user id
            splits: [], // implement split logic later
        });

        setFormData({ description: "", amount: "" });
        onSuccess();
    };

    return (
        <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
                <h5 className="fw-bold mb-3">Add New Expense</h5>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Expense Title"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-4">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-2">
                            <button className="btn btn-primary w-100">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddExpenseForm;