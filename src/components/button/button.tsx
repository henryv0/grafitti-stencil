import { Component, Prop, h, Element } from '@stencil/core';

/**
 * @tag g-button
 *
 * @slot - The button text.
 * @slot icon-start - For adding an icon to the left.
 * @slot icon-end - For adding an icon to the right.
 * @slot icon-only - Used when a button only contains an icon with no text.
 * 
 */

@Component({
  tag: 'g-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Element() element: HTMLElement;
  
  /**
   * The theme of the button.
   */
  @Prop() theme: 'primary' | 'secondary' | 'outlined' | 'naked';

  private hasIconOnly() {
    return Boolean(this.element.querySelector('[slot="icon-only"]'));
  }

  render() {
    return (
      <button 
        class={{
          'button': true,
          'button--primary': this.theme === 'primary',
          'button--secondary': this.theme === 'secondary',
          'button--outlined': this.theme === 'outlined',
          'button--naked': this.theme === 'naked',
          'button--icon-only': this.hasIconOnly(),
        }}
      >
        <slot name="icon-only" />
        <slot name="icon-start" />
        <slot />
        <slot name="icon-end" />
      </button>
    );
  }
}
