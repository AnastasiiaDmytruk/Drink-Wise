import './App.module.css';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import RestrictedRoute from './routes/RestrictedRoute.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const TrackerPage = lazy(() => import('./pages/TrackerPage/TrackerPage.jsx'));
const SignInPage = lazy(() => import('./pages/SignInPage/SignInPage.jsx'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage.jsx'));
const GooglePage = lazy(() => import('./pages/GooglePage/GooglePage.jsx'));
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx'),
);

function App() {
  return (
    <SharedLayout>
      <Suspense fallback={null}>
        <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/tracker">
                <HomePage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/tracker">
                <SignInPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute redirectTo="/tracker">
                <SignUpPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/tracker"
            element={
              <PrivateRoute>
                <TrackerPage />
              </PrivateRoute>
            }
          />
          <Route path="/google-oauth" element={<GooglePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
}

export default App;
