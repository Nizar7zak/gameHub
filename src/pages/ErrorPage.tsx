import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <Box padding={10}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'sorry an unexpected error happened '}
        </Text>
      </Box>
    </div>
  );
};

export default ErrorPage;
