import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

function Register() {
	let navigate = useNavigate();
	const [check, setCheck] = useState(true);
	const [localUser, setLocalUser] = useLocalStorage({ key: 'real_user', defaultValue: "" });
	const[user, setUser] = useState({name:"",
	email:"",
	password:"",
	cfm_password:"",
	phone:"",
	address:"",
	city:"",
	postcode:"",
	country:"United Kingdom",
	birthday:""})

	const handleRegister = () =>{
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

	const countries = [
		"United Kingdom",
		"United States",
		"Spain",
		"France",
		"Germany",
		"Italy",
		"Switzerland",
	];

	return (
		<div className="bupa-container  p-10 flex flex-col items-center">
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
			<form className="bupa-form ">
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="name">
						Name
					</label>
					<input
						className="form-input"
						type="text"
						id="name"
						value={user.name}
						onChange={(e)=> {setUser({...user,name:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="email">
						Email
					</label>
					<input
						className="form-input"
						type="email"
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
						type="password"
						id="password"
						value={user.password}
						onChange={(e)=> {setUser({...user,password:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label
						className="form-label"
						htmlFor="confirm-password"
					>
						Confirm Password
					</label>
					<input
						className="form-input"
						type="password"
						id="confirm-password"
						value={user.cfm_password}
						onChange={(e)=> {setUser({...user,cfm_password:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="phone">
						Phone
					</label>
					<input
						className="form-input"
						type="text"
						id="phone"
						value={user.phone}
						onChange={(e)=> {setUser({...user,phone:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="address">
						Address
					</label>
					<input
						className="form-input"
						type="text"
						id="address"
						value={user.address}
						onChange={(e)=> {setUser({...user,address:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="city">
						City
					</label>
					<input
						className="form-input"
						type="text"
						id="city"
						value={user.city}
						onChange={(e)=> {setUser({...user,city:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="postcode">
						Postcode/Zip
					</label>
					<input
						className="form-input"
						type="text"
						id="postcode"
						value={user.postcode}
						onChange={(e)=> {setUser({...user,postcode:e.target.value})}}
					/>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="country">
						Country
					</label>
					<select
						className="form-input"
						name="country"
						id="country"
						value={user.country}
						onChange={(e)=> {setUser({...user,country:e.target.value})}}
					>
						{countries.map((country) => (
							<option key={country} value={country}>
								{country}
							</option>
						))}
					</select>
				</div>
				<div className="bupa-form-group">
					<label className="form-label" htmlFor="birthday">
						Birthday
					</label>
					<input
						className="form-input"
						type="date"
						id="birthday"
						value={user.birthday}
						onChange={(e)=> {setUser({...user,birthday:e.target.value})}}
					/>
				</div>
			</form>
			<div className="mt-10 flex flex-col align-middle">
					<label className={`text-red-700 ${check ? "hidden":""}`} >No empty fields!</label>
					<button onClick={handleRegister} className="flex justify-center">Register</button>
					</div>
		</div>
	);
}


export default Register;
