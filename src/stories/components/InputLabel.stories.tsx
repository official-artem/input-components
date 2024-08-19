import { StoryObj, Meta } from '@storybook/react';
import InputLabel from '../../components/InputLabel/InputLabel';
import { InputLabelSizes } from '../../sizes/inputLabel';
import Icon from '../../assets/icon.svg';

export default {
	title: 'Components/InputLabel',
	component: InputLabel,
	argTypes: {
		title: { control: 'text' },
		htmlFor: { control: 'text' },
		padding: { control: 'text', },
		isError: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		marginLeft: { control: 'text' },
		fontSize: { control: 'text' },
		color: { control: 'color' },
		tooltipColor: { control: 'color' },
		tooltipBackground: { control: 'color' },
		icon: { control: 'text' },
		tooltipText: { control: 'text' },
		tooltipPosition: {
			control: 'select',
			options: ['top', 'bottom', 'left', 'right'],
		},
		size: {
			control: 'select',
			options: Object.keys(InputLabelSizes),
		}
	},
} as Meta<typeof InputLabel>;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
	args: {
		title: 'This is a default label',
		size: 'md',
		fontFamily: 'sans-serif',
	},
};

export const WithIcon: Story = {
	args: {
		title: 'This is a custom colored annotation',
		size: 'xl',
		icon: Icon,
	},
};
