import { styled } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

// Main container
export const MainContainer = styled('div')(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 50px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 20px',
  },
}));

// Heading
export const Heading = styled('h1')(({ theme }) => ({
  color: 'rgba(0,183,255, 1)',
  textDecoration: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

// Image
export const Image = styled('img')(({ theme }) => ({
  marginLeft: '15px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '5px',
  },
}));

// Toolbar
export const Toolbar = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '400px',
  [theme.breakpoints.down('sm')]: {
    width: '160px',
  },
}));

// Profile
export const Profile = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '400px',
}));

// UserName
export const UserName = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

// BrandContainer
export const BrandContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

// Small Margin
export const SmMargin = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

// Purple Avatar
export const Purple = styled('div')(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));

// ActionDiv
export const ActionDiv = styled('div')({
  textAlign: 'center',
});