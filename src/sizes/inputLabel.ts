export const labelSizeStyles = {
	sm: {
		fontSize: '12px',
		padding: '2px 0',
		iconSize: '12px',
	},
	md: {
		fontSize: '14px',
		padding: '4px 0',
		iconSize: '14px',
	},
	lg: {
		fontSize: '16px',
		padding: '6px 0',
		iconSize: '16px',
	},
	xl: {
		fontSize: '18px',
		padding: '8px 0',
		iconSize: '18px',
	},
};

export const InputLabelSizes = {
	sm: 'small',
	md: 'medium',
	lg: 'large',
	xl: 'extra-large',
} as const;

export type InputLabelSizeProps = keyof typeof InputLabelSizes;
