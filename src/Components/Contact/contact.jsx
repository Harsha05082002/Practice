
import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ContactPage = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>Submit</Button>
    </Box>
  );
};

export default ContactPage;
