import React from 'react';
// Redux stuff
import {connect} from 'react-redux';
// MUI stuff
import {makeStyles, Theme, Button,} from '@material-ui/core';
import { GlobalState } from '../redux/store';

const useStyles = makeStyles((theme: Theme) => {

});

interface Props {

}

const Profile: React.FC<Props> = () => {

    const classes = useStyles();

    return (
        <div>
            
        </div>
    )
};

const mapStateToProps = (state: GlobalState) => ({

});

export default connect(mapStateToProps, undefined)(Profile);
