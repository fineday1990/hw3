import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";


export const Header = () => {

	const [open,setOpen] = React.useState(false);

	const handleClickOpen = () =>{
		setOpen(true);
	}
	const handleClose = () =>{
		setOpen(false);
	}

	const [openTwo,setOpenTwo] = React.useState(false);

	const handleClickOpenTwo = () =>{
		setOpenTwo(true);
	}
	const handleCloseTwo = () =>{
		setOpenTwo(false);
	}

  return (
	<AppBar position="static">
	<Toolbar>
	  <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
		 Post
	  </Typography>

	  <Button color="inherit" onClick={handleClickOpen}>Login</Button>

		<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id ="form-dialog-title">Log in</DialogTitle>
			<DialogContent>
				<DialogContentText>Log in to see</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email"
					typy="email"
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="pass"
					label="password"
					typy="password"
					fullWidthai
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">Cancel</Button>
				<Button onClick={handleClose} color="primary">Log in</Button>
			</DialogActions>
		</Dialog>
		<Button variant="contained" color="success" onClick={handleClickOpenTwo}>
        Create
      </Button>
		<Dialog open={openTwo} onClose={handleCloseTwo} aria-labelledby="form">
			<DialogTitle id ="form">Есть контакт</DialogTitle>
			<DialogActions>
				<Button onClick={handleCloseTwo} color="primary">Cancel</Button>
			</DialogActions>
		</Dialog>
	</Toolbar>
 </AppBar>
  );
};