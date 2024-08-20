type ordersType = {
  currentOrders: number
  targetOrders: number
}

const MonthlyTarget = ({ currentOrders, targetOrders }: ordersType) => {
  const percentage = ((currentOrders / targetOrders) * 100);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{backgroundImage: 'linear-gradient(to bottom right, #9A55FF 50%, #D355FF)'}}  className = "text-white rounded-lg flex flex-row md:flex-col justify-center items-center h-[196px] lg:w-[124px] lg:h-[196px] xl:w-40 xl:h-60 mb-5 md:mb-0 mx-[10.28%] md:mx-0" >
      <div className="relative xl:w-36 xl:h-36 md:w-[116px] md:h-[116px] w-[185px] h-[183px] xl:mx-2 md:mx-1">
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              className="stroke-current text-purple-300"
              strokeWidth="14"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
            ></circle>
            {/* Progress circle */}
            <circle
              className="stroke-white drop-shadow-glow"
              strokeWidth="15"
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            ></circle>
          </svg>
        </div>
        <p className="absolute inset-0 flex items-center justify-center font-bold text-white lg:text-2xl text-xl font-albert-sans">{`${percentage}%`}</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <p className="lg:text-base text-[13px] font-bold font-albert-sans">
          <span className="lg:text-2xl text-xl ">{currentOrders}/</span>{targetOrders}
        </p>
        <p className="text-xs font-semibold">Target Orders</p>
      </div>
    </div >
  );
};

export default MonthlyTarget;
