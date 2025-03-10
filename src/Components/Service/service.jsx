
import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

const ServicesPage = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Service 1" secondary="Web development" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Service 2" secondary="frontend Develo" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Service 3" secondary="Description of service 3" />
        </ListItem>
      </List>
    </Box>
  );
};

export default ServicesPage;
