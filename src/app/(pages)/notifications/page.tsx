import MonthlyTotalProfit from "@/components/monthlyTotalProfit/MonthlyTotalProfit";

export default function Notifications() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <div className='font-bold text-3xl'>Notifications</div>
      <MonthlyTotalProfit />
    </div>
  )
}