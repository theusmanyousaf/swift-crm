'use client'
import { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const DatePicker = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date(new Date().setMonth(11))
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <Datepicker
            primaryColor={"purple"}
            value={value}
            onChange={handleValueChange}
            showShortcuts={true}
        />
    );
};

export default DatePicker;
