import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

const SelectTime = ({ time , setTime }) => {
    const [date, setDate] = useState(new Date())
    const timeString = `${date.getHours() % 12}:${date.getMinutes()} ${date.getHours() > 11 ? "PM" : "AM"}`  
    setTime(timeString);
    return(
        <DatePicker date={date} mode="time" onDateChange={setDate} androidVariant='nativeAndroid' is24hourSource="locale"/>
    ) 
}

export { SelectTime }   