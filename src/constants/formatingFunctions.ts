import { RootState, useAppDispatch } from "@/store/store";
import { TransactionType } from "./types/definitions";
import { useSelector } from "react-redux";
import { fetchTransactionsAsync } from "@/store/slices/transactionsSlice";
import { fetchTransactions } from "./actions/transactionActions";

function getMonthName(month: number): string {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[month - 1]; // Subtract 1 because getMonth() is zero-based
}

export function getMonthlyFinancialData(transactions: TransactionType[]) {
    const financialDataByMonth: {
        [key: string]: { income: number; expense: number; profit: number }
    } = {};

    transactions.forEach(transaction => {
        const date = new Date(transaction.createdAt);
        const month = date.getMonth() + 1;
        const key = `${month.toString().padStart(2, '0')}`; // e.g., "09"

        if (!financialDataByMonth[key]) {
            financialDataByMonth[key] = { income: 0, expense: 0, profit: 0 };
        }

        const income = transaction.amount;
        const expense = transaction.quantity * transaction.product.cost;
        const profit = income - expense;

        financialDataByMonth[key].income += income;
        financialDataByMonth[key].expense += expense;
        financialDataByMonth[key].profit += profit;
    });

    const data = Object.entries(financialDataByMonth).map(([month, financials]) => ({
        month: getMonthName(Number(month)),
        income: financials.income,
        expense: financials.expense,
        profit: financials.profit,
    }));

    return data;
}

export function getCurrentMonthIncome(transactions: TransactionType[]) {
    const monthlyIncomeData = getMonthlyFinancialData(transactions);

    const currentDate = new Date();
    const currentMonthName = getMonthName(currentDate.getMonth() + 1);
    const currentYear = currentDate.getFullYear();

    // Find income for the current month
    const currentMonthIncome = monthlyIncomeData.find(
        (data) => data.month === currentMonthName && currentYear
    );

    return currentMonthIncome ? currentMonthIncome.income : 0;
}


export function getIncomeChangePercentage(transactions: TransactionType[]) {
    const monthlyIncomeData = getMonthlyFinancialData(transactions);

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;

    const previousMonth = currentMonth === 1 ? 12 : currentMonth - 1;

    const currentMonthIncome = monthlyIncomeData.find(
        (data) => data.month === getMonthName(currentMonth)
    )?.income || 0;

    const previousMonthIncome = monthlyIncomeData.find(
        (data) => data.month === getMonthName(previousMonth)
    )?.income || 0;

    if (previousMonthIncome === 0) {
        return "No income in the previous month to compare.";
    }

    const percentageChange = ((currentMonthIncome - previousMonthIncome) / previousMonthIncome) * 100;

    return percentageChange;
}

function formatDate(date: Date): string {
    // Create a formatter for month and year
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return formatter.format(date);
}

export function getFormattedMonthRange(): string {
    const now = new Date();

    // First date of the current month
    const firstDate = new Date(now.getFullYear(), now.getMonth(), 1);

    // Last date of the current month
    const lastDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    // Format the dates
    const formattedFirstDate = formatDate(firstDate);
    const formattedLastDate = formatDate(lastDate);

    return `${formattedFirstDate} - ${formattedLastDate}`;
}

// Weekly Data Calculations

// Function to calculate revenue, orders, and expenses for the past seven days
export function getPastSevenDaysData(transactions: TransactionType[]) {
    const today = new Date();
    const dailyData: { [key: string]: { Revenue: number; Orders: number; Expense: number } } = {};

    // Initialize the dailyData with the past 7 days, even if there are no transactions
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() - i);
        const dateKey = date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });

        dailyData[dateKey] = { Revenue: 0, Orders: 0, Expense: 0 };
    }

    // Populate dailyData with transaction data
    transactions.forEach(transaction => {
        const transactionDate = new Date(transaction.createdAt);
        const dateKey = transactionDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });

        if (dailyData[dateKey]) {
            dailyData[dateKey].Revenue += transaction.amount;
            dailyData[dateKey].Orders += transaction.quantity;
            dailyData[dateKey].Expense += transaction.quantity * transaction.product.cost;
        }
    });

    // Convert dailyData to array and sort by date
    const result = Object.entries(dailyData)
        .map(([date, values]) => ({
            date,
            ...values,
        }))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return result;
}

export function getWeeklyRevenueComparison(transactions: TransactionType[]) {
    const today = new Date();

    // Step 1: Create an array of dates for the current week
    const currentWeekDates: string[] = [];
    for (let i = 6; i >= 0; i--) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() - i);
        const formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
        });
        currentWeekDates.push(formattedDate);
    }

    // Step 2: Calculate the revenue for the current week by dates
    const currentWeekRevenue: { [key: string]: number } = {};
    currentWeekDates.forEach(date => {
        currentWeekRevenue[date] = 0;
    });

    transactions.forEach(transaction => {
        const transactionDate = new Date(transaction.createdAt);
        const formattedDate = transactionDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
        });

        if (currentWeekRevenue[formattedDate] !== undefined) {
            currentWeekRevenue[formattedDate] += transaction.amount;
        }
    });

    // Step 3: Calculate the revenue for the last week by dates
    const lastWeekRevenue: { [key: string]: number } = {};
    currentWeekDates.forEach((date, i) => {
        const lastWeekDate = new Date(today);
        lastWeekDate.setDate(today.getDate() - i - 7);
        const formattedLastWeekDate = lastWeekDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
        });

        lastWeekRevenue[formattedLastWeekDate] = 0;

        transactions.forEach(transaction => {
            const transactionDate = new Date(transaction.createdAt);
            const formattedTransactionDate = transactionDate.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
            });

            if (formattedTransactionDate === formattedLastWeekDate) {
                lastWeekRevenue[formattedLastWeekDate] += transaction.amount;
            }
        });
    });

    // Step 4: Combine these into the desired output format
    const result = currentWeekDates.map((date, i) => {
        const lastWeekDate = new Date(today);
        lastWeekDate.setDate(today.getDate() - i - 7);
        const formattedLastWeekDate = lastWeekDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
        });

        return {
            date,
            Last: lastWeekRevenue[formattedLastWeekDate] || 0,
            Current: currentWeekRevenue[date] || 0,
        };
    });

    return result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
