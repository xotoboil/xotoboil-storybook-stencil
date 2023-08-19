import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-home',
  styleUrl: 'ui-home.scss',
  shadow: true,
})

export class UiHome {
  @Prop() first: string;
  @Prop() middle: string;
  @Prop() last: string;

  private getText(): string {
    return (this.first || '') + (this.middle ? ` ${this.middle}` : '') + (this.last ? ` ${this.last}` : '');
  }

  render() {
    return <div class="ui-home">Hello, World! I'm <span class="ui-home__label">{this.getText()}</span></div>;
  }
}
