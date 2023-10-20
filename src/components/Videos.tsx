import { Box, Stack } from '@mui/material';
import { Item } from '../utils/resultType';
import { VideoCard } from './VideoCard';

export const Videos: React.FC<{ videos: Item[] }> = ({ videos }) => {
  return (
    <Stack
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'start'}
      gap={2}
    >
      {videos.map((video, index) => (
        <Box key={index}>{video.id.videoId && <VideoCard video={video} />}</Box>
      ))}
    </Stack>
  );
};
