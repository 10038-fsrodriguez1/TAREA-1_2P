import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('app-root')
class AppRoot extends LitElement {
  @state()
  greeting = 'Hola Mundo';

  static styles = css`
    :host {
      display: block;
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
    }

    h1 {
      color: #007bff;
    }
  `;

  render() {
    return html`
      <h1>${this.greeting}</h1>
      <my-button @button-clicked=${this.handleButtonClick}></my-button>
      <my-input @input-changed=${this.handleInputChanged}></my-input>
      <p>Input value: ${this.inputValue}</p>
    `;
  }

  handleButtonClick() {
    console.log('Button clicked!');
    this.greeting = '¡Hola Mundo ha cambiado!';
  }

  handleInputChanged(event) {
    this.inputValue = event.detail;
  }
}
