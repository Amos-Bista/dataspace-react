import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
import plan from '../assets/JSON fILES/plan.json';

export default function Plans() {
  const [plansData, setPlansData] = useState([]);

  useEffect(() => {
    // Convert the object to an array of plans
    const plansArray = Object.entries(plan).map(([planName, planDetails]) => ({
      name: planName,
      details: planDetails
    }));
    setPlansData(plansArray);
  }, []);

  return (
    <Carousel autoPlay={true} animation="slide" timeout={500} indicators={false} navButtonsAlwaysVisible={true}>
      {plansData.map((plan, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: 20 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="./plans.png" // Update this path to the correct path of your image
            title="Green Iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {plan.name}
            </Typography>
            {plan.details.map((detail, idx) => (
              <Typography key={idx} variant="body2" color="text.secondary">
                <strong>{detail.title}:</strong> {detail.description}
              </Typography>
            ))}
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Carousel>
  );
}
