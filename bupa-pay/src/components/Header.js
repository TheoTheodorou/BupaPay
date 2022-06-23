import React from "react";

function Header() {
	return (
		<div className="flex items-center h-12 p-4 gap-2">
			<img
				src="bupa-logo.svg"
				alt="bupa logo"
				className="h-8 w-8"
			/>
			<div classname="text-red-500">Bupa Pay</div>
		</div>
	);
}

export default Header;
