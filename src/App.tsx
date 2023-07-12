import { config } from './configs';

function App() {
  return <h1>Hello world {config.baseUrl.client}</h1>;
}

export default App;
