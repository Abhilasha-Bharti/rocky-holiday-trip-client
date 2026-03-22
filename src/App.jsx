import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import AppRouter from './routes/AppRouter.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

export default App;