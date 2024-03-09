import {React} from "react";
import img from "./assets/scooter.jpg";

function ScooterSelectPage() {
    return (
        <>
          <h1 className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2">
            Select Your Scooter Seat!
          </h1>
          <div className="h-96 w-full">
            <img src={img} alt="My Image" className="object-contain h-full w-full" />
         </div>
        </>
    );
}

export default ScooterSelectPage;