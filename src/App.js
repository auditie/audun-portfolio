import './App.scss';
import PageHeader from './components/PageHeader/PageHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
          <PageHeader />
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
