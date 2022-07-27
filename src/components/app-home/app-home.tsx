import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome implements ComponentInterface {
  private readonly items = [
    { label: 'Toss A Coin', url: '/pick/coin' },
    { label: 'Roll A Dice', url: '/pick/dice' },
  ];

  render() {
    return (
      <Host>
        <awesome-flex>
          <awesome-flex-item>
            <h1 style={{ margin: '.25rem 0', height: '3rem' }}>Easy Choice</h1>
          </awesome-flex-item>
          <awesome-flex-item xs={12}>
            <awesome-divider style={{ margin: '0' }}></awesome-divider>
          </awesome-flex-item>
        </awesome-flex>
        <div style={{ padding: '.5rem' }}>
          {this.items?.map(({ label, url }) => (
            <awesome-item button href={url}>
              {label}
            </awesome-item>
          ))}
        </div>
      </Host>
    );
  }
}
