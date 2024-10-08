"use client"

import { BsFileEarmarkRuled } from "react-icons/bs";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", desktop: 1000, fill: "var(--color-january)" },
  { month: "February", desktop: 1420, fill: "var(--color-feburary)" },
  { month: "March", desktop: 2550, fill: "var(--color-march)" },
  { month: "April", desktop: 2849, fill: "var(--color-april)" },
  { month: "May", desktop: 4000, fill: "var(--color-may)" },
  { month: "June", desktop: 5000, fill: "var(--color-june)" },
  { month: "July", desktop: 6769, fill: "var(--color-july)" },
]

const chartConfig = {
  january: {
    label: "January",
    color: "hsl(var(--chart-5))",
  },
  feburary: {
    label: "February",
    color: "hsl(var(--chart-4))",
  },
  march: {
    label: "March",
    color: "hsl(var(--chart-3))",
  },
  april: {
    label: "April",
    color: "hsl(var(--chart-2))",
  },
  may: {
    label: "May",
    color: "hsla(354, 82%, 62%, 1)",
  },
  june: {
    label: "June",
    color: "hsla(208, 100%, 63%, 1)",
  },
  july: {
    label: "July",
    color: "hsla(264, 100%, 67%, 1)",
  },
} satisfies ChartConfig

export default function MonthlyIncome() {
  return (
    <div className="flex sm:flex-row flex-col gap-3 xl:pt-6 xl:pb-5 xl:px-4 pt-5 pb-4 px-[13px] xl:h-60 sm:h-[196px] xl:min-w-[560px] md:min-w-[459px] bg-white rounded-lg border mx-[10.28%] md:mx-0">
      <div className="flex flex-col xl:gap-[17px] gap-3 xl:w-[225px]">
        <h1 className="font-semibold xl:text-base text-[13px]">Monthly Income</h1>
        <div className="flex items-center justify-between"><h1 className="xl:text-2xl text-xl font-albert-sans font-bold">$ 6,567.00</h1><button className="rounded-full text-[10.5px] bg-lime-200 px-2 mr-3">+ 5.6%</button></div>
        <p className="text-gray-500 xl:text-sm text-xs font-medium">Compared to the previous month</p>
        <div className="hidden sm:flex flex-col xl:gap-[17px] gap-3">
          <hr className="border border-gray-300 w-full" />
          <div className="flex gap-3 items-center"><div className="flex bg-purple-500 rounded-full items-center justify-center w-7 h-7"><BsFileEarmarkRuled className="w-3 h-3 text-white" /></div><div className="flex flex-col font-semibold gap-2 xl:text-[15px] text-xs"><h1>Accounting</h1><p className="text-gray-500 font-medium">July 1, 2023 - July 31, 2023</p></div></div>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="xl:w-[292px] w-[239px] h-full my-1">
        <BarChart
          data={chartData.slice(chartData.length - 3, chartData.length).reverse()}
          layout="vertical"
          margin={{
            left: -20,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis
            type="number"
            dataKey="desktop"
            tickLine={false}
            tickSize={5}
            tickMargin={10}
            tickFormatter={(value) => value / 1000 + "K"}
            ticks={[2000, 3000, 4000, 5000, 6000]}
            domain={[1000, 7000]}
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
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={1} barSize={30} />
        </BarChart>
      </ChartContainer>
      <div className="sm:hidden flex flex-col xl:gap-[17px] gap-3">
        <hr className="border border-gray-300 w-full" />
        <div className="flex gap-3 items-center"><div className="flex bg-purple-500 rounded-full items-center justify-center w-7 h-7"><BsFileEarmarkRuled className="w-3 h-3 text-white" /></div><div className="flex flex-col font-semibold gap-2 xl:text-[15px] text-xs"><h1>Accounting</h1><p className="text-gray-500 font-medium">July 1, 2023 - July 31, 2023</p></div></div>
      </div>
    </div>
  )
}
