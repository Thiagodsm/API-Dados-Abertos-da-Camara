import React, {useState, useEffect} from 'react';
import apiNews from '../api/APIUtils';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Note from '../components/NoteCard';

  const News = () => {
    const[cardData, setCardData] = useState({articles: []});



    useEffect(() => {
        apiNews.getNewsEverything().then((response) =>{
            setCardData(response.data);
            console.log(response.data);
            console.log(response.data.articles);
            console.log(response.data.articles.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.title === value.title
                ))
            ));
        });
    }, []);

  
    return (
        <Container>
            <h1>Notícias sobre Politica no Brasil</h1>
            <Grid container spacing={3}>
            {cardData.articles.filter((value, index, self) => index === self.findIndex((t) => (t.title === value.title))).map((article, index) => (
                <Grid item key={index} xs={12} md={6} lg={4}>
                    <Note article={article} />
                </Grid>
            ))}

            </Grid>
        </Container>
    )
  };
  
  export default News;