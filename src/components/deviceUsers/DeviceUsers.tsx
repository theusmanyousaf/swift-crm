
export default function DeviceUsers() {
    const totalUsers = 100
    const desktopUsers = 65
    const MobileUsers = 35
    const widthMobile = (MobileUsers / totalUsers) * 100
    const widthDesktop = (desktopUsers / totalUsers) * 100

    return (
        <div className='xl:py-6 xl:px-4 flex gap-3 my-[22px] bg-white w-full rounded-lg border'>
            <div className='flex flex-col gap-2' style={{ width: `${widthDesktop}%` }}>
                <h1 className='font-semibold text-[15px] text-gray-500'>Desktop Users</h1>
                <h1 className='font-bold text-2xl'>{widthDesktop}%</h1>
                <div className='bg-blue-500 rounded-l h-8 w-full'/>
            </div>
            <div className='flex flex-col gap-2' style={{ width: `${widthMobile}%` }} >
                <h1 className='font-semibold text-[15px] text-gray-500'>Mobile Users</h1>
                <h1 className='font-bold text-2xl'>{widthMobile}%</h1>
                <div className='bg-lime-600 rounded-r h-8 w-full' />
            </div>
        </div>
    )
}
