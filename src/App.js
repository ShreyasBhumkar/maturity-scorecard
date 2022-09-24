// import logo from './logo.svg';
import './App.css';
import AddMovie from './component/AddMovie';
import MovieList from './component/MovieList';
import UpdateMovie from './component/UpdateMovie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Firestore Database with React</h3>
      </header>
      <main>
        <MovieList />
        <AddMovie />
        <UpdateMovie />
      </main>
    </div>
  );
}

export default App;
