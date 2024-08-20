import { CSSProperties } from 'styled-components';
import { Measurement } from './props';
import { ComponentProps } from 'react';
import { InputTextSizeProps } from '../sizes/inputText';

export type TextPositionType = 'left' | 'right';

export type InputTextState = 'focused' | 'error' | 'disabled' | 'default';

type DefaultInputProps = Omit<ComponentProps<'input'>, 'id' | 'size'>;

export interface InputTextProps extends DefaultInputProps {
	textPosition?: TextPositionType;
	color?: CSSProperties['color'];
	placeholderColor?: CSSProperties['color'];
	borderWidth?: Measurement;
	isBorder?: boolean;
	borderColor?: CSSProperties['borderColor'];
	borderStyle?: CSSProperties['borderStyle'];
	placeholder?: string;
	borderRadius?: Measurement;
	isError?: boolean;
	fontSize?: Measurement;
	outlineColor?: CSSProperties['outlineColor'];
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
