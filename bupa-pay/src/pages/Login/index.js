import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function Login() {
	let navigate = useNavigate();
	const [check, setCheck] = useState(true);
	const [localUser, setLocalUser] = useLocalStorage({ key: 'real_login_user', defaultValue: "" });
	const[user, setUser] = useState({
	email:"",
	password:""})

	const handleLogin = () =>{
		let c = true;

		Object.values(user).forEach((val) => {
			if (val.trim() === "") {
	
				setCheck (false);
				c=false;
	
			}  
	
		});
		
		if(c){
			console.log(check)
			navigateToDashboard();
		}
		else {console.log("No empty fields!")}



	}

	const navigateToDashboard = () => {
		setLocalUser(user);
		navigate("/dashboard", { replace: true });
	}

	return (
		<div className="bupa-container p-10 flex flex-col items-center">
<div className="flex w-full mb-10">
				<div className="flex justify-between w-2/3">
			<Link className="flex align-middle"to="/">
					<button>Back</button>
			</Link>
			<img
				src="/bupa-logo.svg"
				alt=""
				className="h-20 bg-white"
			/></div></div>
			<form className="bupa-form">
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="email">
						Email
					</label>
					<input
						className="form-input"
						type="text"
						id="email"
						value={user.email}
						onChange={(e)=> {setUser({...user,email:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="password">
						Password
					</label>
					<input
						className="form-input"
						type="text"
						id="password"
						value={user.password}
						onChange={(e)=> {setUser({...user,password:e.target.value})}}
					/>
				</div>
				
			</form>
			<div className="mt-10 flex flex-col align-middle">
					<label className={`text-red-700 ${check ? "hidden":""}`} >No empty fields!</label>
					<button onClick={handleLogin} className="flex justify-center">Login</button>
					</div>
		</div>
	);
}

export default Login;
