import { Component, Prop, h, Event, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton {
  @Event() click: EventEmitter;
  @Prop() label: string;

  handleClick(event: UIEvent) {
    this.click.emit(event);
  }

  render() {
    return (
      <Host><button onClick={this.handleClick.bind(this)}><slot></slot></button></Host>
    );
  }

}
