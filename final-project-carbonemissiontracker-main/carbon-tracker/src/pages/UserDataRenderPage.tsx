// pages/UserDataRenderPage.tsx

// CO2 emission data is collected from the below website:
// https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references
// https://www.endesa.com/en/blogs/endesa-s-blog/light/calculate-electricity-house-consumption

/************
 * This code segment handles the user data rendering, it uses the recharts library to plot a composite graph that displays
 * the user's weekly carbon emission based on the user inpyts collected. The data is displayed in a bar graph type
 * author: Zehao Song
 ************/

import  {useEffect, useState} from "react";
import {useUser} from "../contexts/UserContext.tsx";
import { Navigate} from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    Label,
    Line,
    ComposedChart, PieChart, Pie, Cell
} from 'recharts';
import Grid from "@mui/material/Grid";
import {Card, CardContent, Link} from "@mui/material";
import backgroundimg from '../assets/environmental_back.jpg';
import {User} from "../models/User.ts";
import { jsPDF } from "jspdf";
import Button from "@mui/material/Button";
import downloadbg from '../assets/download.avif';

// An interface for the user data format
interface UserData {
    userId: string;
    distance: number;
    transportation: string;
    recycledwaste: number;
    household: number;
    date: string;
}

// apply simple styling on components
const useStyles = makeStyles((theme) => ({
    logoutbutton: {
        marginLeft:'auto',
    },
    summaryBox: {
        backgroundColor: theme.palette.grey[200],
        padding: theme.spacing(2),
        borderRadius: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    summaryTitle: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(1),
    },
    summaryText: {
        marginBottom: theme.spacing(1),
    },
    greenCircle: {
        backgroundColor: "green",
        width: 16,
        height: 16,
        borderRadius: "50%",
        marginRight: theme.spacing(1),
    },
    title: {
        color: '#fffff',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textTransform: 'uppercase',
    },
}));

function createPDF(emissionData: any[], emissionsDetails: any[], user: User) {

    const doc = new jsPDF();
    let count = 1; // for line spacing

    // Add user details
    doc.text(`Username: ${user.username}`, 10, 10 * count++);
    doc.text(`Firstname: ${user.firstname}`, 10, 10 * count++);
    doc.text(`Lastname: ${user.lastname}`, 10, 10 * count++);
    doc.text(`Email: ${user.email}`, 10, 10 * count++);
    doc.text(`Address: ${user.address}`, 10, 10 * count++);

    // Add Emission Data
    doc.text('Emission Data:', 10, 10 * count++);
    emissionData.forEach(data => {
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                doc.text(`${key}: ${data[key]}`, 10, 10 * count++);
            }
        }
    });

    // Add Emissions Details
    doc.text('Emissions Details:', 10, 10 * count++);
    emissionsDetails.forEach(detail => {
        for (let key in detail) {
            if (detail.hasOwnProperty(key)) {
                doc.text(`${key}: ${detail[key]}`, 10, 10 * count++);
            }
        }
    });

    // Saving the PDF locally
    doc.save("emission_data.pdf");
}

