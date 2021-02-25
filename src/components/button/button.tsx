import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'g-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  render() {
    return (
      <button class="button">
        <slot />
      </button>
    );
  }
}
