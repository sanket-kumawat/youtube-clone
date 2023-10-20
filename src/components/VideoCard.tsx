import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Item } from '../utils/resultType';
import { Link } from 'react-router-dom';
import { demoVideoUrl } from '../utils/constants';

export const VideoCard: React.FC<{ video: Item }> = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant='subtitle1'
            fontWeight='bold'
            color='#fff'
          >
            {snippet.title.slice(0, 60)}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
