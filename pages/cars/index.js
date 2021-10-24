import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import Button from '@mui/material/Button';
import Link from '../../src/Link';

export default function CarsList() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem button component="a" href="cars/ford">
            <ListItemAvatar>
              <Avatar>
                <DirectionsCar />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="ford" secondary="Out 24, 2021" />
          </ListItem>
          <ListItem button component="a" href="cars/lambo">
            <ListItemAvatar>
              <Avatar>
                <DirectionsCar />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="lambo" secondary="Out 24, 2021" />
          </ListItem>
          <ListItem button component="a" href="cars/tesla">
            <ListItemAvatar>
              <Avatar>
                <DirectionsCar />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="tesla" secondary="Out 23, 2021" />
          </ListItem>
        </List>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}
