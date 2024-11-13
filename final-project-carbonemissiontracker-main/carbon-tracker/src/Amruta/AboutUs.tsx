/************
 * Pulled from Amruta's branch and made the necessary adjustments for the compatibility of overall application, the original
 * code can be found in Amruta's branch
 * author: Zehao Song
 ************/

import { Typography, Container, makeStyles } from '@material-ui/core';

// Define custom styles using makeStyles hook
const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(9), // Add margin to the entire page
        padding: theme.spacing(9), // Add padding to the entire page
        display: 'flex',
        flexDirection: 'column',
    },
    section: {
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
    },
    number: {
        fontSize: '3em',
        fontWeight: 'bold',
        //color: '#3f51b5', // Change the color of the number
    },
    description: {
        maxWidth: '80%',
        //color: '#3f51b5', // Change the color of the text
    },
}));

function CarbonInfo() {
    const classes = useStyles();

    return (
        <Container className={classes.root}> {/* Add className to apply styles */}
            {/* Section 1 */}
            <section className={classes.section}>
                <Typography variant="h2" className={classes.number}>
                    10+
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    Our Carbon Emission tracker App provides user access to calculate Carbon emission based on an
                    individual's daily usage.
                </Typography>
            </section>

            {/* Section 2 */}
            <section className={classes.section}>
                <Typography variant="h2" className={classes.number}>
                    10+
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    Industries: CarbonAnalytics is making waves in 10+ diverse industries, setting new sustainability
                    standards.
                </Typography>
            </section>

            {/* Section 3 */}
            <section className={classes.section}>
                <Typography variant="h2" className={classes.number}>
                    3
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    Industry Partners: Our growing network of strategic partners, enhancing collaboration and collective
                    impact.
                </Typography>
            </section>

            {/* Section 4 */}
            <section className={classes.section}>
                <Typography variant="h2" className={classes.number}>
                    10M
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    Target Impact on CO2e reduction: CarbonAnalytics Target is to have an impact in managing over 10
                    million tons of CO2e emissions per annum.
                </Typography>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
    );
}

export default CarbonInfo;