import BestSellingProducts from "@/components/bestSellingProducts/BestSellingProducts"
import Hero from "@/components/hero/Hero"
import MonthlyIncome from "@/components/monthlyIncome/MonthlyIncome"
import MonthlyTarget from "@/components/monthlyTarget/MonthlyTarget"

export default function dashboard() {
  return (
    <div className="sm:ml-7">
      <Hero />
      <div className="flex gap-[21px]">
        <MonthlyTarget currentOrders={2040} targetOrders={3000} />
        <MonthlyIncome />
        <BestSellingProducts />
      </div>
    </div>
  )
}
