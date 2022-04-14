import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from 'store/store';
import { RouteLayout } from './routes';

import 'styles/global.css';

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <RouteLayout />
        </Router>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
