import React, {useState, useCallback} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import AppIcon from '../assets/images/cat.png';
// Redux stuff
import {connect, HandleThunkActionCreator} from 'react-redux';
import {signUpUser} from '../redux/actions/userActions';
import { initialState, GlobalState } from '../redux/store';
//MUI stuff
import {Grid} from '@material-ui/core';
import {Typography, TextField, Button, CircularProgress} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    form: {
        textAlign: 'center'
    },
    pageTitle: {
        margin: '10px auto 10px auto',
        fontSize: '2.5rem'
    },
    image: {
        width: '70px',
        height: '70px',
        margin: '20px auto 0px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        position: 'relative',
    },
    progress: {
        position: 'absolute'
    }
}));

interface Props {
    signUpUser: HandleThunkActionCreator<typeof signUpUser>;
    user: typeof initialState.user;
    ui: typeof initialState.ui;
}

const Signup: React.FC<Props> = ({signUpUser, ui: {loading, errors}}) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [handle, setHandle] = useState<string>('');
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = useCallback(async (event: React.FormEvent) => {
        event.preventDefault();
        await signUpUser(email, password, confirmPassword, handle, history);
    }, [email, password, confirmPassword, handle, history, signUpUser]);

    return (
        <Grid container className={classes.form}>
            <Grid item sm></Grid>
            <Grid item sm>
                <img src={AppIcon} alt="monkey" className={classes.image}/>
                <Typography variant="h2" className={classes.pageTitle}>Sign up</Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField 
                        id="email" 
                        name="email" 
                        type="email" 
                        label="Email" 
                        className={classes.textField} 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        helperText={errors?.generalo}
                        error={errors?.general ? false : false}
                        fullWidth
                    />

                    <TextField 
                        id="password" 
                        name="password" 
                        type="password" 
                        label="Password" 
                        className={classes.textField} 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        helperText={errors?.generalo}
                        error={errors?.general ? false : false}
                        fullWidth
                    />

                    <TextField 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        label="Confirm Password" 
                        className={classes.textField} 
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        helperText={errors?.confirmPassword}
                        error={errors?.general ? false : false}
                        fullWidth
                    />

                    <TextField 
                        id="handle" 
                        name="handle" 
                        type="text" 
                        label="Handle" 
                        className={classes.textField} 
                        value={handle}
                        onChange={(event) => setHandle(event.target.value)}
                        helperText={errors?.handle}
                        error={errors?.general ? false : false}
                        fullWidth
                    />
                    {errors?.general && (
                        <Typography variant="body2" className={classes.customError}>
                            {errors?.general}
                        </Typography>
                    )}
                    <Button 
                        variant="contained" 
                        type="submit" 
                        color="primary" 
                        disabled={loading}
                        className={classes.button}
                    >
                        Signup
                        {loading && (
                            <CircularProgress size={30} className={classes.progress} />
                        )}
                    </Button>
                    <br/>
                    <small>Already have an account ? login <Link to="/login">here</Link></small>
                </form>
            </Grid>
            <Grid item sm></Grid>
        </Grid>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    user: state.user,
    ui: state.ui
});

export default connect(mapStateToProps, {signUpUser})(Signup);