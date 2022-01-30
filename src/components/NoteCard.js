import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function NoteCard({ article }) {

  return (
    <Card sx={{ maxWidth: 345 }} elevation={5}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.title}
        subheader={new Date(article.publishedAt).toUTCString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={article.urlToImage === null ? require('../img/news-default-image.jpg') : article.urlToImage }
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small">Saiba mais</Button>
      </CardActions>
    </Card>
  );
}
