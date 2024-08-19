import { memo } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { Measurement } from '../../types/props';
import { InputLabelSizeProps, labelSizeStyles } from '../../sizes/inputLabel';

const tooltipPositionStyles: any = {
	top: {
		bottom: '150%',
		left: '50%',
		'margin-left': '-60px',
	},
	bottom: {
		top: '150%',
		left: '50%',
		'margin-left': '-60px',
	},
	left: {
		top: '50%',
		transform: 'translateY(-50%);',
		right: '105%',
	},
	right: {
		top: '50%',
		transform: 'translateY(-50%);',
		left: '140%',
	}
}

const tooltipArrowStyles: any = {
	top: {
		top: '100%',
		left: '50%',
		'margin-left': '-5px',
		'border-width': '5px',
		'border-style': 'solid',
		'border-color': 'black transparent transparent transparent',
	},
	bottom: {
		bottom: '100%',
		left: '50%',
		'margin-left': '-5px',
		'border-width': '5px',
		'border-style': 'solid',
		'border-color': 'transparent transparent black transparent',
	},
	right: {
		top: '50%',
		right: '100%',
		'margin-top': '-5px',
		'border-width': '5px',
		'border-style': 'solid',
		'border-color': 'transparent black transparent transparent',
	},
	left: {
		top: '50%',
		left: '100%',
		'margin-top': '-5px',
		'border-width': '5px',
		'border-style': 'solid',
		'border-color': 'transparent transparent transparent black',
	}
}

interface Props {
	title: string;
	icon?: string;
	htmlFor: string;
	padding?: Measurement;
	margin?: Measurement;
	width?: Measurement;
	height?: Measurement;
	marginLeft?: Measurement;
	isError?: boolean;
	fontSize?: Measurement;
	fontFamily?: CSSProperties['fontFamily'];
	size?: InputLabelSizeProps;
	tooltipText?: string;
	tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
	tooltipColor?: CSSProperties['color'];
	tooltipBackground?: CSSProperties['backgroundColor'];
}

const InputLabelItem = styled.label``;

const InputLabelWrapper = styled.div<Omit<Props, 'title' | 'htmlFor'>>`
	display: flex;
	font-family: ${({ fontFamily }) => fontFamily ?? 'sans-serif'};
	font-size: ${({ size }) => labelSizeStyles[size ?? 'md'].fontSize};
	padding: ${({ size }) => labelSizeStyles[size ?? 'md'].padding};
	align-items: center;
	width: ${({ width }) => width ?? '100%'};
	flex-wrap: wrap;
	word-break: break-word;
	font-family: ${({ fontFamily }) => fontFamily};
`

const Image = styled.img<Omit<Props, 'title' | 'htmlFor'>>`
  -webkit-user-drag: none;
  pointer-events: none;
	width: ${({ size }) => labelSizeStyles[size ?? 'md'].iconSize};
	height: ${({ size }) => labelSizeStyles[size ?? 'md'].iconSize};
	margin-left: ${({ marginLeft }) => marginLeft ?? '0.5rem'};
	object-fit: contain;

	&:hover + * {
    ${({ tooltipText }) => tooltipText && 'visibility: visible;'}
  }
`;

const ImageWrapper = styled.div`
	margin: 0;
	padding: 0;
	position: relative;
`;

const Tooltip = styled.span<Omit<Props, 'title' | 'htmlFor'>>`
	visibility: hidden;
  background-color: ${({ tooltipBackground }) => tooltipBackground ?? 'black'};;
  color: ${({ tooltipColor }) => tooltipColor ?? 'white'};
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
	width: 120px;
  ${({ tooltipPosition }) => tooltipPositionStyles[tooltipPosition ?? 'right']};

	&::after {
		content: "";
		position: absolute;
		${({ tooltipPosition }) => tooltipArrowStyles[tooltipPosition ?? 'right']};
	}
`;

export default memo(
	function InputLabel({ htmlFor, title, ...props }: Props) {
		return (
			<InputLabelWrapper {...props}>
				<InputLabelItem
					htmlFor={htmlFor}
					{...props} 
				>
					{title}
				</InputLabelItem>
				<ImageWrapper>
					{props.icon && <Image src={props.icon} {...props} />}
					<Tooltip {...props}>{props.tooltipText}</Tooltip>
				</ImageWrapper>
			</InputLabelWrapper>
		);
	}
);