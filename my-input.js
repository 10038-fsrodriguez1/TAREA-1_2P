import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-input')
class MyInput extends LitElement {
  @property({ type: String }) value = '';

  static styles = css`
    input {
      padding: 10px;
      font-size: 16px;
    }
  `;

  render() {
    return html`
      <input type="text" .value=${this.value} @input=${this.handleInput} />
    `;
  }

  handleInput(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent('input-changed', { detail: this.value }));
  }
}
