import { Route, Routes } from 'react-router-dom';
import { Feed } from './pages/Feed';
import { Navbar } from './components/Navbar';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Feed />}
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
