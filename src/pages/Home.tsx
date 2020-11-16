import React, {useState, useEffect, useCallback} from 'react';
import {Grid} from '@material-ui/core';

import Scream from '../components/Scream';

import {Scream as IScream} from '../services/api';
import * as screamService from '../services/api/scream';


const Home: React.FC = () => {
    const [screams, setScreams] = useState<IScream[] | null>(null);

    const getScreams = useCallback(async () => {
        const response = await screamService.search();
        if (response.data) {
            setScreams(response.data);
        } else {
            console.error(response.error);
        }
    }, []);

    useEffect(() => {
        getScreams()
    }, []);

    const recentScreamsMarkup = screams ? (
        screams.map((scream) => <Scream scream={scream} key={scream.id}/>)
    ) : <p>Loading ...</p>;

    return (
        <Grid container spacing={2}>
            <Grid item sm={8} xs={12}>
                {recentScreamsMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile ...</p>
            </Grid>
        </Grid>
    )
};

export default Home;
