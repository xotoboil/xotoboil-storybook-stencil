import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'stories/atom/UiButton',
  tags: ['autodocs'],
  decorators: [withDesign],
  argTypes: {
		first: { defaultValue: 'Winnie', control: 'text' },
    middle: { defaultValue: 'The', control: 'text' },
    last: { defaultValue: 'Pooh', control: 'text' },
	},
  parameters: {
    cssprops: { "ui-button-color": { value: "lightgray", control: 'color', description: "The color of the page" } },
  },
};

const Template = (args) => `<ui-button first="${args.first}" middle="${args.middle}" last="${args.last}"></ui-button>`;

export const UiButton = Template.bind({});
