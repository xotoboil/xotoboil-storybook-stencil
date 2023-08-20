import { newE2EPage } from '@stencil/core/testing';

describe('ui-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-home></ui-home>');
    const element = await page.find('ui-home');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-home></ui-home>');
    const component = await page.find('ui-home');
    const element = await page.find('ui-home >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

  });
});
