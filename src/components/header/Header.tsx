import Avatar from '/public/assets/avatar.png'
import Image from 'next/image'
import DatePickerWithRange from '../datePickerWithRange/DatePickerWithRange'

export default function Header({title}:{title: string}) {
    return (
        <div className="flex md:flex-row flex-col-reverse md:justify-between gap-[27px] xl:mt-10 lg:mt-9 mt-[29px] md:items-center mb-5 xl:mb-3.5 lg:mb-10">
            <h1 className="font-bold font-albert-sans xl:text-[32px] text-[26px]">{title}</h1>
            <div className='flex items-center justify-between gap-4'>
                <DatePickerWithRange />
                <div className='flex items-center gap-2'>
                    <Image src={Avatar} alt="Avatar" className="xl:w-[53px] xl:h-[53px] w-11 h-11" />
                    <div className='font-bold text-[13px] xl:text-base'>Sophia Chester</div>
                </div>
            </div>
        </div>
    )
}
