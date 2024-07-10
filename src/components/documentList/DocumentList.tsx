import { BsSearch } from 'react-icons/bs'
import Button from '../button/Button'

export default function DocumentList() {
    return (
        <div className='my-[33px] bg-white rounded-lg px-4 py-6'>
            <div className='flex justify-between items-center'>
                <div className='font-semibold'>
                    <button className='py-2 px-4 border-b-4 text-purple-500 border-purple-500'>ALL</button>
                    <button className='py-2 px-4 border-b-4 border-black'>Active</button>
                    <button className='py-2 px-4 border-b-4 border-black'>Archive</button>
                </div>
                <div className="md:flex hidden gap-4">
                    <div className='flex'><input id="search-hero" type="text" placeholder="Type here" className="border border-grey-200 max-w-32  lg:max-w-[201px] md:px-3 py-1.5 rounded-l-md" /> <button className="bg-purple-500 text-sm lg:text-base text-white flex items-center justify-evenly w-auto xl:w-[99px] px-3 py-1.5 rounded-r-md"><BsSearch />Search</button></div>
                    <Button name='Download' />
                    <Button name='Delete' />
                </div>
            </div>
        </div>
    )
}
