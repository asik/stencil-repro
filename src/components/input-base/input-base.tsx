import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'input-base',
  shadow: false,
})
export class InputBase {
  render() {
    return (
      <Fragment>
        <label>
          <slot name="label" />
        </label>
        <input-group>
          <slot name="suffix" slot="suffix" />
        </input-group>
        <slot name="message" />
      </Fragment>
    );
  }
}
