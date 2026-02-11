import { useState } from "react";
import { addExpense } from "../service/expenseApi";

const AddExpenseForm = ({ groupId, onSuccess }) => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addExpense({
            groupId,
            amount,
            description,
            paidBy: "CURRENT_USER_ID",
            splits: [],
        });

        onSuccess();
        setAmount("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add Expense</button>
        </form>
    );
};

export default AddExpenseForm;