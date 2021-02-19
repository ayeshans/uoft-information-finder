import React from 'react';
import {
    Link,
    matchPath
} from "react-router-dom";
import './Button.css';

function Button(props) {

    let match = matchPath("/SearchPage/"+ props.label, {
        path: props.to,
        exact: false,
        strict: false
    });

    let isMatch = match ? "active" : ""
    let isHoverClass = props.hover ? "btn-hover" : "btn-normal"

    return (
        <Link to={props.to}>
            <div 
            className={[isMatch, isHoverClass].join(' ')}
            onMouseOver = {() => props.onMouseOver(props.label)} 
            onMouseOut = {() => props.onMouseLeave(props.label)} 
            style = {{ backgroundImage :`url(${props.image})` }}
            >
                {props.label}
            </div>
        </Link>
    );
}

export default Button;
