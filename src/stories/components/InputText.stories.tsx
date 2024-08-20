import { StoryObj, Meta } from '@storybook/react';
import InputText from '../../components/InputText/InputText';
import { InputTextSizes } from '../../sizes/inputText';

export default {
	title: 'Components/InputText',
	component: InputText,
	argTypes: {
		placeholder: { control: 'text' },
		color: { control: 'color' },
		size: {
			control: 'select',
			options: Object.keys(InputTextSizes)
		},
		borderColor: { control: 'color' },
		borderStyle: { control: 'text' },
		placeholderColor: { control: 'color' },
		focused: { control: 'boolean' },
		isOutline: { control: 'boolean' },
		display: { control: 'text' },
		isError: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		fontSize: { control: 'text' },
		fontFamily: { control: 'text' },
		backgroundColor: { control: 'color' },
		id: { control: 'text' },
		leftIcon: { control: 'text' },
		rightIcon: { control: 'text' },
		lastIcon: { control: 'text' },

	}
} as Meta<typeof InputText>;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
	args: {
		placeholder: 'Email',
	},
};

export const Disabled: Story = {
	args: {
		placeholder: 'Email',
		disabled: true,
	},
};

export const isError: Story = {
	args: {
		placeholder: 'Email',
		isError: true,
	},
};