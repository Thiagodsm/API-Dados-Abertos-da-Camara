import React, {useState, useEffect} from 'react';
import apiNews from '../api/APIUtils';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Note from '../components/NoteCard';

  const News = () => {
    const[cardData, setCardData] = useState({articles: []});

    useEffect(() => {
        apiNews.getNews().then((response) =>{
            setCardData(response.data);
            console.log(response.data);
        });
    }, []);

  
    return (
        <Container>
            <h1>Notícias sobre Politica Brasil</h1>
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
  
  export default News;