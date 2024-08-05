import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageURL from '../services/image-url';

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return null;

  return (
    <List>
      {isLoading
        ? skeletons.map(skeleton => (
            <ListItem key={skeleton} width="200px" mb={4}>
              <HStack width="200px" alignItems="-moz-initial">
                <Skeleton boxSize="32px" borderRadius={8} />
                <SkeletonText
                  width="100px"
                  noOfLines={1}
                  skeletonHeight="8"
                  borderRadius={8}
                  overflow="hidden"
                />
              </HStack>
            </ListItem>
          ))
        : genres.map(genre => (
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
