import './App.css';
import FilterVideo from './components/filterVideo/filterVideo'
import MainView from './components/Home/mainView'
function App() {
  return (
    <div className="App">
      <FilterVideo></FilterVideo>
      <div className="container">
        <MainView></MainView>
      </div>
    </div>
  );
}

export default App;