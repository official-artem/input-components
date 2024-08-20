import { memo } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Measurement } from '../../types/props';
import { annotationSizeStyles, InputAnnotationSizeProps } from '../../sizes/inputAnnotation';
import { inputAnnotationStylesDisabled, inputAnnotationStylesError } from '../../stylesMap/inputAnnotation'; 
import { InputTextSizeProps } from '../../sizes/inputText';

const DEFAULT_SIZE: InputTextSizeProps = 'lg';

interface Props {
	text: string;
	width?: CSSProperties['width'];
	color?: CSSProperties['color'];
	isError?: boolean;
	isDisabled?: boolean;
	fontFamily?: CSSProperties['fontFamily'];
	fontSize?: Measurement;
	size?: InputAnnotationSizeProps;
}


const InputAnnotationWrapper = styled.div`
	margin: 0;
	padding: 0;
`;
	
const InputAnnotationText = styled.p<Props>`
	margin: 0;
	font-family: ${({ fontFamily }) => fontFamily ?? 'sans-serif'};
	padding: ${({ size }) => annotationSizeStyles[size ?? DEFAULT_SIZE].padding};
	font-size: ${({ size }) => annotationSizeStyles[size ?? DEFAULT_SIZE].fontSize};
		color: ${({ color, isError, isDisabled }) => {
			if (isDisabled)	{
				return 'gray';
			}

			if (isError) {
				return '#D92D20';
			}

			return color ?? 'black';
		}};
	${({ isError }) => isError && inputAnnotationStylesError}
	${({ isDisabled }) => isDisabled && inputAnnotationStylesDisabled}
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