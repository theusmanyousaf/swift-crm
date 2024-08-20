"use client"
import { BsGraphDownArrow } from 'react-icons/bs';
import Red from '/public/assets/GraphR.png';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", Expense: 2250 },
    { month: "February", Expense: 2500 },
    { month: "March", Expense: 2250 },
    { month: "April", Expense: 3250 },
    { month: "May", Expense: 2750 },
    { month: "June", Expense: 3000 },
    { month: "July", Expense: 2250 },
]

const chartConfig = {
    desktop: {
        label: "Expense",
        color: "#ED4D5C",
    },
} satisfies ChartConfig

const data = {
    icon: BsGraphDownArrow,
    title: 'Total Expenses',
    amount: '$ 1,467.00',
    change: '- 2.6%',
    trend: Red,
    color: 'bg-red-200'
}

export default function MonthlyTotalExpenses() {
    return (
        <div className="xl:px-4 px-[13px] xl:py-6 py-[19px] border rounded-lg bg-white w-full min-w-[190.6px]">
            <div className="flex bg-purple-500 rounded-full items-center justify-center xl:h-7 xl:w-7 h-[23px] w-[23px] xl:mb-3 mb-[10px]">
                <data.icon className="text-white" size={12}/>
            </div>
            <h1 className="text-gray-500 font-semibold text-[15px] xl:max-h-[25px] max-h-[21px] xl:mb-3 mb-[10px]">{data.title}</h1>
            <div className="flex items-center justify-between w-full xl:mb-3 mb-[10px]">
                <h1 className="xl:text-2xl text-xl xl:max-h-[25px] max-h-[21px] font-bold">{data.amount}</h1>
                <button className={`rounded-full text-[10.5px] ${data.color} px-2`}>{data.change}</button>
            </div>
            <ExpensesGraph />
        </div>
    )
}


function ExpensesGraph() {
    return (
        <ChartContainer config={chartConfig} className='w-full xl:h-[77px] h-[62.5px]'>
            <LineChart
                accessibilityLayer
                data={chartData}
            >
                <CartesianGrid />
                <XAxis
                    ticks={[1, 2, 3, 4, 5, 6, 7]}
                    domain={[0, 7]}
                    hide
                    axisLine={false}
                />
                <YAxis
                    ticks={[2000, 2250, 2500, 2750, 3000, 3250, 3500]}
                    domain={[2000, 3500]}
                    hide
                    interval={0}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Line
                    dataKey="Expense"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={{
                        fill: "var(--color-desktop)",
                        r: 1
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}



