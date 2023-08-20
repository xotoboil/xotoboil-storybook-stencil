import {withDesign} from 'storybook-addon-designs'

export default {
  title: 'stories/atom/UiButton',
  tags: ['autodocs'],
  decorators: [withDesign],
  argTypes: {
    label: {
      control: 'text',
      description: 'the label of the button',
      type: {summary: 'string'},
      defaultValue: {summary: 'click me'},
    },
  },
  parameters: {
    cssprops: {
      'ui-button-color': {
        value: 'lightgray',
        control: 'color',
        description: 'the color of the page'
      }
    },
  },
};

const Template = (args) => `<ui-button>${args.label}</ui-button>`;

export const UiButton = Template.bind({});
