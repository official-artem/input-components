import { StoryObj, Meta } from '@storybook/react';
import InputText from '../../../components/InputText/InputText';
import { InputTextSizes } from '../../../sizes/inputText';

export default {
	title: 'Components/InputText/Icons',
	component: InputText,
	argTypes: {
		placeholder: { control: 'text' },
		color: { control: 'color' },
		size: {
			control: 'select',
			options: Object.keys(InputTextSizes)
		},
		focused: { control: 'boolean' },
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

export const LeftIcon: Story = {
	args: {
		placeholder: 'Email',
		leftIcon: 'https://www.svgrepo.com/show/390687/find-magnifier-search-zoom-look.svg',
	},
};

export const RightIcon: Story = {
	args: {
		placeholder: 'Email',
		rightIcon: 'https://www.svgrepo.com/show/524853/question-circle.svg',
	},
};

export const LeftAndRightIcons: Story = {
	args: {
		placeholder: 'Email',
		leftIcon: 'https://www.svgrepo.com/show/390687/find-magnifier-search-zoom-look.svg',
		rightIcon: 'https://www.svgrepo.com/show/524853/question-circle.svg',
	},
};

export const ThreeIcons: Story = {
	args: {
		placeholder: 'Email',
		leftIcon: 'https://www.svgrepo.com/show/390687/find-magnifier-search-zoom-look.svg',
		size: 'lg',
		rightIcon: 'https://www.svgrepo.com/show/524853/question-circle.svg',
		lastIcon: 'https://www.svgrepo.com/show/533683/enter.svg'
	},
};