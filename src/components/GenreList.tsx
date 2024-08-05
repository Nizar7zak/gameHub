import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageURL from '../services/image-url';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <List>
      {genres.map(genre => (
        <ListItem key={genre.id} paddingY={1.5}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageURL(genre.image_background)}
            />
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
