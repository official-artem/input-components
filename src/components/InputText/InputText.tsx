import { memo } from 'react';
import styled from 'styled-components';
import { inputSizeStyles, InputTextSizeProps } from '../../sizes/inputText';
import { InputTextProps } from '../../types/inputText';
import { inputTextStylesDisabled, inputTextStylesError } from '../../stylesMap/inputText';

const DEFAULT_SIZE: InputTextSizeProps = 'lg';

const StyledInputText = styled.input<InputTextProps>`
	box-sizing: border-box;
	border: none;
	width: 100%;
	font-family: ${({ fontFamily }) => fontFamily};
	font-size: ${({ size }) => inputSizeStyles[size ?? 'md'].fontSize};
	background-color: ${({ backgroundColor }) => backgroundColor ?? 'white'};
	border-radius: ${({ size }) => inputSizeStyles[size ?? 'md'].borderRadius};
	padding: ${({ size }) => inputSizeStyles[size ?? 'md'].padding};
	${({ disabled }) => disabled && 'cursor: not-allowed;'}
	padding-left: ${({ leftIcon: icon, size }) => {
		if (!icon) {
			return;
		}

		return `calc(${inputSizeStyles[size ?? 'md'].iconSize} + .75rem)`;
	}};

	padding-right: ${({ rightIcon, lastIcon, size }) => {
		const iconCount = [rightIcon, lastIcon].filter(Boolean).length;
	return `calc(${inputSizeStyles[size ?? DEFAULT_SIZE].iconSize} + ${iconCount} * 1.25rem)`;
	}};

	text-align: ${({ textPosition }) => textPosition ?? 'left'};
	display: ${({ display }) => display ?? 'block'};

	&:focus {
		outline-color: ${({ outlineColor }) => outlineColor ?? 'black'};
		outline-width: ${({ outlineWidth }) => outlineWidth ?? '4px'};
		outline-style: solid;
		outline-color: ${({ outlineColor }) => outlineColor ?? '#84CAFF'};
		outline-offset: ${({ borderWidth }) => borderWidth ?? '1px'};
		${({ isError }) => isError && inputTextStylesError }
	};

	&::placeholder {
		color: ${({ placeholderColor }) => placeholderColor ?? 'gray' };
	}
`;


const InputTextWrapper = styled.div<InputTextProps>`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	width: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].width};
	position: relative;
	border-radius: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].borderRadius};
	border-style: ${({ borderStyle}) => borderStyle ?? 'solid'};
	border-width: ${({ borderWidth }) => borderWidth ?? '1px'};
	border-color: ${({ borderColor }) => borderColor ?? '#2E90FA3D'};

	${({ isError }) => isError && inputTextStylesError }
	${({ disabled }) => disabled && inputTextStylesDisabled}
`

const LeftIcon = styled.img<InputTextProps>`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].iconSize};
	height: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].iconSize};
	position: absolute;
	left: 0.3rem;
	top: 50%;
	transform: translateY(-50%);
`;

const RightIcon = styled.img<InputTextProps>`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].iconSize};
	height: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].iconSize};
	position: absolute;
	right: ${({ size, lastIcon }) => {
	const iconCount = lastIcon ? 1 : 0;
	return `calc(${inputSizeStyles[size ?? DEFAULT_SIZE].iconSize} * ${iconCount} + 1rem)`;
		}};
	top: 50%;
	transform: translateY(-50%);`

const LastIcon = styled.img<InputTextProps>`
  -webkit-user-drag: none;
  pointer-events: none;
	box-sizing: border-box;
	width: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].iconSize};
	height: ${({ size }) => inputSizeStyles[size ?? DEFAULT_SIZE].iconSize};
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
				<StyledInputText disabled={props.disabled} {...props} />
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