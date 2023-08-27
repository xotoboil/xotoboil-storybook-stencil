import { h } from 'jsx-dom';
import { action } from '@storybook/addon-actions';

export default {
  title: 'stories/atom/UiButton',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'the label of the button',
      type: { summary: 'string' },
      defaultValue: { summary: 'click me' },
    }
  },
  args: {
    label: 'click',
    hover:'hover'
  },
  parameters: {
    cssprops: {
      'ui-custom-button-color': {
        value: 'red',
        control: 'color',
        description: 'the color of the page'
      }
    },
  },
};

const Template = (args) => (
  <ui-button onClick={() => {
    console.log("Click Action run");
    action('button-click')(args.label);
  }}

  onMouseOver={() => {
    console.log("Hover action run");
    action('button-hover')(args.hover);
  }}>

    {args.label}
  </ui-button>
);

export const UiButton = Template.bind({});
