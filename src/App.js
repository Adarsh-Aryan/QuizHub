
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Quiz from './Components/Pages/Quiz/Quiz';
import Home from './Components/Pages/Home/Home';
import Result from './Components/Pages/Result/Result';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/quiz'>
            <Quiz />
          </Route>
          <Route path='/result'>
            <Result />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;
