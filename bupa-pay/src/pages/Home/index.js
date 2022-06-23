import React from "react";
import { Link } from "react-router-dom";

function Home() {
	let pages = ["Login", "Register"];
	return (
		<div className="flex flex-col gap-10 bg-blue-400 h-screen w-full justify-center items-center">
			<h1 className="mb-20">Bupa Pay</h1>
			{pages.map((page) => (
				<Link to={`/${page}`}>{page}</Link>
			))}
		</div>
	);
}

export default Home;
