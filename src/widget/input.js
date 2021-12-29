import React from 'react';
const Input = ({  onChange, className, ...props }) => {


	const update  = ( event) => {
		if (typeof onChange === "function") {
			onChange(event);
		}
	}

	return (
		<input {...props} type="text" className={'input ' + className} onChange={(e) => update(e)} />
	);
};

export default Input;