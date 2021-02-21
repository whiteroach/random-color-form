import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
	const [form, setForm] = useState({
		fields: [],
	});
	const [myColor, setMyColor] = useState("");

	const getInfo = (f) => {
		setForm({
			fields: [...form.fields, f],
		});
	};

	const getColor = (f) => {
		setMyColor(f);
	};

	return (
		<div
			className="App"
			style={{
				display: "flex",
				color: `${myColor === "yellow" ? "black" : "white"}`,
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				// background: ` linear-gradient(to top, ${myColor} 0%, #fff 100%) `,
				background: ` ${myColor} `,
				height: "100vh",
			}}
		>
			<Form getInfo={(f) => getInfo(f)} getColor={(f) => getColor(f)} />
			<div style={{ width: "60vw" }}>
				{JSON.stringify(form.fields, null, 0)}
			</div>
		</div>
	);
}

export default App;
