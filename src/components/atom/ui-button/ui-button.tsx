import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton {

  @Prop() label: string;

  render() {
    return (
      <Host><p>{this.label}</p><button><slot></slot></button></Host>
    );
  }

}
