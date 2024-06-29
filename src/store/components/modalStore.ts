import { create } from 'zustand';

interface ModalState {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
	id: string;
}

const useModalStore = create<ModalState>((set) => ({
	isOpen: false,
	openModal: () => set({ isOpen: true }),
	closeModal: () => set({ isOpen: false }),
	id: '',
}));

export default useModalStore;
