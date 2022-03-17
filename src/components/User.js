import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars() {
  return (
    <Stack direction='row' spacing={1} className='avatarWrap'>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>Olivia Paul
    </Stack>
  );
}
