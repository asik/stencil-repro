import { Component, h } from '@stencil/core';

@Component({
  tag: 'text-input',
  styleUrl: 'text-input.css',
  shadow: true,
})
export class TextInput {
  render() {
    return (
      <div>
        <input-base>
          <slot name="label" slot="label" />
          <slot name="suffix" slot="suffix" />
          <slot name="message" slot="message" />
        </input-base>
      </div>
    );
  }
}
