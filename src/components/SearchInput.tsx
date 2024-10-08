import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameStore from '../store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const onSearch = useGameStore(s => s.onSearch);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) {
          navigate('/');
          onSearch(ref.current.value);

          ref.current.value = '';
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
