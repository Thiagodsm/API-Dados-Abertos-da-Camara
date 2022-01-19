import React, {useState, useEffect} from 'react';
import apiNews from '../api/APIUtils';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Note from '../components/NoteCard';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(12, 4),
    },
    card: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid black',
      borderRadius: '5px',
      textAlign: 'center',
    },
    icon: {
      padding: theme.spacing(2, 0),
    },
    title: {
      padding: theme.spacing(2),
    },
    featureList: {
      padding: theme.spacing(2),
    },
  }));
  
  const Home = () => {
    const classes = useStyles();
    const[cardData, setCardData] = useState({articles: []});

    useEffect(() => {
        apiNews.getNews().then((response) =>{
            setCardData(response.data);
            console.log(response.data);
        });
    }, []);

  
    return (
        <Container>
            <Grid container spacing={3}>
                {cardData.articles.map((article, index) => (
                    <Grid item key={index} xs={12} md={6} lg={4}>
                        <Note article={article} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
  };
  
  export default Home;