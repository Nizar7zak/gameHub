import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatforms';

interface Props {
  selectedPlatformId?: number;
  onSelectedPlatformId: (id: number) => void;
}

const PlatformSelected = ({
  selectedPlatformId,
  onSelectedPlatformId,
}: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;

  const getSelectedPlatformName = (platformId: number | undefined) =>
    data?.results.find(platform => platform.id === platformId)?.name;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {getSelectedPlatformName(selectedPlatformId) || 'Platforms'}
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
