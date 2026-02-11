const ExpenseSummary = ({ summary }) => (
    <div>
        <h3>Summary</h3>
        {Object.entries(summary).map(([userId, amount]) => (
            <div key={userId}>
                {userId}: ₹{amount}
            </div>
        ))}
    </div>
);

export default ExpenseSummary;