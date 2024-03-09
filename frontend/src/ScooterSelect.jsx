import {React} from "react";
import img from "./assets/scooter.jpg";
import ChooseSeat from "./components/ChooseSeat";

function ScooterSelectPage(prop) {
    return (
        <>
          <h1 className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2">
            Select Your Scooter Seat!
          </h1>
        <div className="flex justify-center items-center pt-24">
          <div className="flex space-x-32">
            <button className="w-32 h-32 rounded-full bg-blue-500 text-white font-semibold">
                Back Seat
            </button>
            <button className="w-32 h-32 rounded-full bg-green-500 text-white font-semibold ">
                Front Seat
            </button>
          </div>
        </div>
        </>
    );
}

export default ScooterSelectPage;