import { useSelector } from 'react-redux';
import { Card, Digimon, DigimonName, Frame, Image, Level, List } from './style';

const Digimons = () => {
	const { digimons } = useSelector((state) => state);

	return (
		<Card>
			<List>
				{digimons.map(({ name, img, level }, index) => (
					<Digimon key={index}>
						<Frame>
							<Image src={img} alt={name} />
						</Frame>
						<DigimonName>{name}</DigimonName>
						<Level>{level}</Level>
					</Digimon>
				))}
			</List>
		</Card>
	);
};

export default Digimons;
