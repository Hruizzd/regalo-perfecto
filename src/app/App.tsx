import { RouterProvider } from 'react-router';
import { QuizProvider } from './context/QuizContext';
import { router } from './routes';

export default function App() {
  return (
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  );
}
