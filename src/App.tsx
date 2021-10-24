import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import NavBar from './NavBar';
import Routes from './Routes';

function App() {
  return (
    <main className={styles.App}>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </main>
  );
}

export default App;
