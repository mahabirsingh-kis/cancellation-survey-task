import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import CancellationConfirm from './pages/CancellationConfirm/CancellationConfirm';
import CancellationReasonForm from './pages/CancellationReasonForm/CancellationReasonForm';

// Import bootstrap css

export const App = () => {
  const history = createBrowserHistory();
  return (
    <>
      <div>
        <Router history={history}>
          <Routes>
            <Route exact path="/" element={<CancellationConfirm />} />
            <Route exact path="/cancel-reason" element={<CancellationReasonForm />} />
            <Route exact path="*" element={() => '404 NOT FOUND'} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
