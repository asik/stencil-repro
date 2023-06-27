import { Component, h } from '@stencil/core';

@Component({
  tag: 'input-group',
  shadow: false,
})
export class InputGroup {
  render() {
    return (
      <div style={{ display: 'flex', gap: '13px' }}>
        <slot name="suffix" />
      </div>
    );
  }
}
