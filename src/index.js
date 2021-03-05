import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";

function UsingEffects() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("1. Running effect!");
  }); // will run after each update

  useEffect(() => {
    console.log("2. [Count] changed, running effect again!");
  }, [count]); // You can specify a dependencies array to re-run this effect when the dependency has changed

  useEffect(() => {
    console.log("3. Will only be ran once!");
  }, []); // You can specify an empty dependencies array run this effect only once

  useEffect(() => {
    console.log("4. Running effect!");
    return () => {
      console.log("4. Cleaning up effect!");
    };
  }); // You can return a function from the effect to do cleanup work, like removing event listeners, this will be called when the component is destroyed. This effect will run after every update

  return html`
    <button @click=${() => setCount(count + 1)}>${count}</button>
  `;
}

customElements.define("using-effects", component(UsingEffects));
