import React, {useState, useEffect, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
import AppIcon from '../assets/images/cat.png';
//MUI stuff
import {Grid} from '@material-ui/core';
import {Typography, TextField, Button} from '@material-ui/core';
import {login} from '../services/api/authentication';

const useStyles = makeStyles(() => ({
    form: {
        textAlign: 'center'
    },
    pageTitle: {
        margin: '10px auto 10px auto'
    },
    image: {
        width: '70px',
        height: '70px',
        margin: '20px auto 20px auto'
    },
    textField: {
        margin: '10px auto 10px auto'
    },
    button: {
        marginTop: 20
    }
}));

interface Props {

}

const Login: React.FC<Props> = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const classes = useStyles();
    const history = useHistory();

    const handleSubmit = useCallback(async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const response = await login(email, password);
        if (response.data) {
            setLoading(false);
            history.push('/');
        } else {
            setErrors({general: response.error?.message!})
        }
    }, []);

    return (
        <Grid container className={classes.form}>
            <Grid item sm></Grid>
            <Grid item sm>
                <img src={AppIcon} alt="monkey" className={classes.image}/>
                <Typography variant="h2" className={classes.pageTitle}>Login</Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField 
                        id="email" 
                        name="email" 
                        type="email" 
                        label="email" 
                        className={classes.textField} 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        helperText={errors.general}
                        error={errors.general ? true : false}
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
                        helperText={errors.general}
                        error={errors.general ? true : false}
                        fullWidth
                    />

                    <Button 
                        variant="contained" 
                        type="submit" 
                        color="primary" 
                        className={classes.button}
                    >
                        Login
                    </Button>

                </form>
            </Grid>
            <Grid item sm>Yooo</Grid>
        </Grid>
    );
};

export default Login;
