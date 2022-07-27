import { Component, ComponentInterface, h } from '@stencil/core';
import '@awesome-elements/ui';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot implements ComponentInterface {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          <stencil-route url="/" component="app-home" exact={true} />
          <stencil-route url="/:type/coin" component="app-coin" />
          <stencil-route url="/:type/dice" component="app-dice" />
          <stencil-route url="/:type/custom" component="app-custom" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
