"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
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

export default function SalesStatistics() {
    const dispatch = useAppDispatch();
    const { transactions, status, error } = useSelector((state: RootState) => state.transactions);
    useEffect(() => {
        dispatch(fetchTransactionsAsync());
    }, [dispatch]);

    const weekData = getPastSevenDaysData(transactions);
    const todayData = weekData[weekData.length-1]

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="bg-white xl:py-6 py-5 xl:pl-4 xl:pr-[23px] pl-[13px] rounded-lg border mx-[10.28%] lg:mx-0">
            <h1 className="font-semibold mb-3">Sales Statistics</h1>
            <hr className="border-gray-300 mr-4 mb-3" />
            <div className='flex justify-evenly mr-2 mb-3'>
                <div className='flex flex-1'>
                    <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-sky-400 rounded-full w-4 h-4' /></div>
                    <div className='flex-col'><h2 className='text-gray-600 font-semibold xl:text-[15px] text-xs'>Total Revenue</h2><h1 className='xl:text-2xl text-xl font-bold'>${todayData.Revenue.toFixed(2)}<span className='text-gray-300 font-semibold xl:text-[15px] text-xs'>Orders</span></h1></div>
                </div>
                <hr className='w-0 h-full border border-gray-400 mr-2' />
                <div className='flex'>
                    <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-lime-600 rounded-full w-4 h-4' /></div>
                    <div className='flex-col'><h2 className='text-gray-600 font-semibold xl:text-[15px] text-xs'>Total Sales</h2><h1 className='xl:text-2xl text-xl font-bold'>{todayData.Orders} <span className='text-gray-300 font-semibold xl:text-[15px] text-xs'>Products</span></h1></div>
                </div>
                <hr className='w-0 h-full border border-gray-400 mx-2' />
                <div className='flex'>
                    <div className='w-[25px] h-[25px] flex items-center justify-center'><div className='bg-purple-500 rounded-full w-4 h-4' /></div>
                    <div className='flex-col'><h2 className='text-gray-600 font-semibold xl:text-[15px] text-xs'>Total Expense</h2><h1 className='xl:text-2xl text-xl font-bold'>{todayData.Expense} <span className='text-gray-300 font-semibold xl:text-[15px] text-xs'>Views</span></h1></div>
                </div>
            </div>
            <SalesStatisticsGraph chartData={weekData} />
        </div>
    )
}

function SalesStatisticsGraph({ chartData }: {
    chartData: {
        date: string;
        Revenue: number;
        Orders: number;
        Expense: number;
    }[]
}) {
    return (
        <ChartContainer config={{}} className='w-full xl:h-[288px] h-[189px] overflow-hidden -ml-4'>
            <LineChart data={chartData} >
                <CartesianGrid />
                <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short"
                        })
                    }}
                    interval={0}
                />
                <YAxis
                    tickFormatter={(value) => value !== 0 ? value / 1000 + "K" : value}
                    interval="preserveStart"
                    allowDataOverflow={false}
                    axisLine={false}
                    tickLine={false}
                />
                <ChartTooltip
                    content={<ChartTooltipContent
                        className="w-[201px] rounded-lg"
                        indicator="dot"
                        labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })
                        }} />}
                />
                <Line
                    dataKey="Expense"
                    type="linear"
                    stroke="#9A55FF"
                    strokeWidth={4}
                    dot={{
                        fill: "#9A55FF",
                        r: 3
                    }}
                />
                <Line
                    dataKey="Revenue"
                    type="linear"
                    stroke="#41A5FF"
                    strokeWidth={4}
                    dot={{
                        fill: "#41A5FF",
                        r: 3
                    }}
                />
                <Line
                    dataKey="Orders"
                    type="linear"
                    stroke="#62912C"
                    strokeWidth={4}
                    dot={{
                        fill: "#62912C",
                        r: 3
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}