import Image from "next/image";
import Map from '/public/assets/MapCountries.png'
import USA from '/public/assets/Flags1.png'
import France from '/public/assets/Flags2.png'
import Canada from '/public/assets/Flags3.png'
import Brazil from '/public/assets/Flags4.png'

export default function CountrySalesStats() {

    const countrySales = [
        {
            image: USA,
            country: 'United States',
            orders: '20,000',
            change: '+ 5.6%'
        },
        {
            image: France,
            country: 'France',
            orders: '15,000',
            change: '+ 3.5%'
        },
        {
            image: Canada,
            country: 'Canada',
            orders: '10,234',
            change: '- 1.4%'
        },
        {
            image: Brazil,
            country: 'Brazil',
            orders: '10,233',
            change: '+ 4.8%'
        },
    ]

    return (
        <div className="flex flex-col gap-3 px-4 pt-6 bg-white border rounded-lg xl:min-w-[390px] lg:max-w-[323.5px] mx-[10.28%] md:mx-0">
            <h1 className="font-semibold">Country Sales Statistics</h1>
            <hr />
            <Image src={Map} alt="Countries stats Map" />
            <hr />
            <div className="flex gap-3"><h1 className="font-bold text-2xl">55,467 <span className="font-semibold text-gray-300">Orders</span></h1><button className="rounded-full text-xs bg-lime-200 px-2 mr-3">+ 5.6%</button></div>
            <h2 className="font-semibold text-gray-500 text-[15px]">Sales from 1 - 7 July, 2023</h2>
            <div className="flex flex-col gap-3">
                {countrySales.map((data, index) => (
                    <div key={index} className="flex justify-between text-sm font-semibold text-gray-400 p-2">
                        <div className="flex gap-1"><Image src={data.image} alt={data.country} width={27} height={27} /><h3 className="text-gray-400 font-semibold">{data.country}</h3></div>
                        <h3>{data.orders}</h3>
                        <button className="rounded-full text-xs bg-lime-200 px-2 mr-3">{data.change}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
