import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.scss',
  shadow: true,
})
export class MyButton {

  @Prop() sideLabel: string;

  render() {
    return (
      <Host>
        <p>{this.sideLabel}</p>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
