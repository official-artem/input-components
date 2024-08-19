import { memo } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Measurement } from '../../types/props';
import { annotationSizeStyles, InputAnnotationSizeProps } from '../../sizes/inputAnnotation';

interface Props {
	text: string;
	width?: CSSProperties['width'];
	margin?: CSSProperties['margin'];
	color?: CSSProperties['color'];
	isError?: boolean;
	isDisabled?: boolean;
	fontSize?: Measurement;
	size?: InputAnnotationSizeProps;
}


const InputAnnotationWrapper = styled.div`
	margin: 0;
	padding: 0;
`;
	
const InputAnnotationText = styled.p<Props>`
margin: 0;
padding: ${({ size }) => annotationSizeStyles[size ?? 'md'].padding};
font-size: ${({ size }) => annotationSizeStyles[size ?? 'md'].fontSize};
	color: ${({ color, isError, isDisabled }) => {
		if (isDisabled)	{
			return 'gray';
		}

		if (isError) {
			return '#D92D20';
		}

		return color ?? 'black';
	}};
	opacity: ${({ isDisabled }) => {
		if (isDisabled) {
			return 0.7;
		}
	}};
`;

export default memo(
	function InputAnnotation(props: Props) {
		return (
			<InputAnnotationWrapper {...props}>
				<InputAnnotationText {...props}>{props.text}</InputAnnotationText>
			</InputAnnotationWrapper>
		);
	}
)