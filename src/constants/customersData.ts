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
    total: string
    imageUrl: StaticImageData
}

export const customers: CustomerType[] = [
    {
        id: 1,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        total: "$999.00",
        imageUrl: Avatar1,
    },
    {
        id: 2,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        total: "$1999.00",
        imageUrl: Avatar2,
    },
    {
        id: 3,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Pending",
        total: "$2000.00",
        imageUrl: Avatar3,
    },
    {
        id: 4,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        total: "$399.00",
        imageUrl: Avatar4,
    },
    {
        id: 5,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Pending",
        total: "$799.00",
        imageUrl: Avatar5,
    },
    {
        id: 6,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        total: "$500.00",
        imageUrl: Avatar6,
    },
    {
        id: 7,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        total: "$976.00",
        imageUrl: Avatar3,
    },
    {
        id: 8,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        total: "$159.00",
        imageUrl: Avatar1
    },
    {
        id: 9,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        total: "$929.00",
        imageUrl: Avatar4,
    },
    {
        id: 10,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        total: "$749.00",
        imageUrl: Avatar2
    },
    {
        id: 11,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        total: "$632.00",
        imageUrl: Avatar6
    },
    {
        id: 12,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        total: "$489.00",
        imageUrl: Avatar5
    },
    {
        id: 13,
        date: "31 Jul 2023",
        name: "Jacob Swanson",
        status: "Success",
        total: "$762.00",
        imageUrl: Avatar1
    },
    {
        id: 14,
        date: "31 Jul 2023",
        name: "Amelia Johnson",
        status: "Success",
        total: "$154.00",
        imageUrl: Avatar3
    },
    // Add more customers as needed...
];