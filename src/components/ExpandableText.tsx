import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  text?: string;
  maxChar?: number;
}

const ExpandableText = ({ text = '', maxChar = 0 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const summarizeText = (
    text: string,
    maxChar: number,
    expandedState: boolean
  ) => (expandedState ? text : `${text.slice(0, maxChar)}... `);

  return (
    <>
      {text.length > maxChar ? (
        <Text>
          {summarizeText(text, maxChar, expanded)}
          <Button
            size="xs"
            ml={1}
            fontWeight="bold"
            colorScheme="yellow"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Show More'}
          </Button>
        </Text>
      ) : (
        <Text>{text}</Text>
      )}
    </>
  );
};

export default ExpandableText;
