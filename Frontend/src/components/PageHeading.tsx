import { Typography } from '@mui/material';

function PageHeading({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: 45, pt: 13, pb: 3 }} variant={'h2'}>
      {children}
    </Typography>
  );
}

export default PageHeading;
