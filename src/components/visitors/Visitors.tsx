"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { BsAward } from "react-icons/bs";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { getPastSevenDaysData } from "@/constants/formatingFunctions"
import { RootState, useAppDispatch } from "@/store/store"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchTransactionsAsync } from "@/store/slices/transactionsSlice"

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
    const dispatch = useAppDispatch();
    const { transactions, status, error } = useSelector((state: RootState) => state.transactions);
    useEffect(() => {
        dispatch(fetchTransactionsAsync());
    }, [dispatch]);

    const weekData = getPastSevenDaysData(transactions);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    return (
        <div className='flex flex-col gap-3 bg-white border rounded-lg py-6 px-4 w-full'>
            <h1 className='font-semibold'>Visitors</h1>
            <hr />
            <VisitorsGraph chartData={weekData} />
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

function VisitorsGraph({ chartData }: {
    chartData: {
        date: string;
        Revenue: number;
        Orders: number;
        Expense: number;
    }[]
}) {
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
                    dataKey="date"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short"
                        })
                    }}
                />
                <YAxis
                    dataKey="Orders"
                    tickLine={false}
                    axisLine={false}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="Orders" fill="#C9F19C" radius={1} />
            </BarChart>
        </ChartContainer>
    )
}
