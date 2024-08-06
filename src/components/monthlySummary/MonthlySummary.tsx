import MonthlyTotalProfit from "../monthlyTotalProfit/MonthlyTotalProfit";
import MonthlyTotalExpenses from "../monthlyTotalExpenses/MonthlyTotalExpenses";
import MonthlyNewCustomers from "../monthlyNewCustomers/MonthlyNewCustomers";

export default function MonthlySummary() {
    
    return (
        <div className="flex gap-5 h-60">
            <MonthlyTotalProfit />
            <MonthlyTotalExpenses />
            <MonthlyNewCustomers />
        </div>
    );
}
