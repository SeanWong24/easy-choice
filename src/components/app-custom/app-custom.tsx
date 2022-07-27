import { MatchResults } from '@stencil-community/router';
import { Component, Host, h, ComponentInterface, Prop, State } from '@stencil/core';
import { pickRandomValue } from '../../utils/random';

@Component({
  tag: 'app-custom',
  styleUrl: 'app-custom.css',
  shadow: true,
})
export class AppCustom implements ComponentInterface {
  @State() result: string;
  @State() ready = false;
  @State() options: string[] = [''];

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
          <div>
            <h3>Your options:</h3>
            {this.options?.map((option, i) => (
              <awesome-item>
                <awesome-input value={option} onAwesomeChange={({ detail }) => (this.options[i] = detail.value)}></awesome-input>
                <awesome-button
                  disabled={!this.options || this.options.length <= 1}
                  slot="after"
                  variant="hollow"
                  style={{ color: 'transparent', textShadow: '0 0 0 var(--awesome-ui-color-primary)' }}
                  onClick={() => this.removeOption(i)}
                >
                  ❌
                </awesome-button>
              </awesome-item>
            ))}
            <br />
            <awesome-button variant="hollow" style={{ color: 'transparent', textShadow: '0 0 0 var(--awesome-ui-color-primary)' }} onClick={() => this.addAnOption()}>
              ➕
            </awesome-button>
          </div>
          <awesome-divider></awesome-divider>
          <awesome-button onClick={() => this.pick()}>Pick</awesome-button>
          <br />
          The result is{' '}
          <awesome-badge style={{ '--awesome-ui-color-primary': this.ready ? 'hsl(120, 80%, 70%)' : 'hsl(0, 0%, 70%)' }}>{this.result || 'a Schrödinger’s Cat'}</awesome-badge>.
        </div>
      </Host>
    );
  }

  private pick() {
    let count = 0;
    this.ready = false;
    const timer = setInterval(() => {
      this.result = pickRandomValue(this.options);
      count++;
      if (count >= 50) {
        clearInterval(timer);
        this.ready = true;
      }
    }, 50);
  }

  private addAnOption() {
    this.options = [...this.options, ''];
  }

  private removeOption(index) {
    if (this.options?.length > 1) {
      this.options = [...this.options?.slice(0, index), ...this.options?.slice(index + 1)];
    }
  }
}
