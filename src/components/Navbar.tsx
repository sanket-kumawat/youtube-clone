import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/img/youtube-logo.svg';
import { SearchBar } from './SearchBar';

export const Navbar = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link
        to={'/'}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          src={logo}
          alt='logo'
          height={45}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
};
