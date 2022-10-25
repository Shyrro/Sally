import './app.css'
import App from './App.svelte'
import initUnocssRuntime from '@unocss/runtime'

initUnocssRuntime({})

const app = new App({
  target: document.getElementById('app')
})

export default app
