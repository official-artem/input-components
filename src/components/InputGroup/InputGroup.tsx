import { memo, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Measurement } from '../../types/props';
import { normalizeProperty } from '../../utils/normalizeProperty';

interface Props {
	children: ReactNode;
	margin?: Measurement;
	width?: Measurement;
	height?: Measurement;
	paddingLeft?: Measurement;
	marginLeft?: Measurement;
	paddingRight?: Measurement;
	marginRight?: Measurement;
	paddingBottom?: Measurement;
	marginBottom?: Measurement;
	paddingTop?: Measurement;
	marginTop?: Measurement;
	display?: CSSProperties['display'];
	gap?: Measurement;
	fontFamily?: CSSProperties['fontFamily'];
}

const InputGroupWrapper = styled.div<Props>`
	padding-left: ${({ paddingLeft }) => normalizeProperty(paddingLeft)};
	padding-right: ${({ paddingRight }) => normalizeProperty(paddingRight)};
	margin-left: ${({ marginLeft }) => normalizeProperty(marginLeft)};
	margin-right: ${({ marginRight }) => normalizeProperty(marginRight)};
	margin-bottom: ${({ marginBottom }) => normalizeProperty(marginBottom)};
	margin-top: ${({ marginTop }) => normalizeProperty(marginTop)};
	padding-top: ${({ paddingTop }) => normalizeProperty(paddingTop)};
	padding-bottom: ${({ paddingBottom }) => normalizeProperty(paddingBottom)};
	width: ${({ width }) => normalizeProperty(width) ?? '100%'};
	height: ${({ height }) => normalizeProperty(height) ?? 'auto'};
	display: ${({ display }) => display ?? 'block'};
	gap: ${({ gap }) => normalizeProperty(gap) ?? 0};
	font-family: ${({ fontFamily }) => fontFamily};
`;

export default memo(
	function InputGroup({children, ...props}: Props) {
		return (
			<InputGroupWrapper {...props}>
				{children}
			</InputGroupWrapper>
		);
	}
)