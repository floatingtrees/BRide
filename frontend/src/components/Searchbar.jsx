import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Searchbar(){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [carpool, setCarpool] = useState("");
    // console.log(date);

    function FindMatch() {
        // console.log("you clicked the fucking button!");

        const sign = true;
        if(! sign) {
            return <button> Fuck </button>;
        }
        else {
            const dataToPass = { date: date, time: time, carpool: carpool };
            // console.log("date into" + date)
            return (
                <Link to="/search" state= {dataToPass}> 
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Button </button>
                </Link>
            )
        }
    }
    return (
    <>
        <div class="sm:col-span-4 flex justify-center items-center">
            <label for="date" class="block text-sm font-large leading-6 text-gray-900">Leave Date</label>
            <div class="mt-2">
                <div class="block rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                    <input type="text" name="date" id="date"
                     class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                     placeholder="date" onChange={(e) => setDate(e.target.value)}/>
                </div>
            </div>
            <label for="time" class="block text-sm font-large leading-6 text-gray-900">Leave time</label>
            <div class="mt-2">
                <div class="block rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                    <input type="text" name="time" id="time" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                     placeholder="time" onChange={(e) => setTime(e.target.value)}/>
                </div>
            </div>
        </div>
        <div class="sm:col-span-4 flex justify-center items-center">
            <label for="carpool" class="block text-sm font-large leading-6 text-gray-900">Carpool Number</label>
            <div class="mt-2">
                <div class="block rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                    <input type="text" name="carpool" id="carpool" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                    placeholder="number" onChange={(e) => setCarpool(e.target.value)}/>
                </div>
            </div>
        </div>
        <FindMatch />
    </>
    )
}

export default Searchbar