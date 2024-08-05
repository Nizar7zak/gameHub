import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronBarDown } from 'react-icons/bs';

interface Props {
  selectedProperty: string;
  onSelectedProperty: (property: string) => void;
}
const SortSelector = ({ selectedProperty, onSelectedProperty }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find(
    order => order.value === selectedProperty
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order, index) => (
          <MenuItem key={index} onClick={() => onSelectedProperty(order.value)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
