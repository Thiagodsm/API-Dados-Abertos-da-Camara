import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function NoteCard({ article }) {

  return (
    <Card style={{display:"block",textAlign: 'left' }} sx={{ maxWidth: 345 }} elevation={5}>
      <CardHeader sx={{maxHeight: 250}}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.title}
        subheader={new Date(article.published_date).toUTCString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={article.media === null ? require('../img/news-default-image.jpg') : article.media }
        alt="Paella dish"
      />
      <CardContent>
        {/*<Typography variant="body2" color="text.secondary">
          {article.summary}
      </Typography>*/}
      </CardContent>
      <CardActions disableSpacing>
      <Button size="small" href={article.link} target="_blank" sx={{alignItems:"flex-end"}}>Saiba mais</Button>
      </CardActions>
    </Card>
  );
}