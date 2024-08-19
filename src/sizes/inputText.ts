export const inputSizeStyles = {
	sm: {
		fontSize: '12px',
		padding: '8px 12px',
		borderRadius: '4px',
		iconSize: '12px',
		width: '100px',
	},
	md: {
		fontSize: '14px',
		padding: '10px 14px',
		borderRadius: '6px',
		iconSize: '16px',
		width: '150px',
	},
	lg: {
		fontSize: '16px',
		padding: '12px 16px',
		borderRadius: '8px',
		iconSize: '20px',
		width: '200px',
	},
	xl: {
		fontSize: '18px',
		padding: '14px 18px',
		borderRadius: '10px',
		iconSize: '24px',
		width: '250px',
	},
};

export const InputTextSizes = {
	sm: 'small',
	md: 'medium',
	lg: 'large',
	xl: 'extra-large',
} as const;

export type InputTextSizeProps = keyof typeof InputTextSizes;
