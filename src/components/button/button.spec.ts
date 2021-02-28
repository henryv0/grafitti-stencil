import { newSpecPage } from '@stencil/core/testing';

import { Button } from './button';

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<g-button>My button text</g-button>`,
  });

  expect(page.root).toEqualHtml(`
    <g-button>
      <mock:shadow-root>
        <button class="button">
          <slot name="icon-only"></slot>
          <slot name="icon-start"></slot>
          <slot></slot>
          <slot name="icon-end"></slot>
        </button>
      </mock:shadow-root>

      My button text
    </g-button>
  `);
});

it('should render my component without shadow DOM', async () => {
  const page = await newSpecPage({
    components: [Button],
    html: `<g-button>Testing</g-button>`,
    supportsShadowDom: false,
  });

  expect(page.root).toEqualHtml(`
    <g-button>
      <button class="button">
        Testing
      </button>
    </g-button>
  `);
});

it('should render button theme class correctly', async() => {
  const page = await newSpecPage({
    components: [Button],
    html: `<g-button theme="outlined">Testing</g-button>`,
  });

  expect(page.root.shadowRoot.querySelector('.button--outlined')).toBeTruthy();
});

it('should render button icon only class correctly', async() => {
  const page = await newSpecPage({
    components: [Button],
    html: `<g-button><i slot="icon-only" /></g-button>`,
  });

  expect(page.root.shadowRoot.querySelector('.button--icon-only')).toBeTruthy();

  expect(page.root).toEqualHtml(`
    <g-button>
      <mock:shadow-root>
        <button class="button button--icon-only">
          <slot name="icon-only"></slot>
          <slot name="icon-start"></slot>
          <slot></slot>
          <slot name="icon-end"></slot>
        </button>
      </mock:shadow-root>

      <i slot="icon-only" />
    </g-button>
  `);
});
