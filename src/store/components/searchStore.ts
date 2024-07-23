import { create } from 'zustand';

interface SearchState {
	searchValue: string;
	setSearchValue: (searchValue: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
	searchValue: '',
	setSearchValue: (searchValue: string) => set({ searchValue }),
}));

export default useSearchStore;
