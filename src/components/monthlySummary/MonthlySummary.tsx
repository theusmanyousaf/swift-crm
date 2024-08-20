import MonthlyTotalProfit from "../monthlyTotalProfit/MonthlyTotalProfit";
import MonthlyTotalExpenses from "../monthlyTotalExpenses/MonthlyTotalExpenses";
import MonthlyNewCustomers from "../monthlyNewCustomers/MonthlyNewCustomers";

export default function MonthlySummary() {
    
    return (
        <div className="flex xl:gap-5 gap-[17px] xl:h-60 sm:h-[196px] overflow-x-auto ml-[10.28%] md:ml-0">
            <MonthlyTotalProfit />
            <MonthlyTotalExpenses />
            <MonthlyNewCustomers />
        </div>
    );
}
