import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import { useLocalStorage } from '@mantine/hooks';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Wrapper from "./layout/Wrapper";

export default function App() {

  let mock_user = {
    name:"John Smith",
    email:"john.smith@example.com",
    password:"password",
    phone:"01234567890",
    address:"1 Baker Street",
    city:"London",
    postcode:"SE1 123",
    country:"United Kingdom",
    birthday:"01/01/1980"
  }
  const [user, setUser] = useLocalStorage({ key: 'mock_user', defaultValue: mock_user });


	return (
		<Wrapper>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />

						<Route
							path="dashboard"
							element={<Dashboard />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Wrapper>
	);
}
