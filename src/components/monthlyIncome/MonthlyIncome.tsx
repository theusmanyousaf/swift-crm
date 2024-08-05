import { BsFileEarmarkRuled } from "react-icons/bs";

export default function MonthlyIncome() {
  return (
    <div className="flex gap-3 px-4 h-60 w-[560px] bg-white rounded-lg border">
      <div className="mt-6 mb-5 flex flex-col gap-[17px] w-[225px]">
        <h1 className="font-semibold">Monthly Income</h1>
        <div className="flex items-center justify-between"><h1 className="text-2xl font-bold">$ 6,567.00</h1><button className="rounded-full text-[10.5px] bg-lime-200 px-2 mr-3">+ 5.6%</button></div>
        <p className="text-gray-500 text-sm font-medium">Compared to the previous month</p>
        <hr className="border border-gray-300 w-full" />
        <div className="flex gap-3 items-center"><div className="flex bg-purple-500 rounded-full items-center justify-center w-7 h-7"><BsFileEarmarkRuled className="w-3 h-3 text-white" /></div><div className="flex flex-col font-medium gap-2 text-[15px]"><h1>Accounting</h1><p className="text-gray-500 font-barlow">July 1, 2023 - July 31, 2023</p></div></div>
      </div>
      {/* <div className="py-6 bg-white">
        <Image src={Graph1} alt="Monthly Graph" />
      </div> */}
    </div>
  )
}
