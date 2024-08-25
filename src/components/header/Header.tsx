import Avatar from '/public/assets/avatar.png'
import Image from 'next/image'
import DatePickerWithRange from '../datePickerWithRange/DatePickerWithRange'
import { auth } from '@/auth';

export default async function Header({title}:{title: string}) {
    const session = await auth();
    return (
        <div className="flex sm:flex-row flex-col-reverse sm:justify-between gap-[27px] xl:mt-10 lg:mt-9 mt-[29px] md:items-center mb-5 xl:mb-3.5 lg:mb-10">
            <h1 className="font-bold font-albert-sans xl:text-[32px] text-[26.5px]">{title}</h1>
            <div className='flex items-center justify-between gap-4'>
                <DatePickerWithRange />
                <div className='flex items-center gap-2'>
                {session?.user?.image && <Image src={session?.user?.image || Avatar} alt="Avatar" width={500} height={500} className="xl:w-[53px] xl:h-[53px] h-11 w-11 rounded-full" />}
                    <div className='font-bold text-[13px] xl:text-base'>{session?.user?.name}</div>
                </div>
            </div>
        </div>
    )
}
