import styled from '@emotion/styled';
import construction from '../../assets/under-construction.gif';
import { StyledComponentProps } from '../../types/DefaultStyledComponentProps.types';
import rem from '../../utils/rem/rem';

const Page = styled.section`
	width: 100%;
	margin-top: ${rem(48)};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const H1 = styled.h1<StyledComponentProps>`
	font-size: ${({ theme }) => theme.fontSizes.largest};
	margin-bottom: ${rem(16)};
`;
const H2 = styled.h2<StyledComponentProps>`
	font-size: ${({ theme }) => theme.fontSizes.largest};
	margin-bottom: ${rem(16)};
	color: ${({ theme }) => theme.colors.primary.default};
`;

const H3 = styled.h3<StyledComponentProps>`
	font-size: ${({ theme }) => theme.fontSizes.larger};
	margin-top: ${rem(16)};
`;

const Red = styled.span<StyledComponentProps>`
	color: ${({ theme }) => theme.colors.error.default};
`;
const Green = styled.span<StyledComponentProps>`
	color: ${({ theme }) => theme.colors.success.default};
`;

const ComingSoonPage = () => {
	return (
		<Page>
			<H1>Under Construction</H1>
			<H2>Settle</H2>
			<img src={construction} alt='under construction' />
			<H3>
				<span>Coming </span>
				<Red>C</Red>
				<Green>h</Green>
				<Red>r</Red>
				<Green>i</Green>
				<Red>s</Red>
				<Green>t</Green>
				<Red>m</Red>
				<Green>a</Green>
				<Red>s </Red>
				<Green>2</Green>
				<Red>0</Red>
				<Green>0</Green>
				<Red>2</Red>
				<Green>!</Green>
			</H3>
		</Page>
	);
};

export default ComingSoonPage;
