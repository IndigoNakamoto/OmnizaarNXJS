import React from "react"
import ReactMarkdown from "react-markdown"
import styled from 'styled-components';

const Article = (props) => {
    return (
        <>
			<StyleDiv>
				<StyleTitle>
					<H1 props={props.accent1}>{props.title}</H1>
					<p>{props.subtitle}</p>
				</StyleTitle>
				<ReactMarkdown children={props.content} />
			</StyleDiv>
			<Div />	
			
		</>
    )
}

export default Article

const Div = styled.div`
	position: fixed;
	background-color: #2B2A28;
	height: 100%;
	width: 100%;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: -1;
`
const StyleTitle = styled.div`
	line-height: .25rem;
	padding-bottom: 1rem;
`

//TODO: pass down props.accent1
const H1 = styled.h1`
	letter-spacing: .25rem;
	font-size: 2.5rem;
`

const StyleDiv = styled.div`
	position: absolute;
	max-width: 68em;
	top: 40vh;
	color: white;
	margin: 0 auto;
	padding: 0 1.5em;
	left: 0;
	right: 0;
`