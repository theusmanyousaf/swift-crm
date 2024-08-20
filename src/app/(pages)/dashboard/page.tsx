import BestSellingProducts from "@/components/bestSellingProducts/BestSellingProducts"
import CityOrderStats from "@/components/cityOrderStats/CityOrderStats"
import Hero from "@/components/hero/Hero"
import MonthlyIncome from "@/components/monthlyIncome/MonthlyIncome"
import MonthlySummary from "@/components/monthlySummary/MonthlySummary"
import MonthlyTarget from "@/components/monthlyTarget/MonthlyTarget"
import NewCustomers from "@/components/newCustomers/NewCustomers"

export default function dashboard() {
  return (
    <div className="xl:ml-7 lg:ml-[41px] sm:ml-8">
      <Hero />
      <div className="flex flex-col lg:flex-row xl:gap-[21px] gap-[18px]">
        <div className="flex flex-col gap-5">
          <div className="flex md:flex-row flex-col md:items-center md:justify-center xl:gap-[21px] lg:gap-[22px] gap-5">
            <MonthlyTarget currentOrders={2040} targetOrders={3000} />
            <MonthlyIncome />
          </div>
          <MonthlySummary />
        </div>
        <BestSellingProducts />
      </div>
      <div className="flex lg:flex-row flex-col xl:gap-[21px] lg:gap-[17px] gap-[42px] mt-[22px] mb-[67px]">
        <NewCustomers />
        <CityOrderStats />
      </div>
    </div>
  )
}
