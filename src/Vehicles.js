import React, { useState } from "react";
import DiplayVehicles from "./DiplayVehicles";
import './Vehicles.css'

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([
    {
      name: "Bike",
      price: "2,00,000",
      description: "My favourite bike is Royal Enfield Continental GT",
      image:
        "https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/continental-gt/colours/studio-shots/new/rocker-red/side-view.png"
    },
    {
      name: "Car",
      price: "20,00,000",
      description: "My favourite car is Mercedes AMG",
      image:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-GT-Coupe/11053/1692608827675/front-left-side-47.jpg"
    },
    {
      name: "Bicycle",
      price: 20000,
      description: "Fat Bike",
      image:
        "https://5.imimg.com/data5/VS/TY/MY-46210301/sturdy-special-edition-black-fat-bike-500x500.jpg"
    },
    {
        name: "Sports Bike",
        price: "20,00,000",
        description: "Honda RR 1000",
        image:
          "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fc.ndtvimg.com%2F2021-11%2Fgeilnp44_2022-honda-cbr1000rrr-fireblade-sp-_625x300_24_November_21.jpg&w=750&q=75"
      }
  ]);
  return (
    <div>
      <DiplayVehicles myVehicles={vehicles} />
    </div>
  );
}
