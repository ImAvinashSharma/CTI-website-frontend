import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(
    (theme) => ({
        root: {
            maxWidth: 1280,
        },
        cardHeading: {
            color: theme.palette.secondary.dark
        },
        cardParagraphHeading: {
            color: theme.palette.primary.main
        },
        largeButton: {
            button: theme.overrides.MuiButton,
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.background.default,

        }
    })
);
function PhotoCardDsktp(props) {
    const items = props.items;
    const classes = useStyles();
    return (
        <>
            {items.map((i, idx) => {
                const styles = {
                    cardContainer: {
                        height: `448px`,
                        width: `1216px`,
                    },
                    donatePath: `/donate`
                };
                return (
                    <Grid item style={{ margin: 'auto' }} align='center' >
                        <Card className={classes.root} style={{ position: 'relative', padding: '0px', marginBottom: '5px', width: '1184px' }}>
                            <Paper elevation={0} style={styles.cardContainer}>
                                <Grid item>
                                    <Typography className={classes.cardHeading} style={{ position: 'absolute', left: '69px', top: '94px', fontSize: '42px', lineHeight: '48px' }} gutterBottom variant="h4">
                                        {i.heading}
                                    </Typography>
                                    <Typography variant="h6" className={classes.cardParagraphHeading} style={{
                                        position: 'absolute', left: '69px', top: '159px'
                                    }}>
                                        {i.subHeading}
                                    </Typography>
                                    <br></br>
                                    <Typography style={{ position: 'absolute', left: '69px', top: '197px' }}>
                                        {i.dsktpTxtLn1}
                                    </Typography>
                                    <Typography style={{ position: 'absolute', left: '69px', top: '220px' }}>
                                        {i.dsktpTxtLn2}
                                    </Typography>
                                    <Typography style={{ position: 'absolute', left: '69px', top: '243px' }}>
                                        {i.dsktpTxtLn3}
                                    </Typography>
                                    <Typography variant="h6" style={{ position: 'absolute', left: '69px', top: '280px' }} >
                                        {i.footerText}
                                    </Typography>
                                    <Button href={styles.donatePath} style={{ border: '2px solid black', backgroundColor: 'white', borderColor: '#0F1D2F', color: 'black', position: 'absolute', left: '60px', top: '330px', width: '225px', margin: '0 auto', padding: '16px' }}>
                                        {i.buttonText}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <img src={i.src} style={{ width: '544px', height: '382px', position: 'absolute' }} alt='people smiling about computers'></img>
                                </Grid>
                            </Paper>
                        </Card>
                    </Grid>
                )
            })}
        </>
    );
}
export default PhotoCardDsktp;