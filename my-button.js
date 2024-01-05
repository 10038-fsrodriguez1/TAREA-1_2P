import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-button')
class MyButton extends LitElement {
  static styles = css`
    button {
      padding: 10px;
      font-size: 16px;
    }
  `;

  render() {
    return html`
      <button @click=${this.handleClick}>Click me</button>
    `;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('button-clicked'));
  }
}
