import MonthlyTotalProfit from "../monthlyTotalProfit/MonthlyTotalProfit";
import MonthlyTotalExpenses from "../monthlyTotalExpenses/MonthlyTotalExpenses";
import MonthlyNewCustomers from "../monthlyNewCustomers/MonthlyNewCustomers";

export default function MonthlySummary() {
    
    return (
        <div className="flex gap-5 xl:h-60 sm:h-[196px] overflow-scroll ml-[43px] sm:ml-0">
            <MonthlyTotalProfit />
            <MonthlyTotalExpenses />
            <MonthlyNewCustomers />
        </div>
    );
}
