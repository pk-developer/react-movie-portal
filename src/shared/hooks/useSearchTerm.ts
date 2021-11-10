import create from "zustand";

const useSearchTerms = create((set: any) => ({
  searchTerms: [],
  setSearchTerms: (value: any) => set((state: any) => ({ searchTerms: value })),
}));

export default useSearchTerms;
