import { SxProps, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const listItemSX: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: 2,
  borderBottom: `1px solid ${grey[700]}`,
  '&:last-child': {
    borderBottom: 'none',
  },
  '@media (min-width:800px)': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
  },
};

export const listItemTextSX: SxProps<Theme> = {
  '@media (max-width:800px)': {
    mb: '20px',
  },
};
