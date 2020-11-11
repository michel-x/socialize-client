import React from 'react';
import {Link} from 'react-router-dom';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toobar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export default function Navbar() {
    return (
        <AppBar>
            <Toobar className="nav-container">
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/signup">Signup</Button>
            </Toobar>
        </AppBar>
    )
}
