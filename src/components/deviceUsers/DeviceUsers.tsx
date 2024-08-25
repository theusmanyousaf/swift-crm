
export default function DeviceUsers() {
    const totalUsers = 100
    const desktopUsers = 65
    const MobileUsers = 35
    const widthMobile = (MobileUsers / totalUsers) * 100
    const widthDesktop = (desktopUsers / totalUsers) * 100

    return (
        <div className='xl:py-6 xl:px-4 py-5 px-[13px] flex gap-3 my-[22px] bg-white lg:w-full rounded-lg border  mx-[10.28%] lg:mx-0'>
            <div className='flex flex-col gap-2' style={{ width: `${widthDesktop}%` }}>
                <h1 className='font-semibold xl:text-[15px] text-[12.5px] text-gray-500'>Desktop Users</h1>
                <h1 className='font-bold xl:text-2xl text-xl'>{widthDesktop}%</h1>
                <div className='bg-blue-500 rounded-l xl:h-[31px] h-[25.7px] w-full'/>
            </div>
            <div className='flex flex-col gap-2' style={{ width: `${widthMobile}%` }} >
                <h1 className='font-semibold xl:text-[15px] text-[12.5px] text-gray-500'>Mobile Users</h1>
                <h1 className='font-bold xl:text-2xl text-xl'>{widthMobile}%</h1>
                <div className='bg-lime-600 rounded-r xl:h-[31px] h-[25.7px] w-full' />
            </div>
        </div>
    )
}
