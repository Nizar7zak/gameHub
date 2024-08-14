import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import usePlatform from '../hooks/usePlatform';
import useGameStore from '../store';

const PlatformSelected = () => {
  const { data, error } = usePlatforms();
  const selectedPlatformId = useGameStore(s => s.property.selectedPlatformId);
  const onSelectedPlatformId = useGameStore(s => s.onSelectedPlatformId);
  if (error) return null;

  const selectedPlatformName = usePlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatformName || 'Platforms'}
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
