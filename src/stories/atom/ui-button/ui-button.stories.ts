import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'stories/atom/UiButton',
  tags: ['autodocs'],
  decorators: [withDesign],
  argTypes: {
    label: { control: 'text' },
    slotText: { control: 'text' },
  },
  parameters: {
    cssprops: { "ui-button-color": { value: "lightgray", control: 'color', description: "The color of the page" } },
  },
};

const Template = (args) => `<ui-button label="${args.label}">${args.slotText}</ui-button>`;

export const UiButton = Template.bind({});
