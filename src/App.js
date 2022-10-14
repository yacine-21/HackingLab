import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinalStep from "./components/FinalStep";
import Main from "./components/Main";
import SecondStep from "./components/SecondStep";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='secondStep' element={<SecondStep />} />
				<Route path='finalStep' element={<FinalStep />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
