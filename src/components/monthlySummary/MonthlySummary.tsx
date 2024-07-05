import { BsGraphUpArrow, BsGraphDownArrow, BsPeople } from "react-icons/bs";
import Green from '/public/assets/GraphG.png';
import Red from '/public/assets/GraphR.png';
import Blue from '/public/assets/GraphB.png';
import Image from "next/image";

export default function MonthlySummary() {
    const dataCards = [
        {
            icon: BsGraphUpArrow,
            title: 'Total Profit',
            amount: '$ 3,393.00',
            change: '+ 3.4%',
            trend: Green,
            color: 'bg-lime-200'
        },
        {
            icon: BsGraphDownArrow,
            title: 'Total Expenses',
            amount: '$ 1,467.00',
            change: '- 2.6%',
            trend: Red,
            color: 'bg-red-200'
        },
        {
            icon: BsPeople,
            title: 'New Customers',
            amount: '1000',
            change: '+ 10%',
            trend: Blue,
            color: 'bg-blue-200'
        }
    ];

    return (
        <div className="flex gap-[21px]">
            {dataCards.map((data, index) => (
                <div key={index} className="flex flex-col items-start gap-2.5 px-[13px] py-[19px] border rounded-lg bg-white w-[233px] h-60">
                    <div className="flex bg-purple-500 rounded-full items-center justify-center w-6 h-6">
                        <data.icon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <h1 className="text-gray-500 font-semibold text-[15px]">{data.title}</h1>
                    <div className="flex items-center justify-between w-full">
                        <h1 className="text-2xl font-bold">{data.amount}</h1>
                        <button className={`rounded-full text-[10.5px] ${data.color} px-2 mr-3`}>{data.change}</button>
                    </div>
                    <Image src={data.trend} alt="trend" className="w-full" />
                </div>
            ))}
        </div>
    );
}
