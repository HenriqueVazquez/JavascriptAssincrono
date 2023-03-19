import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import { setupCounter } from './counter'

Promise.all([
  axios.get("https://api.github.com/users/henriquevazquez"),
  axios.get("https://api.github.com/users/henriquevazquez/repos")
])
  .then(responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
  })
  .catch(error => console.log(error.message));

/*
axios.get("https://api.github.com/users/henriquevazquez")
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch(error => console.log(error.message));

fetch("https://api.github.com/users/henriquevazquez")
  .then(response => response.json())
  .then(data => fetch(data.repos_url))
  .then(res => res.json())
  .then(d => console.log(d))
  .catch(err => console.log(err));*/

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
