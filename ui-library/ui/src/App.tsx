import { Button } from './components/Button';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Button variant="primary" size="lg" onClick={() => alert('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}

export default App;
