import Hero from "@/components/hero/Hero"
import MonthlyIncome from "@/components/monthlyIncome/MonthlyIncome"

export default function dashboard() {
  return (
    <div className="sm:ml-7">
      <Hero />
      <MonthlyIncome currentOrders={2040} targetOrders={3000} />
    </div>
  )
}
