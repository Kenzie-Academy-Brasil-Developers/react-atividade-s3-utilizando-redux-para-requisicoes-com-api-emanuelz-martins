import styled from 'styled-components';

export const Card = styled.div`
	max-width: 400px;
	min-height: 450px;
	margin-top: 5em;
	margin-inline: auto;

	box-sizing: border-box;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	border: none;
	border-radius: 8px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	:hover {
		transform: scale(1.1, 1.1);
		transition: all 0.3s;

		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}
`;

export const List = styled.ul`
	list-style: none;
`;

export const Digimon = styled.li`
	text-align: center;
`;

export const Frame = styled.picture`
	box-sizing: border-box;
`;

export const Image = styled.img`
	width: 300px;
	height: 300px;
`;

export const DigimonName = styled.p`
	font-size: 36px;
	font-weight: 800;
`;

export const Level = styled.p`
	margin: 1em 0;
`;
