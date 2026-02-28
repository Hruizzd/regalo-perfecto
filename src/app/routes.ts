import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Question1 from './pages/Question1';
import Question2 from './pages/Question2';
import Question3 from './pages/Question3';
import Question4 from './pages/Question4';
import Results from './pages/Results';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/question-1',
    Component: Question1,
  },
  {
    path: '/question-2',
    Component: Question2,
  },
  {
    path: '/question-3',
    Component: Question3,
  },
  {
    path: '/question-4',
    Component: Question4,
  },
  {
    path: '/results',
    Component: Results,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);