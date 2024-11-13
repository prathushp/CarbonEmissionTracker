/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/

import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SampleImage from '../Images/Hexagon.jpeg'; // Import your sample image here

function Hexagon() {
    return (
        <Container maxWidth="md" style={{ paddingTop: '40px'}}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <img src={SampleImage} alt="Sample" style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4">Carbon Emission Tracker for Household Purpose</Typography>
                    <Typography variant="body1">
                        Combining software, hardware and services, Carbon Emission Tracker for Household Use helps deliver outcomes that matter to organizations of any size. One vendor, one approach, real results.
                    </Typography>
                    <Button variant="contained" color="primary" component={Link} to="/login">
                        LEARN MORE
                    </Button>
                </Grid>
            </Grid>
            {/* Add the feedback option here */}
        </Container>
    );
}

export default Hexagon;