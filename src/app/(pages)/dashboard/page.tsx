import BestSellingProducts from "@/components/bestSellingProducts/BestSellingProducts"
import Hero from "@/components/hero/Hero"
import MonthlyIncome from "@/components/monthlyIncome/MonthlyIncome"
import MonthlySummary from "@/components/monthlySummary/MonthlySummary"
import MonthlyTarget from "@/components/monthlyTarget/MonthlyTarget"
import NewCustomers from "@/components/newCustomers/NewCustomers"

export default function dashboard() {
  return (
    <div className="sm:ml-[29px]">
      <Hero />
      <div className="flex gap-[21px]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-[21px]">
            <MonthlyTarget currentOrders={2040} targetOrders={3000} />
            <MonthlyIncome />
          </div>
          <MonthlySummary />
        </div>
        <BestSellingProducts />
      </div>
      <NewCustomers />
    </div>
  )
}
