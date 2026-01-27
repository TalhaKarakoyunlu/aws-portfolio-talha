import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;