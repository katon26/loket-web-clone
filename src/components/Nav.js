import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import { CardMedia } from '@mui/material';
import Button from '@mui/material/Button';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

// eslint-disable-next-line
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
    
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline 
        
      />

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#152955' }}>
        <Toolbar>
          <CardMedia component="img" alt="logo" image="https://www.loket.com/images/logo-loket-white.png"
          sx={{ maxHeight:"30px", maxWidth:"112px" }} />
          <Search style={{ height: '35px' }}>
            {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> */}
            <StyledInputBase
              placeholder="Cari event ..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant="contained" endIcon={<SearchIcon />} style={{
              borderRadius: '0px 3px 3px 0px',
              bottom: '4px',
              height: '35px',
              background: '#2950a6',
             }}>
            </Button>
          </Search>

          <Box sx={{ flexGrow: 1 }} />
          <nav>
            <Typography
              variant="a"
              color="inherit"
              href="#"
              sx={{ my: 1, mx: 1.5, }}
            >
              Cari Event
            </Typography>
            <Typography
              variant="a"
              color="inherit"
              href="#"
              sx={{ my: 1, mx: 1.5,  }}
            >
              Buat Event
            </Typography>
          </nav>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <LoginIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
    </React.Fragment>
    
    
  );
}