
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Login from './Login.js';
import Error from './Error.js';



function App() {
  return (
      <main>
          <Routes >
              
              <Route path="/login" component={Login} />
              
              <Route component={Error} />
          </Routes >
      </main>
  )
}

export default App;