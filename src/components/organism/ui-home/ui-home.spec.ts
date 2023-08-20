import { newSpecPage } from '@stencil/core/testing';
import { UiHome } from './ui-home';

describe('ui-home', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({ components: [UiHome], html: '<ui-home></ui-home>', });
    expect(root).toEqualHtml(`
      <ui-home>
        <mock:shadow-root>
          <div class="ui-home">
            Hello, World! I'm
            <span class="ui-home__label"></span>
          </div>
        </mock:shadow-root>
      </ui-home>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({ components: [UiHome], html: `<ui-home first="Stencil" last="'frameworkless'"></ui-home>`, });
    expect(root).toEqualHtml(`
      <ui-home first="Stencil" last="'frameworkless'">
        <mock:shadow-root>
          <div class="ui-home">
            Hello, World! I'm
            <span class="ui-home__label">
              Stencil 'frameworkless'
            </span>
          </div>
        </mock:shadow-root>
      </ui-home>
    `);
  });
});
