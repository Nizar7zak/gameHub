import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms';

interface Props {
  selectedPlatformId: number | undefined;
  onSelectedPlatformId: (id: number) => void;
}

const PlatformSelected = ({ selectedPlatformId, onSelectedPlatformId }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {/* {selectedPlatformId?.name || 'Platforms'} */}
        Platforms

      </MenuButton>
      <MenuList>
        {data?.results.map(platform => (
          <MenuItem
            onClick={() => onSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelected;
