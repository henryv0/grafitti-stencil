import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'g-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Element() element: HTMLElement;
  
  @Prop() theme: 'primary' | 'secondary' | 'outlined' | 'naked';

  hasIconOnly() {
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
          'button-has-icon-only': this.hasIconOnly(),
        }}
      >
        <slot name="icon-only" />
        <slot />
      </button>
    );
  }
}
