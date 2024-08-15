import Avatar1 from '/public/assets/avatar1.png'
import Avatar2 from '/public/assets/avatar2.png'
import Avatar3 from '/public/assets/avatar3.png'
import Avatar4 from '/public/assets/avatar4.png'
import Avatar5 from '/public/assets/avatar5.png'
import Avatar6 from '/public/assets/avatar6.png'
import { StaticImageData } from "next/image";

interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  status: "Online" | "Offline";
  imageUrl: StaticImageData;
}

const customersList: Customer[] = [
  {
      phone: '555-123-4567',
      email: "jacobswanson@email.com",
      name: "Jacob Swanson",
      status: "Online",
      address: "Phoenix, USA",
      imageUrl: Avatar1,
  },
  {
      phone: '555-987-6543',
      email: "ameliajohnson@email.com",
      name: "Amelia Johnson",
      status: "Online",
      address: "Philadelphia, USA",
      imageUrl: Avatar2,
  },
  {
      phone: '555-555-7890',
      email: "ericslater@email.com",
      name: "Jacob Swanson",
      status: "Offline",
      address: "Dallas, USA",
      imageUrl: Avatar3,
  },
  {
      phone: '555-321-6540',
      email: "aaronchadwick@email.com",
      name: "Amelia Johnson",
      status: "Online",
      address: "San Diego, USA",
      imageUrl: Avatar4,
  },
  {
      phone: '555-888-9999',
      email: "jessicasloan@email.com",
      name: "Jacob Swanson",
      status: "Offline",
      address: "Detroit, USA",
      imageUrl: Avatar5,
  },
  {
      phone: '555-444-2222',
      email: "marygrover@email.com",
      name: "Amelia Johnson",
      status: "Online",
      address: "Portland, USA",
      imageUrl: Avatar6,
  },
  {
      phone: '555-666-7777',
      email: "mattrobbins@email.com",
      name: "Jacob Swanson",
      status: "Online",
      address: "Charlotte, USA",
      imageUrl: Avatar3,
  },
  {
      phone: '555-777-8888',
      email: "dehliadrake@email.com",
      name: "Amelia Johnson",
      status: "Online",
      address: "Las Vegas, USA",
      imageUrl: Avatar1
  },
  {
      phone: '555-234-5678',
      email: "conradwebber@email.com",
      name: "Jacob Swanson",
      status: "Online",
      address: "Nashville, USA",
      imageUrl: Avatar4,
  },
  {
      phone: '555-876-5432',
      email: "zekeromez@email.com",
      name: "Amelia Johnson",
      status: "Online",
      address: "Indianapolis, USA",
      imageUrl: Avatar2
  },
  {
      phone: '11',
      email: "31 Jul 2023",
      name: "Jacob Swanson",
      status: "Online",
      address: "$632.00",
      imageUrl: Avatar6
  },
  {
      phone: '12',
      email: "31 Jul 2023",
      name: "Amelia Johnson",
      status: "Online",
      address: "$489.00",
      imageUrl: Avatar5
  },
  {
      phone: '13',
      email: "31 Jul 2023",
      name: "Jacob Swanson",
      status: "Online",
      address: "$762.00",
      imageUrl: Avatar1
  },
  {
      phone: '14',
      email: "31 Jul 2023",
      name: "Amelia Johnson",
      status: "Online",
      address: "$154.00",
      imageUrl: Avatar3
  },
  // Add more customers as needed...
];

export default function Notifications() {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <div className='font-bold text-3xl'>Notifications</div>
      <div className="h-full w-full bg-gradient-to-b from-purple-500 to-purple-300 p-5">
        <CustomerList />
      </div>
    </div>
  )
}


const CustomerList: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100">
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
              Customer Name
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
              Email
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
              Phone
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
              Address
            </th>
            <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {customersList.map((customer, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="py-2 px-4 flex items-center">
                <img
                  src={"customer.imageUrl"}
                  alt={customer.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm font-medium text-gray-900">
                  {customer.name}
                </span>
              </td>
              <td className="py-2 px-4 text-sm text-gray-900">
                {customer.email}
              </td>
              <td className="py-2 px-4 text-sm text-gray-900">
                {customer.phone}
              </td>
              <td className="py-2 px-4 text-sm text-gray-900">
                {customer.address}
              </td>
              <td className="py-2 px-4">
                <span
                  className={`inline-block px-2 py-1 text-sm font-semibold rounded-full ${
                    customer.status === "Online"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <span className="text-sm text-gray-700">Showing </span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <span className="text-sm text-gray-700"> of 10,678 entries</span>
        </div>
        <div className="flex items-center">
          <button className="text-sm px-2 py-1 border border-gray-300 rounded-l">
            {"<"}
          </button>
          <button className="text-sm px-3 py-1 border border-gray-300">1</button>
          <button className="text-sm px-3 py-1 border border-gray-300">2</button>
          <button className="text-sm px-3 py-1 border border-gray-300">3</button>
          <button className="text-sm px-3 py-1 border border-gray-300">4</button>
          <button className="text-sm px-3 py-1 border border-gray-300">5</button>
          <button className="text-sm px-2 py-1 border border-gray-300 rounded-r">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
