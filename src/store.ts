import { create } from 'zustand';

export interface Property {
  selectedGenreId?: number;
  selectedPlatformId?: number;
  selectedSort?: string;
  searchText?: string;
}

interface GameStore {
  property: Property;
  onSearch: (searchText: string) => void;
  onSelectedGenreId: (id: number) => void;
  onSelectedPlatformId: (id: number) => void;
  onSelectedSort: (property: string) => void;
}

const useGameStore = create<GameStore>(set => ({
  property: {} as Property,
  onSearch: searchText => set(() => ({ property: { searchText } })),
  onSelectedGenreId: id =>
    set(store => ({ property: { ...store.property, selectedGenreId: id } })),
  onSelectedPlatformId: id =>
    set(store => ({ property: { ...store.property, selectedPlatformId: id } })),
  onSelectedSort: property =>
    set(store => ({ property: { ...store.property, selectedSort: property } })),
}));

export default useGameStore;
