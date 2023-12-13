import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ConfigureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const stores = ConfigureStore();
root.render(
  <Provider store={stores}>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <App/>  
      </SnackbarProvider>
    </BrowserRouter>
  </Provider>

);


