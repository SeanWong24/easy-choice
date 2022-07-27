import { MatchResults } from '@stencil-community/router';
import { Component, Host, h, ComponentInterface, Prop, State } from '@stencil/core';
import { pickRandomValue } from '../../utils/random';

enum CoinSide {
  HEAD = 'head',
  TAIL = 'tail',
}

@Component({
  tag: 'app-coin',
  styleUrl: 'app-coin.css',
  shadow: true,
})
export class AppCoin implements ComponentInterface {
  @State() side?: CoinSide;

  @Prop() match: MatchResults;

  render() {
    return (
      <Host>
        <awesome-flex>
          <awesome-flex-item xs="auto">
            <awesome-button variant="clear" href="/" style={{ height: '3rem', width: '3rem', fontSize: '2rem', padding: '0' }}>
              {'<'}
            </awesome-button>
          </awesome-flex-item>
          <awesome-flex-item>
            <h1 style={{ margin: '.25rem 0', height: '3rem' }}>Toss A Coin</h1>
          </awesome-flex-item>
          <awesome-flex-item xs={12}>
            <awesome-divider style={{ margin: '0' }}></awesome-divider>
          </awesome-flex-item>
        </awesome-flex>
        <div style={{ padding: '.5rem' }}>
          <awesome-button onClick={() => this.toss()}>Toss</awesome-button>
          <br />
          You got a <awesome-badge style={{ '--awesome-ui-color-primary': 'hsl(120, 70%, 80%)' }}>{CoinSide[this.side] || 'Schrödinger’s Cat'}</awesome-badge>.
        </div>
      </Host>
    );
  }

  private toss() {
    this.side = pickRandomValue(Object.keys(CoinSide));
  }
}
