import React from "react";
import Header from "./components/Header";
import PaymentPlan from "./components/PaymentPlan";
import FloorPlan from "./components/FloorPlan";
import Nearby from "./components/Nearby";
import AboutUs from "./components/AboutUs";
import PhotoGallery from "./components/PhotoGallery";
import Location from "./components/Location";
import Register from "../../components/UI/Register";
import { systemSettings } from "../../settings";
import Head from "../../components/Layout/Head";
const Home = () => {
	return (
		<>
			<Head
				title={"NAD AL SHEBA"}
				desc={
					"Discover an exceptional villa community that caters to diverse lifestyles, offering a wealth of recreational and wellness facilities, from yoga lawns to outdoor theaters, all nestled within a lush natural landscape. Experience an elevated living legacy where every visionary moment thrives, fostering abundance and harmony, and where walkable roads and tracks encourage an active and vibrant lifestyle."
				}
				canonicalLink={"/"}
				keywords={
					"Nad Al Sheba Garden Townhouses, Dubai real estate, Townhouse properties, Luxury homes, Residential development, Modern architecture, Gated community, Family-friendly, Green spaces, Community amenities, Investment opportunities, Contemporary design, Spacious living, Prime location, Lifestyle living, Premium real estate, Property investment, Dubai property market, Landscaped gardens, Dubai Real Estate, AVA Real Estate"
				}
			/>
			<Header />
			<PaymentPlan />
			<div
				className={`${
					systemSettings.backgroudLines
						? "bg-primary bg-t3Pattern bg-no-repeat bg-cover bg-center"
						: systemSettings.palmPattern &&
						  "bg-primary  bg-no-repeat bg-cover bg-center"
				}`}
			>
				<AboutUs />
				<PhotoGallery />
				<FloorPlan />
				<Nearby />
			</div>
			<Location />
			<Register />
		</>
	);
};
export default Home;
