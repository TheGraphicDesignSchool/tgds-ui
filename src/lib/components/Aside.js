import styled from "styled-components";
import {CBox} from "../layouts/containers";
import Button from "./Button";
import React, {useState} from "react";

import vars from '../vars'

const AsideStyle = styled(CBox)`
	test: 'Aside';
	position: relative;	
  	transition: all ease-out .3s;
  	
 	flex: 0 0 ${props => props.theme.asideWidth ? props.theme.asideWidth : vars.aside.width};

  	padding: ${vars.icon.size} 0 0 ${vars.icon.size};
  	
  	${props => props.isHidden ? (
		props.position === 'left' ?
			`margin-left: calc(${vars.icon.size} - ${props.theme.asideWidth ? props.theme.asideWidth : vars.aside.width});` :
			`margin-right: calc(${vars.icon.size} - ${props.theme.asideWidth ? props.theme.asideWidth : vars.aside.width});` 
	):(
		props.position === 'left' ?
			`margin-left: 0;` :
			`margin-right: 0;`
	)}
  	
  	&:before {
  		content: ' ';
  		position: absolute; top: 0; bottom: 0; width: ${vars.icon.size};
  		background: rgba(0,0,0,.05);
  		
		${props => props.position === 'left' ?
			`right: 0;` :
			`left: 0;`
  	}
`


const AsideButton = styled(Button)`

	position: absolute;
	top: 0;
	
	text-align: center;
	color: white;
	
	width: ${vars.icon.size};
	height: ${vars.icon.size};
	
	background: rgba(0,0,0,.05);
	
	${props => props.position === 'left' ?
		`left: calc(100% - ${vars.icon.size});` :
		`right: calc(100% - ${vars.icon.size});`
	}
`

export default props => {

	const [hidden, setHidden] = useState(props.theme.asideHidden || false)
	const toggleHidden = () => { setHidden(!hidden) }

	return (
		<AsideStyle isHidden={hidden} {...props} >
			<AsideButton
				{...props}
				onClick={toggleHidden}>{hidden ? 'S' : 'H'}
			</AsideButton>
			{props.children}
		</AsideStyle>
	)
}

