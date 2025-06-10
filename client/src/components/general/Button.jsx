import React from "react";
import "./Button.css";

const Button = ({btnName, onClick})=>{
    return(
            <button
            className="globalBtn"
            type="submit"
            onClick={onClick}
            >
                {btnName}
            </button>
    );
}

export default Button;