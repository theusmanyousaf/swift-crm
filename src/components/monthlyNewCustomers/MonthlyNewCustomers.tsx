"use client"
import { BsPeople } from 'react-icons/bs';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", customers: 225 },
    { month: "February", customers: 250 },
    { month: "March", customers: 225 },
    { month: "April", customers: 225 },
    { month: "May", customers: 320 },
    { month: "June", customers: 300 },
    { month: "July", customers: 350 },
]

export default function MonthlyNewCustomers() {
    return (
        <div className="xl:px-4 px-[13px] xl:py-6 py-[19px] border rounded-lg bg-white w-full min-w-[190.6px]">
            <div className="flex bg-purple-500 rounded-full items-center justify-center h-7 w-7 xl:mb-3 mb-[10px]">
                <BsPeople className="text-white" size={12}/>
            </div>
            <h1 className="text-gray-500 font-semibold text-[15px] xl:max-h-[25px] max-h-[21px] xl:mb-3 mb-[10px]">New Customers</h1>
            <div className="flex items-center justify-between w-full xl:mb-3 mb-[10px]">
                <h1 className="xl:text-2xl text-xl xl:max-h-[25px] max-h-[21px] font-bold">1000</h1>
                <button className={`rounded-full text-[10.5px] bg-blue-200 px-2`}>+ 10%</button>
            </div>
            <CustomersGraph />
        </div>
    )
}


function CustomersGraph() {
    return (
        <ChartContainer config={{}} className='w-full xl:h-[77px] h-[62.5px]'>
            <LineChart
                data={chartData}
            >
                <CartesianGrid />
                <XAxis
                    hide
                    axisLine={false}
                />
                <YAxis
                    hide
                    interval={0}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Line
                    dataKey="customers"
                    type="linear"
                    stroke="#41A5FF"
                    strokeWidth={2}
                    dot={{
                        fill: "#41A5FF",
                        r: 1
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}
