import React, { useState, useEffect } from "react";

const Form = ({ getInfo, getColor }) => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		password: "",
	});
	const [color, setColor] = useState("#666");
	useEffect(() => {
		getColor(color);
	}, [color]);

	useEffect(() => {
		const randomNr = Math.floor(Math.random() * 4);
		const color = ["red", "green", "yellow", "blue"];
		setColor(color[randomNr]);
	}, [getInfo]);

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formData.firstName === "" ||
			formData.lastName === "" ||
			formData.email === "" ||
			formData.username === "" ||
			formData.password === ""
		) {
			return;
		}
		getInfo(formData);
		// getColor(color);
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			username: "",
			password: "",
		});
	};

	//STYLE
	let formStyle = {
		display: "flex",
		flexDirection: "column",
		width: "30vw",
		padding: "1rem",
		alignItems: "flex-start",
		marginBottom: "3rem",
		marginTop: "5rem",
		background: `linear-gradient(to bottom, ${color} 0%, #fff 100%)`,
		borderRadius: "5px",
	};
	let line = {
		width: "30vw",
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "3px",
	};
	let button = {
		backgroundColor: `${color}`,
		color: `${color === "yellow" ? "black" : "white"}`,
		border: `${color} 3px solid`,
		borderRadius: "5px",
		padding: "7px",
	};

	return (
		<form style={formStyle} onSubmit={handleSubmit}>
			<div style={line}>
				<label>First name: </label>
				<input
					onChange={handleChange}
					type="text"
					name="firstName"
					value={formData.firstName}
				/>
			</div>
			<div style={line}>
				<label>Last name: </label>
				<input
					onChange={handleChange}
					type="text"
					name="lastName"
					value={formData.lastName}
				/>
			</div>
			<div style={line}>
				<label>E-mail: </label>
				<input
					onChange={handleChange}
					type="email"
					name="email"
					value={formData.email}
				/>
			</div>
			<div style={line}>
				<label>Username: </label>
				<input
					onChange={handleChange}
					type="text"
					name="username"
					value={formData.username}
				/>
			</div>
			<div style={line}>
				<label>Password: </label>
				<input
					onChange={handleChange}
					type="password"
					name="password"
					value={formData.password}
				/>
			</div>
			<div style={{ marginTop: "1rem", alignSelf: "flex-end" }}>
				<button style={button}>Submit</button>
			</div>
		</form>
	);
};
export default Form;
