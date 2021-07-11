
import './App.css';
import { Home } from './Pages'
import {UserContextProvider} from './Context/user'
function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Home />
      </div>
    </UserContextProvider>

  );
}

export default App;
