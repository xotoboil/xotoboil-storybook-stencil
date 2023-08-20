import { withDesign } from 'storybook-addon-designs'
export default {
  title: 'stories/organism/UiHome',
  tags: ['autodocs'],
  decorators: [withDesign],
  argTypes: {
    first: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Winnie' },
      control: 'text'
    },
    middle: {
      type: { summary: 'string' },
      defaultValue: { summary: ' The' },
      control: 'text'
    },
    last: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Pooh' },
      control: 'text'
    },
  },
  args: {
    first: "Winnie",
    middle: " The",
    last: "Pooh"
  },
  parameters: {
    cssprops: {
      'ui-home-custom-color': {
        value: 'lightgray',
        control: 'color',
        description: 'The color of the page'
      }
    },
  },
};

const Template = (args) => `<ui-home first="${args.first}" middle="${args.middle}" last="${args.last}"></ui-home>`;
export const UiHome = Template.bind({});
