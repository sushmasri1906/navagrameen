// export default function Home() {
// 	return (
// 		<main className="h-screen w-screen bg-linear-to-b/hsl from-orange-300 from-[25%] via-white via-50% to-green-400 to-75% flex items-center justify-center">
// 			<h1 className="h-fit w-fit text-center text-9xl">
// 				NAVA GRAMEEN VIKAS NIRMAN SOCIETY
// 			</h1>
// 		</main>
// 	);
// }
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Programs from "@/components/home/Programs";
import StayConnected from "@/components/home/StayConnected";
import News from "@/components/home/News";
import React from "react";
import Achievements from "@/components/home/Achievements";
import LiveStockEnergy from "@/components/home/LiveStockEnergy";

function page() {
	return (
		<>
			<Hero />
			<Programs />
			<Achievements />

			<StayConnected />
			<LiveStockEnergy />

			<Gallery />

			<News />
		</>
	);
}

export default page;
