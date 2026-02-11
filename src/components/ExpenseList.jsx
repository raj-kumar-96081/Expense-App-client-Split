const ExpenseList = ({ expenses }) => (
    <div>
        <h3>Expenses</h3>
        {expenses.map((e) => (
            <div key={e._id}>
                <strong>{e.description}</strong> – ₹{e.amount}
            </div>
        ))}
    </div>
);

export default ExpenseList;