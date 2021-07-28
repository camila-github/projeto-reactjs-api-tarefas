import React from "react";

import "../Button/style.css";

const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="button">
			{children}
		</button>
	);
};

export default Button;
