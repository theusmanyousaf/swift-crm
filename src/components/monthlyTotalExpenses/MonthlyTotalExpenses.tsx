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
        <div className="px-4 py-6 border rounded-lg bg-white w-full">
            <div className="flex bg-purple-500 rounded-full items-center justify-center h-7 w-7 mb-3">
                <data.icon className="text-white" />
            </div>
            <h1 className="text-gray-500 font-semibold text-[15px] h-[25px] mb-3">{data.title}</h1>
            <div className="flex items-center justify-between w-full mb-3">
                <h1 className="text-2xl max-h-[25px] font-bold">{data.amount}</h1>
                <button className={`rounded-full text-[10.5px] ${data.color} px-2`}>{data.change}</button>
            </div>
            <ExpensesGraph />
        </div>
    )
}


function ExpensesGraph() {
    return (
        <ChartContainer config={chartConfig} className='w-full h-[77px]'>
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



