"use client"

import { BsFileEarmarkRuled } from "react-icons/bs";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getCurrentMonthIncome, getFormattedMonthRange, getIncomeChangePercentage, getMonthlyFinancialData } from "@/constants/formatingFunctions";
import { RootState, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTransactionsAsync } from "@/store/slices/transactionsSlice";

export default function MonthlyIncome() {
  const dispatch = useAppDispatch();
    const { transactions } = useSelector((state: RootState) => state.transactions);
    useEffect(() => {
      dispatch(fetchTransactionsAsync());
  }, [dispatch]);
  const data = getMonthlyFinancialData(transactions)
  const colors = ["#9A55FF", "#41A5FF", "#ED4D5C"];
  const chartData = data.slice(0,3).map((item, index) => ({
    ...item,
    fill: colors[index],
  }));
  const income = getCurrentMonthIncome(transactions)
  const change = getIncomeChangePercentage(transactions)
  const formattedDate = getFormattedMonthRange();
  return (
    <div className="flex sm:flex-row flex-col gap-3 xl:pt-6 xl:pb-5 xl:px-4 pt-5 pb-4 px-[13px] xl:h-60 sm:h-[196px] xl:min-w-[560px] md:min-w-[459px] bg-white rounded-lg border mx-[10.28%] md:mx-0">
      <div className="flex flex-col xl:gap-[17px] gap-3 xl:w-[225px]">
        <h1 className="font-semibold xl:text-base text-[13px]">Monthly Income</h1>
        <div className="flex items-center justify-between"><h1 className="xl:text-2xl text-xl font-albert-sans font-bold">${income.toFixed(2)}</h1><button className="rounded-full text-[10.5px] bg-lime-200 px-2 mr-3">{typeof(change) === 'number' && change.toFixed(2)}%</button></div>
        <p className="text-gray-500 xl:text-sm text-xs font-medium">Compared to the previous month</p>
        <div className="hidden sm:flex flex-col xl:gap-[17px] gap-3">
          <hr className="border border-gray-300 w-full" />
          <div className="flex gap-3 items-center"><div className="flex bg-purple-500 rounded-full items-center justify-center w-7 h-7"><BsFileEarmarkRuled className="w-3 h-3 text-white" /></div><div className="flex flex-col font-semibold gap-2 xl:text-[15px] text-xs"><h1>Accounting</h1><p className="text-gray-500 font-medium">{formattedDate}</p></div></div>
        </div>
      </div>
      <ChartContainer config={{}} className="xl:w-[292px] w-[239px] h-full my-1">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            left: -20,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis
            type="number"
            dataKey="income"
            tickLine={false}
            tickSize={5}
            tickMargin={10}
            tickFormatter={(value) => value / 1000 + "K"}
            className="text-gray-300"
          />
          <YAxis
            dataKey="month"
            type="category"
            tickLine={false}
            tickSize={5}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="income" fill="var(--color-income)" radius={1} barSize={25} />
        </BarChart>
      </ChartContainer>
      <div className="sm:hidden flex flex-col xl:gap-[17px] gap-3">
        <hr className="border border-gray-300 w-full" />
        <div className="flex gap-3 items-center"><div className="flex bg-purple-500 rounded-full items-center justify-center w-7 h-7"><BsFileEarmarkRuled className="w-3 h-3 text-white" /></div><div className="flex flex-col font-semibold gap-2 xl:text-[15px] text-xs"><h1>Accounting</h1><p className="text-gray-500 font-medium">July 1, 2023 - July 31, 2023</p></div></div>
      </div>
    </div>
  )
}
