import React from 'react';

const Button = (props) => {
    return <input type="button" value="add" onClick={props.add} />;
}

export default Button;