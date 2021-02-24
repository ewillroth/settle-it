import styled from '@emotion/styled';
import { DefaultStyledComponentProps } from '../../types/DefaultStyledComponentProps.types';
import defaultTheme from '../../themes/default';
import { Colors } from '../../themes/theme.type';

interface StyledColorProps extends DefaultStyledComponentProps {
	color: string;
}

interface ColorProps extends DefaultStyledComponentProps {
	color: Colors;
}

const ColorsPageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	width: 100%;
	background-color: #ccc;

	@media (max-width: 432px) {
		align-items: center;
		flex-direction: column;
	}
`;

const ColorSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 12px;
`;

const ColorRow = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ColorBox = styled.div<StyledColorProps>`
	background-color: ${({ color }) => color};
	height: 48px;
	width: 48px;

	@media (max-width: 432px) {
		height: 32px;
		width: 32px;
	}
`;

const Swatch = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 8px;

	@media (max-width: 432px) {
		margin: 2px;
	}
`;

const ColorName = styled.p<DefaultStyledComponentProps>`
	font-size: 12px;
	margin: 4px;
	font-family: ${({ theme }) => theme.fontFamily};
	text-transform: lowercase;
`;

const ColorType = styled.p<DefaultStyledComponentProps>`
	font-size: 16px;
	margin: 4px;
	text-transform: uppercase;
	font-weight: ${({ theme }) => theme.fontWeights.bold};
	font-family: ${({ theme }) => theme.fontFamily};

	@media (max-width: 432px) {
		font-size: 12px;
	}
`;

const ColorVariant: React.FC<ColorProps> = ({ color }) => {
	return (
		<ColorRow>
			{Object.values(color).map((colorVariant, index) => (
				<Swatch key={colorVariant}>
					<ColorBox color={colorVariant} />
					<ColorName>{Object.keys(color)[index]}</ColorName>
					<ColorName>{colorVariant}</ColorName>
				</Swatch>
			))}
		</ColorRow>
	);
};

const ColorsPage = () => {
	return (
		<ColorsPageContainer>
			{Object.values(defaultTheme.colors).map((color, index) => (
				<ColorSection key={color.default}>
					<ColorType>
						{Object.keys(defaultTheme.colors)[index]}
					</ColorType>
					<ColorVariant color={color} />
				</ColorSection>
			))}
		</ColorsPageContainer>
	);
};
export default ColorsPage;
