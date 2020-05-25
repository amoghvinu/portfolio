import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import background from '../../component/log.svg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} style={{backgroundImage: `url(${background})`,height:'100%',backgroundSize:'cover'}}>
      <CardContent>
        <p1>
            <strong>
          About Me
          </strong>
        </p1>
        <Typography variant="h5" component="h2">
            <p2>
         Kaise ho Dostho!<i class="far fa-laugh-beam"></i>
         </p2>
        </Typography>
        <p>
          Mera naam he Amogh,I am from HUBBALLI..
          And Nemak ke liye Engineering karraha hun par Kaam tho heron ke sath karna<i class="fas fa-smile-wink fa-1x"></i>
        </p>
        <p>
          I am a person who has a high interest in acting.
          My dream is to become a famous film actor.I also found myself
          interested in designing Websites.I spent most of my time in watching movies and learning some webdevelopment Applications.

          
       </p>
       <p3>
         <strong>
           So..thatsall ..Sab kuch idar hi jaan lete ho kya chalo Contact karo<i class="far fa-laugh-beam"></i>
           And Koi Directors pehchan me rahe tho bata do na yaar...
           </strong>
       </p3>
       
      </CardContent>
      <CardActions>
        <Button type="button" class="btn-danger" >
        <a class="navbar-brand text-white" href="Contact">Contact me  <i class="fas fa-hand-point-right"></i></a></Button>
      </CardActions>
    </Card>
  );
}
