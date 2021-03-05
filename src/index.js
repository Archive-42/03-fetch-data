import { html } from "lit-html";
import { component, useState, useEffect } from "haunted";

function FetchData() {
  const [name, setName] = useState("");

  useEffect(async () => {
    const response = await fetch("https://swapi.co/api/people/1");
    const responseAsJson = await response.json();
    setName(responseAsJson.name);
  }, []);

  return html`
    <div>
      ${name}
    </div>
  `;
}

customElements.define("fetch-data", component(FetchData));
