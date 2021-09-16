import './App.css';
import Developer from './components/Developers'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='Card__container'>
          <Developer name='Pedro' age='28' country='Brasil'></Developer>
          <Developer name='Anna' age='27' country='Inglaterra'></Developer>
        </div>
      </header>
    </div>
  );
}

export default App;
