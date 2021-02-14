import styled from '@emotion/styled';
import { DefaultStyledComponentProps } from '../../types/DefaultStyledComponentProps.types';
import defaultTheme from '../../themes/default';
import { Colors } from '../../types/theme.type';

interface StyledColorProps extends DefaultStyledComponentProps {
	color: string;
}

interface ColorProps extends DefaultStyledComponentProps {
	color: Colors;
}

const ColorsPageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
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
`;

const ColorBox = styled.div<StyledColorProps>`
	background-color: ${({ color }) => color};
	height: 48px;
	width: 48px;
	border: 1px solid #0a0b0a;
`;

const Swatch = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 8px;
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
`;

const ColorVariant: React.FC<ColorProps> = ({ color }) => {
	return (
		<ColorRow>
			{Object.values(color).map((colorVariant, index) => (
				<Swatch>
					<ColorBox color={colorVariant} key={colorVariant} />
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
				<ColorSection>
					<ColorType>
						{Object.keys(defaultTheme.colors)[index]}
					</ColorType>
					<ColorVariant color={color} key={color.default} />
				</ColorSection>
			))}
		</ColorsPageContainer>
	);
};
export default ColorsPage;