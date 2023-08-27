export default {
  title: 'stories/organism/UiHome',
  tags: ['autodocs'],
  argTypes: {
    first: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Foo' },
      control: 'text'
    },
    last: {
      type: { summary: 'string' },
      defaultValue: { summary: ' Bar' },
      control: 'text'
    },
  },
  args: {
    first: "Foo",
    last: "Bar"
  },
  parameters: {
    cssprops: {
      'ui-home-custom-color': {
        value: 'rgb(0, 128, 255)',
        control: 'color',
        description: 'The color of the page'
      }
    },
  },
};

const Template = (args) => `<ui-home first="${args.first}" last="${args.last}">
<ui-button></ui-button>

</ui-home>`;
export const UiHome = Template.bind({});
