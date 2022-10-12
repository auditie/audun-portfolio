import './App.scss';
import PageHeader from './components/PageHeader/PageHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Router>
          <PageHeader />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/about' component={AboutPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
