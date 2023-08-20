
export default {
  title: 'stories/atom/UiButton',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'the label of the button',
      type: { summary: 'string' },
      defaultValue: { summary: 'click me' },
    },
  },
  args: {
    label: 'click me'
  },
  parameters: {
    cssprops: {
      'ui-custom-button-color': {
        value: 'lightgray',
        control: 'color',
        description: 'the color of the page'
      }
    },
  },
};

const Template = (args) => `<ui-button>${args.label}</ui-button>`;

export const UiButton = Template.bind({});
