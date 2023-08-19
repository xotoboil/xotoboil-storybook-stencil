import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {

  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
