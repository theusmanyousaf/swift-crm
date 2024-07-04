import BestSellingProducts from "@/components/bestSellingProducts/BestSellingProducts"
import Hero from "@/components/hero/Hero"
import MonthlyIncome from "@/components/monthlyIncome/MonthlyIncome"
import MonthlySummary from "@/components/monthlySummary/MonthlySummary"
import MonthlyTarget from "@/components/monthlyTarget/MonthlyTarget"

export default function dashboard() {
  return (
    <div className="sm:ml-7">
      <Hero />
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[22px]">
            <MonthlyTarget currentOrders={2040} targetOrders={3000} />
            <MonthlyIncome />
          </div>
          <MonthlySummary />
        </div>
        <BestSellingProducts />
      </div>
    </div>
  )
}
