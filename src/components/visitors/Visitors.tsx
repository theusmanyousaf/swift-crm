"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { BsAward } from "react-icons/bs";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { day: "1 Jul", visitors: 5834 },
    { day: "2 Jul", visitors: 7329 },
    { day: "3 Jul", visitors: 4177 },
    { day: "4 Jul", visitors: 8105 },
    { day: "5 Jul", visitors: 3359 },
    { day: "6 Jul", visitors: 17467 },
    { day: "7 Jul", visitors: 16789 },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export default function Visitors() {
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg py-6 px-4 w-full'>
            <h1 className='font-semibold'>Visitors</h1>
            <hr />
            {/* <Image src={Graph} alt='graph' /> */}
            <VisitorsGraph />
            <hr />
            <div className='flex items-center gap-2'>
                <BsAward className='text-purple-500 w-5 h-5' />
                <div>
                    <h1 className='font-semibold text-sm'>Awesome!</h1>
                    <h2 className='font-semibold text-xs text-gray-300'>You just hit a new record!</h2>
                </div>
            </div>
        </div>
    )
}

function VisitorsGraph() {
    return (
        <ChartContainer config={chartConfig}>
            <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                    top: 20,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="day"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    padding={{left:12,right:48}}   
                />
                <YAxis 
                dataKey="visitors" 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => value !== 0 ? value / 1000 + "K" : value}
                ticks={[0,5000,10000,15000,20000]}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="visitors" fill="var(--color-visitors)" radius={1} >
                    <LabelList
                        position="top"
                        offset={12}
                        className="bg-red-700 rounded-full text-lime-50"
                        fontSize={12}
                    />
                </Bar>
            </BarChart>
        </ChartContainer>
    )
}
