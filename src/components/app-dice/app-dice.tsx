import { MatchResults } from '@stencil-community/router';
import { Component, Host, h, ComponentInterface, Prop, State } from '@stencil/core';
import { pickRandomValue } from '../../utils/random';

@Component({
  tag: 'app-dice',
  styleUrl: 'app-dice.css',
  shadow: true,
})
export class AppDice implements ComponentInterface {
  @State() side: number;

  @State() ready = false;

  @Prop() match: MatchResults;

  render() {
    return (
      <Host>
        <awesome-flex>
          <awesome-flex-item xs="auto" style={{ height: '3rem', width: '3rem', padding: '.25rem' }}>
            <awesome-back-button href="/"></awesome-back-button>
          </awesome-flex-item>
          <awesome-flex-item>
            <h1 style={{ margin: '.25rem 0', height: '3rem' }}>Roll A Dice</h1>
          </awesome-flex-item>
          <awesome-flex-item xs={12}>
            <awesome-divider style={{ margin: '0' }}></awesome-divider>
          </awesome-flex-item>
        </awesome-flex>
        <div style={{ padding: '.5rem' }}>
          <awesome-button onClick={() => this.roll()}>Roll</awesome-button>
          <br />
          <div
            id="coin"
            style={{
              height: '5rem',
              width: '5rem',
              borderRadius: '.5rem',
              boxShadow: `0 5px 10px 0 ${this.ready ? 'var(--awesome-ui-default-color-primary)' : 'var(--awesome-ui-default-color-dim)'}`,
            }}
          >
            <awesome-grid rows="1fr auto 1fr" columns="1fr auto 1fr">
              <awesome-grid-item row={2} column={2} style={{ fontSize: '2rem' }}>
                {this.side}
              </awesome-grid-item>
            </awesome-grid>
          </div>
        </div>
      </Host>
    );
  }

  private roll() {
    let count = 0;
    this.ready = false;
    const timer = setInterval(() => {
      this.side = pickRandomValue([1, 2, 3, 4, 5, 6]);
      count++;
      if (count >= 50) {
        clearInterval(timer);
        this.ready = true;
      }
    }, 50);
  }
}
