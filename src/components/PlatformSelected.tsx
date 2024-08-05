import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatform, { Platform } from '../hooks/usePlatforms';

interface Props {
  selectedProperty: Platform | null;
  onSelectedProperty: (property: Platform) => void;
}

const PlatformSelected = ({ selectedProperty, onSelectedProperty }: Props) => {
  const { data: platforms, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedProperty?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map(platform => (
          <MenuItem
            onClick={() => onSelectedProperty(platform)}
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
