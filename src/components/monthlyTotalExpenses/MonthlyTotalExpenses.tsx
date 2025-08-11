"use client"
import { BsGraphDownArrow } from 'react-icons/bs';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { RootState, useAppDispatch } from '@/store/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTransactionsAsync } from '@/store/slices/transactionsSlice';
import { getMonthlyFinancialData } from '@/constants/formatingFunctions';

export default function MonthlyTotalExpenses() {
    const dispatch = useAppDispatch();
    const { transactions } = useSelector((state: RootState) => state.transactions);
    useEffect(() => {
        dispatch(fetchTransactionsAsync());
    }, [dispatch]);
    const financialData = getMonthlyFinancialData(transactions)
    const chartData = financialData.reverse()
    const expense = financialData[financialData.length - 1]?.expense.toFixed(2)
    return (
        <div className="xl:px-4 px-[13px] xl:py-6 py-[19px] border rounded-lg bg-white w-full min-w-[190.6px]">
            <div className="flex bg-purple-500 rounded-full items-center justify-center xl:h-7 xl:w-7 h-[23px] w-[23px] xl:mb-3 mb-[10px]">
                <BsGraphDownArrow className="text-white" size={12} />
            </div>
            <h1 className="text-gray-500 font-semibold text-[15px] xl:max-h-[25px] max-h-[21px] xl:mb-3 mb-[10px]">Total Expenses</h1>
            <div className="flex items-center justify-between w-full xl:mb-3 mb-[10px]">
                <h1 className="xl:text-2xl text-xl font-albert-sans xl:max-h-[25px] max-h-[21px] font-bold">${expense}</h1>
                <button className={`rounded-full text-[10.5px] bg-red-200 px-2`}>- 2.6%</button>
            </div>
            <ExpensesGraph chartData={chartData} />
        </div>
    )
}


function ExpensesGraph({ chartData }: {
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
                accessibilityLayer
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
                    dataKey="expense"
                    type="linear"
                    stroke="#ED4D5C"
                    strokeWidth={2}
                    dot={{
                        fill: "#ED4D5C",
                        r: 1
                    }}
                />
            </LineChart>
        </ChartContainer>
    )
}



