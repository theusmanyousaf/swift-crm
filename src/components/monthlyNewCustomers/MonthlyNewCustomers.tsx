"use client"
import { BsPeople } from 'react-icons/bs';
import Blue from '/public/assets/GraphB.png';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 225 },
    { month: "February", desktop: 250 },
    { month: "March", desktop: 225 },
    { month: "April", desktop: 225 },
    { month: "May", desktop: 320 },
    { month: "June", desktop: 300 },
    { month: "July", desktop: 350 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#41A5FF",
    },
} satisfies ChartConfig

const data = {
    icon: BsPeople,
    title: 'New Customers',
    amount: '1000',
    change: '+ 10%',
    color: 'bg-blue-200'
}

export default function MonthlyNewCustomers() {
    return (
        <div className="xl:px-4 px-[13px] xl:py-6 py-[19px] border rounded-lg bg-white w-full min-w-[190.6px]">
            <div className="flex bg-purple-500 rounded-full items-center justify-center h-7 w-7 xl:mb-3 mb-[10px]">
                <data.icon className="text-white" size={12}/>
            </div>
            <h1 className="text-gray-500 font-semibold text-[15px] xl:max-h-[25px] max-h-[21px] xl:mb-3 mb-[10px]">{data.title}</h1>
            <div className="flex items-center justify-between w-full xl:mb-3 mb-[10px]">
                <h1 className="xl:text-2xl text-xl xl:max-h-[25px] max-h-[21px] font-bold">{data.amount}</h1>
                <button className={`rounded-full text-[10.5px] ${data.color} px-2`}>{data.change}</button>
            </div>
            <CustomersGraph />
        </div>
    )
}


function CustomersGraph() {
    return (
        <ChartContainer config={chartConfig} className='w-full xl:h-[77px] h-[62.5px]'>
            <LineChart
                data={chartData}
            >
                <CartesianGrid />
                <XAxis
                    ticks={[1,2,3,4,5,6,7]}
                    domain={[0, 7]}
                    hide
                    axisLine={false}
                />
                <YAxis
                    ticks={[200, 225, 250, 275, 300, 325, 350]}
                    domain={[200, 350]}
                    hide
                    interval={0}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Line
                    dataKey="desktop"
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
