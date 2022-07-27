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
  @State() side = CoinSide.HEAD;

  @State() ready = false;

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
          <div
            id="coin"
            style={{
              height: '5rem',
              width: '5rem',
              borderRadius: '50%',
              boxShadow: `0 5px 10px 0 ${this.ready ? 'var(--awesome-ui-color-primary)' : 'var(--awesome-ui-color-dim)'}`,
            }}
          >
            <awesome-grid rows="1fr auto 1fr" columns="1fr auto 1fr">
              <awesome-grid-item row={2} column={2} style={{ fontSize: '2rem' }}>
                {CoinSide[this.side]}
              </awesome-grid-item>
            </awesome-grid>
          </div>
        </div>
      </Host>
    );
  }

  private toss() {
    let count = 0;
    this.ready = false;
    const timer = setInterval(() => {
      this.side = pickRandomValue(Object.keys(CoinSide));
      count++;
      if (count >= 50) {
        clearInterval(timer);
        this.ready = true;
      }
    }, 50);
  }
}
