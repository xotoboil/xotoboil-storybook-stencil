import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-home',
  styleUrl: 'ui-home.scss',
  shadow: true,
})

export class UiHome {
  @Prop() first: string;
  @Prop() last: string;

  private getText(): string {
    return (this.first || '') + (this.last ? ` ${this.last}` : '');
  }

  render() {
    return <div class="ui-home">Hello, World! <span class="ui-home__label">{this.getText()}</span></div>;
  }
}
