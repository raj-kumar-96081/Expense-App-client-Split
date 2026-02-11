import { settleGroup } from "../service/expenseApi";

const SettleGroupButton = ({ groupId, onSuccess }) => {
    const handleSettle = async () => {
        await settleGroup(groupId);
        onSuccess();
    };

    return <button onClick={handleSettle}>Settle Group</button>;
};

export default SettleGroupButton;