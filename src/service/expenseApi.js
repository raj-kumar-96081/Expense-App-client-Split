import axios from "../utils/axios";

export const getGroupExpenses = (groupId) =>
    axios.get(`/expenses/group/${groupId}`);

export const addExpense = (data) =>
    axios.post("/expenses", data);

export const getGroupSummary = (groupId) =>
    axios.get(`/expenses/group/${groupId}/summary`);

export const settleGroup = (groupId) =>
    axios.post(`/expenses/group/${groupId}/settle`);