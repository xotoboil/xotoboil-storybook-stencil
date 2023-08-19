import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'stories/organism/UiHome',
  tags: ['autodocs'],
  decorators: [withDesign],
  argTypes: {
		first: { defaultValue: 'Winnie', control: 'text' },
    middle: { defaultValue: 'The', control: 'text' },
    last: { defaultValue: 'Pooh', control: 'text' },
	},
  parameters: {
    cssprops: { "ui-home-color": { value: "lightgray", control: 'color', description: "The color of the page" } },
  },
};

const Template = (args) => `<ui-home first="${args.first}" middle="${args.middle}" last="${args.last}"></ui-home>`;

export const UiHome = Template.bind({});
