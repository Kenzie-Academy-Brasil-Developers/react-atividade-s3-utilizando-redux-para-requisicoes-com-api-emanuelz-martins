import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	width: 100vw;
	height: 120px;
`;

export const Title = styled.h2`
	font-family: Arial, Helvetica, sans-serif;
	text-transform: uppercase;
`;

export const Form = styled.div`
	display: flex;
	margin-top: 2em;
`;

export const TextField = styled.input`
	width: 25rem;
	margin-right: 1em;

	border: none;
	border-bottom: 1px solid lightgray;

	:focus {
		outline: none;
		border-bottom: 1px solid lightgreen;
	}

	:hover {
		border-bottom: 1px solid gray;
	}
`;

export const AddButton = styled.button`
	display: inline-block;

	box-sizing: border-box;
	background: #0e72ed;
	border-radius: 10px;
	border: none;

	color: #fff;
	font-size: 16px;
	text-align: center;

	margin-top: 12px;
	padding: 8px 40px;

	:hover {
		cursor: pointer;
		background: #2681f2;
	}

	:focus {
		outline: none;
	}
`;
