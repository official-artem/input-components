import { CSSProperties, memo } from 'react';
import styled from 'styled-components';
import { inputSizeStyles, InputTextSizeProps } from '../../sizes/inputText';
import { TextPositionType } from '../../types/inputText';
import { Measurement } from '../../types/props';
import { normalizeProperty } from '../../utils/normalizeProperty';

interface InputTextProps {
	textPosition?: TextPositionType;
	height?: Measurement;
	color?: CSSProperties['color'];
	placeholderColor?: CSSProperties['color'];
	borderWidth?: Measurement;
	isBorder?: boolean;
	borderColor?: CSSProperties['borderColor'];
	borderStyle?: CSSProperties['borderStyle'];
	placeholder?: string
	padding?: Measurement;
	margin?: Measurement;
	borderRadius?: Measurement;
	isError?: boolean;
	focused?: boolean;
	isDisabled?: boolean;
	error?: boolean;
	fontSize?: Measurement;
	outlineColor?: CSSProperties['outlineColor'];
	outlineWidth?: Measurement;
	isOutline?: boolean;
	display?: CSSProperties['display'];
	leftIcon?: string;
	iconWidth?: Measurement;
	iconHeight?: Measurement;
	rightIcon?: string;
	lastIcon?: string;
	backgroundColor?: CSSProperties['backgroundColor'];
	fontFamily?: CSSProperties['fontFamily'];
	size?: InputTextSizeProps;
	id: string;
}

const StyledInputText = styled.input<InputTextProps>`
	box-sizing: border-box;
	border: none;
	width: 100%;
	font-family: ${({ fontFamily }) => fontFamily};
	font-size: ${({ size }) => inputSizeStyles[size ?? 'md'].fontSize};
	background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
	border-radius: ${({ size }) => inputSizeStyles[size ?? 'md'].borderRadius};
	padding: ${({ size }) => inputSizeStyles[size ?? 'md'].padding};
	${({ isDisabled }) => isDisabled && 'cursor: not-allowed;'}
	padding-left: ${({ leftIcon: icon, size }) => {
		if (!icon) {
			return;
		}

		return `calc(${inputSizeStyles[size ?? 'md'].iconSize} + .75rem)`;
	}};

	padding-right: ${({ rightIcon, lastIcon, size }) => {
		const iconCount = [rightIcon, lastIcon].filter(Boolean).length;
	return `calc(${inputSizeStyles[size ?? 'md'].iconSize} + ${iconCount} * 1.25rem)`;
	}};

	text-align: ${({ textPosition }) => textPosition ?? 'left'};
	display: ${({ display }) => display ?? 'block'};

	&:focus {
		outline-color: ${({ outlineColor, isError }) => {
			if (isError) {
				return 'error';
			}

			return outlineColor ?? 'black';
		}};
		outline-width: ${({ outlineWidth }) => outlineWidth ?? '4px'};
		outline-style: solid;
		outline-color: ${({ outlineColor, isError }) => {
			if (isError) {
				return '#FDA29B'
			}

			return outlineColor ?? '#84CAFF'
		}};
		outline-offset: ${({ borderWidth }) => borderWidth ?? '1px'};
	};

	&::placeholder {
		color: ${({ placeholderColor, isDisabled }) => {
			if (isDisabled) {
				return 'gray';
			}

			return placeholderColor ?? 'gray';
		}};
	}
`;


const InputTextWrapper = styled.div<InputTextProps>`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	opacity: ${({ isDisabled }) => {
		if (isDisabled) {
			return 0.5;
		}
	}};
	width: ${({ size }) => inputSizeStyles[size ?? 'md'].width};
	position: relative;
	border-radius: ${({ size }) => inputSizeStyles[size ?? 'md'].borderRadius};
	margin: ${({ margin }) => normalizeProperty(margin)};
	border-style: ${({ borderStyle}) => borderStyle ?? 'solid'};
	border-width: ${({ borderWidth }) => borderWidth ?? '1px'};
	border-color: ${({ borderColor, isError, isDisabled }) => {
		if (isDisabled) {
			return 'gray';
		}

		if (isError) {
			return '#F044383D';
		}

		return borderColor ?? '#2E90FA3D';
	}};
`

const LeftIcon = styled.img<InputTextProps>`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({ size }) => inputSizeStyles[size ?? 'md'].iconSize};
	height: ${({ size }) => inputSizeStyles[size ?? 'md'].iconSize};
	position: absolute;
	left: 0.3rem;
	top: 50%;
	transform: translateY(-50%);
`;

const RightIcon = styled.img<InputTextProps>`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({ size }) => inputSizeStyles[size ?? 'md'].iconSize};
	height: ${({ size }) => inputSizeStyles[size ?? 'md'].iconSize};
	position: absolute;
	right: ${({ size, lastIcon }) => {
	const iconCount = lastIcon ? 1 : 0;
	return `calc(${inputSizeStyles[size ?? 'md'].iconSize} * ${iconCount} + 1rem)`;
		}};
	top: 50%;
	transform: translateY(-50%);`

const LastIcon = styled.img<InputTextProps>`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({ size }) => inputSizeStyles[size ?? 'md'].iconSize};
	height: ${({ size }) => inputSizeStyles[size ?? 'md'].iconSize};
	position: absolute;
	right: 0.5rem;
	top: 50%;
	transform: translateY(-50%);
`;

export default memo(
	function InputText(props: InputTextProps) {
		return (
			<InputTextWrapper {...props}>
				{props.leftIcon && (
					<LeftIcon {...props} src={props.leftIcon} />
				)}
				<StyledInputText disabled={props.isDisabled} {...props} />
				{props.rightIcon && (
					<RightIcon {...props} src={props.rightIcon} />
				)}
				{props.lastIcon && (
					<LastIcon {...props} src={props.lastIcon} />
				)}
			</InputTextWrapper>
		)
	}
);