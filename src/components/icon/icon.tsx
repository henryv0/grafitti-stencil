import { Component, h } from '@stencil/core';

@Component({
  tag: 'g-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})

export class Button {
  render() {
    return (
      <span class="icon">
        <slot />
      </span>
    );
  }
}