const UserDataRenderPage = () => {
    const classes = useStyles();
    const { user, userId } = useUser();
    // redirect page to log in, if there is not a user currently stored through signin
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    // User Data hooks, stored as an array
    const [userData, setUserData] = useState<UserData[]>([]);

    // useEffect make sure that this runs at the initial runs of the page
    useEffect(() => {
        // Retrieve the current date that user decide to view the data
        const startDate = new Date();
        // Reduce by 7 days as we would like to display data in the range of weekly basis
        startDate.setDate(startDate.getDate() - 7);
        // convert to yyyy/mm/dd
        const dateModified = startDate.toISOString().split('T')[0];
        const endDate = new Date().toISOString().split('T')[0];
        retrieveData(dateModified, endDate);
    }, []);

    // Calculating the CO2 from user data for each day
    function calcualteCO2(distance: number, transportation: string, recycledwaste: number, household: number) {
        const householdCO2 = 46.54 / household;
        const wasteCO2 = 25 * Number(recycledwaste);
        let transportFactor;
        let transportCO2;
        switch (transportation) {
            case 'car':
                transportFactor = 0.88;
                break;
            case 'electric':
                transportFactor = 0.03;
                break;
            case 'bus':
                transportFactor = 0.66;
                break;
            case 'subway':
                transportFactor = 0.28;
                break;
            case 'plane':
                transportFactor = 53.3 / 90.7;
                break;
            case 'bikeorwalk':
                transportFactor = 0.073;
                break;
            default:
                console.log("unknown transportation method");
                transportFactor = 0;
        }
        transportCO2 = transportFactor * distance;
        return transportCO2 + wasteCO2 + householdCO2;
    }
    function calcualteCO2Individual(distance: number, transportation: string, recycledwaste: number, household: number) {
        const householdCO2 = 46.54 / household;
        const wasteCO2 = 25 * Number(recycledwaste);
        let transportFactor;
        let transportCO2;
        switch (transportation) {
            case 'car':
                transportFactor = 0.88;
                break;
            case 'electric':
                transportFactor = 0.03;
                break;
            case 'bus':
                transportFactor = 0.66;
                break;
            case 'subway':
                transportFactor = 0.28;
                break;
            case 'plane':
                transportFactor = 53.3 / 90.7;
                break;
            case 'bikeorwalk':
                transportFactor = 0.073;
                break;
            default:
                console.log("unknown transportation method");
                transportFactor = 0;
        }
        transportCO2 = transportFactor * distance;
        return {transportCO2, wasteCO2, householdCO2 };
    }

    // retrieve data from the database using fetch to send a request
    async function retrieveData(start_date: string, end_date: string){
        try {
            const response = await fetch(`http://localhost:3000/users/submit/userdata/${userId}/${start_date}/${end_date}`);
            if(!response.ok){
                throw new Error(`Error retrieving user data: ${response.statusText}`);
            }
            // retrieve the data from response
            const data = await response.json();
            // using user hook to set userdata
            setUserData(data);
        } catch(err){
            console.error('Error log:', err);
        }
    }

    // Prepare the data for the Bar graph
    const emissionData = userData.map((data) => ({
        date: new Date(data.date).toLocaleDateString(),
        'CO2 Emission': calcualteCO2(data.distance, data.transportation, data.recycledwaste, data.household),
    }));

    const totalEmission = emissionData.reduce((total, data) => total + data['CO2 Emission'], 0);
    const averageEmission = totalEmission / emissionData.length;
    const emissionsDetails = userData.map((data) => {
        const individualCO2 = calcualteCO2Individual(data.distance, data.transportation, data.recycledwaste, data.household);
        return {
            date: new Date(data.date).toLocaleDateString(),
            ...individualCO2,
        };
    });

    const sortedEmissionsDetails = [...emissionsDetails].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const mostRecentData = sortedEmissionsDetails[0];
    let pieChartData: any[] | undefined = [];
    let totalEmissions: number | undefined;
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    if (mostRecentData) {
        pieChartData = Object.keys(mostRecentData)
            .filter(key => key !== 'name' && key !== 'date')  // exclude 'date' key
            .map((key) => ({
                name: key,
                value: mostRecentData[key as keyof typeof mostRecentData]
            }));

        totalEmissions = pieChartData.reduce((a, b) => a + b.value, 0);
    }

    return (
        <>
            <Container style={{ background: 'linear-gradient(to bottom, #abb6ba, #068a32)', backgroundSize: 'cover', minHeight: '100vh', maxWidth: '100%' }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12}>
                            <br/>
                            <Paper style={{ textAlign: 'left' }}>
                                <AppBar position="static">
                                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant="h6" className={classes.title}>
                                            Your Emission Data of the last 7 days
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                                <br />
                                <Box p={2}>
                                    <ComposedChart
                                        width={900}
                                        height={700}
                                        data={emissionData}
                                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="CO2 Emission" fill="#82ca9d" />
                                        <Line type="monotone" dataKey="CO2 Emission" stroke="blue" dot={false} strokeDasharray="3 4" />
                                        <ReferenceLine y={averageEmission} stroke="red" >
                                            <Label
                                                value={`User Average: ${averageEmission.toFixed(2)}`}
                                                position="insideRight"
                                                offset={100}
                                                style={{ textAnchor: 'start', fill: 'black', fontSize: '14px', fontWeight: 'bold' }}
                                            />
                                        </ReferenceLine>
                                    </ComposedChart>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br/>
                    <Box className={classes.summaryBox} position="relative" style={{ overflow: "hidden" }}>
                        <Typography variant="h6" className={classes.summaryTitle}>
                            Data Summary of the week
                        </Typography>
                        <Typography variant="body1" className={classes.summaryText}>
                            Total emission: {totalEmission.toFixed(2)} Pounds
                        </Typography>
                        <Typography variant="body1" className={classes.summaryText}>
                            Average emission: {averageEmission.toFixed(2)} Pounds
                        </Typography>
                        <Box position="absolute" bottom={0} right={0} display="flex">
                            <div
                                style={{
                                    backgroundColor: "green",
                                    width: 90,
                                    height: 90,
                                    borderRadius: "50%",
                                    marginRight: 4,
                                    position: "absolute",
                                    bottom: -5,
                                    right: -20,
                                    zIndex: 3,
                                }}
                            ></div>
                            <div
                                style={{
                                    backgroundColor: "green",
                                    width: 90,
                                    height: 90,
                                    borderRadius: "50%",
                                    marginRight: 4,
                                    position: "absolute",
                                    bottom: -5,
                                    right: 24,
                                    zIndex: 2,
                                }}
                            ></div>
                            <div
                                style={{
                                    backgroundColor: "green",
                                    width: 90,
                                    height: 90,
                                    borderRadius: "50%",
                                    position: "absolute",
                                    bottom: 20,
                                    right: -5,
                                    zIndex: 1,
                                }}
                            ></div>
                            <div
                                style={{
                                    backgroundColor: "green",
                                    width: 90,
                                    height: 90,
                                    borderRadius: "50%",
                                    position: "absolute",
                                    bottom: -35,
                                    right: 55,
                                    zIndex: 4,
                                }}
                            ></div>
                            <div
                                style={{
                                    backgroundColor: "green",
                                    width: 90,
                                    height: 90,
                                    borderRadius: "50%",
                                    position: "absolute",
                                    bottom: 55,
                                    right: -50,
                                    zIndex: 5,
                                }}
                            ></div>
                            <div
                                style={{
                                    backgroundColor: "green",
                                    width: 90,
                                    height: 90,
                                    borderRadius: "50%",
                                    position: "absolute",
                                    bottom: -55,
                                    right: 80,
                                    zIndex: 6,
                                }}
                            ></div>
                        </Box>
                    </Box>
                </Container>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" className={classes.title}>Daily Emission Summary</Typography>
                                    <PieChart width={400} height={400}>
                                        <Pie
                                            data={pieChartData}
                                            cx={200}
                                            cy={200}
                                            outerRadius={100}
                                            label={({value}) => totalEmissions ? `${((value ?? 0) / (totalEmissions ?? 1) * 100).toFixed(2)}%` : 'N/A'}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {pieChartData.map((_entry, index) => (
                                                <Cell fill={colors[index % colors.length]} />
                                            ))}
                                        </Pie>
                                        <Legend />
                                        <Tooltip />
                                    </PieChart>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card style={{
                                backgroundImage: `url(${backgroundimg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <CardContent>
                                    <Typography variant="h6" className={classes.title}>Related Articles</Typography>
                                    <Typography variant="body1" className={classes.summaryText}>
                                        Check out these articles to Learn more about ways you can help reducing daily
                                        Carbon Emissions!
                                    </Typography>
                                    <ul>
                                        <li>
                                            <Link
                                                href="https://sustainability.georgetown.edu/community-engagement/things-you-can-do/"
                                                target="_blank" rel="noopener">
                                                Simple Tips to Reduce Your Carbon Footprint
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://youth.europa.eu/get-involved/sustainable-development/how-reduce-my-carbon-footprint_en"
                                                target="_blank" rel="noopener">
                                                How to reduce my Carbon FootPrint
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://www.bbc.com/future/article/20230421-what-are-the-best-ways-to-reduce-carbon-footprint"
                                                target="_blank" rel="noopener">
                                                Six ways to Lower your carbon emissions quickly
                                            </Link>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card
                                style={{
                                    marginTop: 16,
                                    padding: 16,
                                    textAlign: 'center',
                                    backgroundImage: `url(${downloadbg})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: 'white' }}>
                                    Your Emission Report
                                </Typography>
                                <Typography variant="body1" gutterBottom style={{ color: 'white' }}>
                                    Click the button below to download a PDF report summarizing your carbon emissions.
                                </Typography>
                                <Button variant="contained" onClick={() => createPDF(emissionData, emissionsDetails, user)}>
                                    Download PDF
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </>
    );
}

export default UserDataRenderPage;