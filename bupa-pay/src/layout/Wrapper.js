import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Wrapper({ children }) {
	// if we're not on the homepage, we need to add the header

	return (
		<div className="h-screen overflow-hidden bg-white">
			<Header />
			<div className="flex flex-col grow w-full">
				{children}
			</div>
			<Footer />
		</div>
	);
}
