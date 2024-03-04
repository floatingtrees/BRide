import React, {useState} from "react";

function Searchbar(){
    const [date, setDate] = useState("");
    console.log(date);

    return (
    <>
        <div class="sm:col-span-4 flex justify-center items-center">
            <label for="username" class="block text-sm font-large leading-6 text-gray-900">Leave Date</label>
            <div class="mt-2">
                <div class="block rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                    <input type="text" name="username" id="username"
                     autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                     placeholder="date" onChange={(e) => setDate(e.target.value)}/>
                </div>
            </div>
            <label for="username" class="block text-sm font-large leading-6 text-gray-900">Leave time</label>
            <div class="mt-2">
                <div class="block rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="time" />
                </div>
            </div>
        </div>
        <div class="sm:col-span-4 flex justify-center items-center">
            <label for="username" class="block text-sm font-large leading-6 text-gray-900">Carpool Number</label>
            <div class="mt-2">
                <div class="block rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="number" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Searchbar