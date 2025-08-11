"use client"
import { BsGraphUpArrow } from 'react-icons/bs';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { RootState, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTransactionsAsync } from "@/store/slices/transactionsSlice";
import { getMonthlyFinancialData } from '@/constants/formatingFunctions';

export default function MonthlyTotalProfit() {
    const dispatch = useAppDispatch();
    const { transactions } = useSelector((state: RootState) => state.transactions);
    useEffect(() => {
        dispatch(fetchTransactionsAsync());
    }, [dispatch]);
    const financialData = getMonthlyFinancialData(transactions)
    const chartData = financialData.reverse()
    const profit = financialData[financialData.length - 1]?.profit.toFixed(2)
    return (
        <div className="xl:px-4 px-[13px] xl:py-6 py-[19px] border rounded-lg bg-white w-full min-w-[190.6px]">
            <div className="flex bg-purple-500 rounded-full items-center justify-center xl:h-7 xl:w-7 h-[23px] w-[23px] xl:mb-3 mb-[10px]">
                <BsGraphUpArrow className="text-white" size={12} />
            </div>
            <h1 className="text-gray-500 font-semibold text-[15px] xl:max-h-[25px] max-h-[21px] xl:mb-3 mb-[10px]">Total Profit</h1>
            <div className="flex items-center justify-between w-full xl:mb-3 mb-[10px]">
                <h1 className="xl:text-2xl text-xl font-albert-sans xl:max-h-[25px] max-h-[21px] font-bold">${profit}</h1>
                <button className={`rounded-full text-[10.5px] bg-lime-200 px-2`}>+ 3.4%</button>
            </div>
            <ProfitGraph chartData={chartData} />
        </div>
    )
}


function ProfitGraph({ chartData }: {
    chartData: {
        month: string;
        income: number;
        expense: number;
        profit: number;
    }[]
}) {
    return (
        <ChartContainer config={{}} className='w-full xl:h-[77px] h-[62.5px]'>
            <LineChart
                data={chartData}
            >
                <CartesianGrid />
                <XAxis
                    hide
                    interval={0}
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
                    dataKey="profit"
                    type="linear"
                    stroke="#62912C"
                    strokeWidth={2}
                    dot={{
                        fill: "#62912C",
                        r: 1
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}
