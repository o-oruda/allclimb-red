import { ChangeEvent, SetStateAction, useState } from 'react';
import useSearchStore from 'store/components/searchStore';

const useSearch = () => {
	const { searchValue, setSearchValue } = useSearchStore();

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const resetSearchValue = () => {
		setSearchValue('');
	};

	return {
		searchValue,
		onChange,
		resetSearchValue,
	};
};

export default useSearch;
