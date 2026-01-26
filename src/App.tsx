function App() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#0a0a0a',
      color: '#e5e5e5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      margin: 0,
      padding: 0
    }}>
      <h1 style={{ fontSize: '3rem', margin: 0 }}>System Online 🟢</h1>
      <p style={{ marginTop: '1rem', color: '#888', fontSize: '1.2rem' }}>
        Engine: React + TypeScript + pnpm
      </p>
    </div>
  );
}

export default App;