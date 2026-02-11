import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    getGroupExpenses,
    getGroupSummary,
} from "../service/expenseApi";
import AddExpenseForm from "../components/expenses/AddExpenseForm";
import ExpenseList from "../components/expenses/ExpenseList";
import ExpenseSummary from "../components/expenses/ExpenseSummary";
import SettleGroupButton from "../components/expenses/SettleGroupButton";

function GroupExpenses() {
    const { groupId } = useParams();

    const [expenses, setExpenses] = useState([]);
    const [summary, setSummary] = useState({});
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        try {
            const [expensesRes, summaryRes] = await Promise.all([
                getGroupExpenses(groupId),
                getGroupSummary(groupId),
            ]);

            setExpenses(expensesRes.data);
            setSummary(summaryRes.data);
        } catch (error) {
            console.error("Error loading expenses:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [groupId]);

    return (
        <div className="container py-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/dashboard">Groups</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        Expense Details
                    </li>
                </ol>
            </nav>

            <div className="bg-white p-5 rounded-4 shadow-sm border">
                <div className="text-center mb-4">
                    <i className="bi bi-wallet2 display-1 text-primary opacity-25"></i>
                    <h2 className="fw-bold mt-3">Group Expense Manager</h2>
                    <p className="text-muted">
                        Working with Group ID:{" "}
                        <code className="bg-light px-2 rounded">
                            {groupId}
                        </code>
                    </p>
                </div>

                <hr className="my-4" />

                {loading ? (
                    <div className="text-center py-4">
                        <div className="spinner-border text-primary" />
                    </div>
                ) : (
                    <>
                        <AddExpenseForm
                            groupId={groupId}
                            onSuccess={loadData}
                        />

                        <ExpenseList expenses={expenses} />

                        <ExpenseSummary summary={summary} />

                        <SettleGroupButton
                            groupId={groupId}
                            onSuccess={loadData}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default GroupExpenses;




// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {getGroupExpenses,getGroupSummary,} from "../services/expenseApi";

// function GroupExpenses() {
//     // 1. Get the groupId from the URL
//     const { groupId } = useParams();

//     return (
//         <div className="container py-5">
//             <nav aria-label="breadcrumb">
//                 <ol className="breadcrumb">
//                     <li className="breadcrumb-item">
//                         <Link to="/dashboard">Groups</Link>
//                     </li>
//                     <li className="breadcrumb-item active">Expense Details</li>
//                 </ol>
//             </nav>

//             <div className="bg-white p-5 rounded-4 shadow-sm text-center border">
//                 <div className="mb-4">
//                     <i className="bi bi-wallet2 display-1 text-primary opacity-25"></i>
//                 </div>
//                 <h2 className="fw-bold">Group Expense Manager</h2>
//                 <p className="text-muted">
//                     Working with Group ID:{" "}
//                     <code className="bg-light px-2 rounded">{groupId}</code>
//                 </p>

//                 <hr className="my-5" />

//                 <div className="alert alert-info d-inline-block px-5">
//                     <h5>🛠️ Student Assignment</h5>
//                     <p className="mb-0">Implement the following here:</p>
//                     <ul className="text-start mt-3">
//                         <li>
//                             Fetch and display group details (Name, Members).
//                         </li>
//                         <li>
//                             Show a list of past transactions for this group.
//                         </li>
//                         <li>
//                             Add a form to create a new expense with title,
//                             amount, and split logic.
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GroupExpenses;
