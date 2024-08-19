import { StoryObj, Meta} from '@storybook/react';
import InputAnnotation from './InputAnnotation';
import { annotationSizeStyles } from '../../sizes/inputAnnotation';

	const meta: Meta<typeof InputAnnotation > = {
	component: InputAnnotation,
		title: 'InputAnnotation', // Define the category and name for the story
			argTypes: {
		size: {
			control: 'select',
			options: Object.keys(annotationSizeStyles),
    },
		isError: { control: 'boolean' },
		isDisabled: { control: 'boolean' },
		color: { control: 'color' },
	},
};

export default meta;

type Story = StoryObj<typeof InputAnnotation>;

export const Default: Story = {
	args: {
		text: 'This is a default annotation',
		size: 'md',
	},
};

export const ErrorState: Story = {
	args: {
		text: 'This is an error annotation',
		isError: true,
		size: 'md',
	},
};

export const DisabledState: Story = {
	args: {
		text: 'This annotation is disabled',
		isDisabled: true,
		size: 'md',
	},
};

export const CustomColor: Story = {
	args: {
		text: 'This is a custom colored annotation',
		color: '#1A73E8',
		size: 'md',
	},
};