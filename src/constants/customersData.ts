import { StaticImageData } from 'next/image'
import Avatar1 from '/public/assets/avatar1.png'
import Avatar2 from '/public/assets/avatar2.png'
import Avatar3 from '/public/assets/avatar3.png'
import Avatar4 from '/public/assets/avatar4.png'
import Avatar5 from '/public/assets/avatar5.png'
import Avatar6 from '/public/assets/avatar6.png'

type CustomerType = {
    id: number,
    date: string
    name: string
    status: string
    amount: string
    imageUrl: StaticImageData
    country: string
}

export const customers: CustomerType[] = [
    {
        id: 1,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        amount: "$999.00",
        imageUrl: Avatar1,
        country: "United States"
    },
    {
        id: 2,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        amount: "$1999.00",
        imageUrl: Avatar2,
        country: "Canada"
    },
    {
        id: 3,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Pending",
        amount: "$2000.00",
        imageUrl: Avatar3,
        country: "France"
    },
    {
        id: 4,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        amount: "$399.00",
        imageUrl: Avatar4,
        country: "United States"
    },
    {
        id: 5,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Pending",
        amount: "$799.00",
        imageUrl: Avatar5,
        country: "Canada"
    },
    {
        id: 6,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        amount: "$500.00",
        imageUrl: Avatar6,
        country: "United States"
    },
    {
        id: 7,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        amount: "$976.00",
        imageUrl: Avatar3,
        country: "Brazil"
    },
    {
        id: 8,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        amount: "$159.00",
        imageUrl: Avatar1,
        country: "Canada"
    },
    {
        id: 9,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        amount: "$929.00",
        imageUrl: Avatar4,
        country: "France"
    },
    {
        id: 10,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        amount: "$749.00",
        imageUrl: Avatar2,
        country: "France"
    },
    {
        id: 11,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        amount: "$632.00",
        imageUrl: Avatar6,
        country: "United States"
    },
    {
        id: 12,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        amount: "$489.00",
        imageUrl: Avatar5,
        country: "United States"
    },
    {
        id: 13,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        amount: "$762.00",
        imageUrl: Avatar1,
        country: "Canada"
    },
    {
        id: 14,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        amount: "$154.00",
        imageUrl: Avatar3,
        country: "United States"
    },
    // Add more customers as needed...
];