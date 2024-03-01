import { Provider } from 'react-redux';
import './App.css';
import Parent from './components/parent';
import { store } from './redux/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DisplayContact from './components/displayContact';
import { Home } from '@mui/icons-material';




function App() {
  return (
    <Provider store={store}>
      <Parent/>
    </Provider>
  );
}

export default App;
