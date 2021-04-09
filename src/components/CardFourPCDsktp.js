import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
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
function Card_Four(props) {
    const items = props.items;
    const classes = useStyles();
    return (
        <>
            {items.map((i, idx) => {
                const styles = {
                    outerCardContainer: {
                        height: `448px`,
                        width: `1216px`,
                    },
                    innerTextCardContainer: {
                        height: `448px`,
                        width: `608px`,
                    },
                    buttonPath: `/faq`
                };
                let card;
                if (i.title === 'img-4') {
                    card = <div>
                        <Grid item>
                            <Paper elevation={0} style={styles.innerTextCardContainer}>
                                <Typography className={classes.cardHeading} style={{ position: 'absolute', right: '332px', top: '94px', fontSize: '42px', lineHeight: '48px' }} gutterBottom variant="h4">
                                    {i.heading}
                                </Typography>
                                <Typography variant="h6" className={classes.cardParagraphHeading} style={{
                                    position: 'absolute', right: '164px', top: '159px'
                                }}>
                                    {i.subHeading}
                                </Typography>
                                <br></br>
                                <Typography style={{ position: 'absolute', right: '180px', top: '197px' }}>
                                    {i.dsktpTxtLn1}
                                </Typography>
                                <Typography style={{ position: 'absolute', right: '357px', top: '220px' }}>
                                    {i.dsktpTxtLn2}
                                </Typography>
                                <Typography style={{ position: 'absolute', right: '218px', top: '255px' }}>
                                    View our <a style={{ color: '#5caf9' }} href="/faq">FAQ</a> to find answers or <a href="mailto:civictechindex@hackforla.org">contact us.</a>
                                </Typography>
                                <Button href={styles.buttonPath} style={{ border: '2px solid black', backgroundColor: 'white', borderColor: '#0F1D2F', color: 'black', position: 'absolute', right: '287px', top: '312px', width: '278px', margin: '0 auto', padding: '16px' }}>
                                    {i.buttonText}
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item >
                            <Card className={classes.root} style={{ position: 'absolute', top: '33px', right: '608px', width: '544px', height: '382px' }}>
                                <CardMedia
                                    style={{ width: '544px', height: '382px' }}
                                    className={classes.media}
                                    image={i.src}
                                />
                            </Card>
                        </Grid>
                    </div>
                }
                return (
                    <Grid container style={{ margin: 'auto' }} align='center' >
                        <Card className={classes.root} style={{ position: 'relative', padding: '0px', width: '1184px', margin: '0 auto', marginBottom: '10px' }}>
                            {card}
                        </Card>
                    </Grid>
                )
            })}
        </>
    );
}
export default Card_Four;