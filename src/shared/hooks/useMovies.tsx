import create from "zustand";

const useMovies = create((set: any) => ({
  movies: [],
  setMovies: (value: any) => set((state: any) => ({ movies: value })),
}));

export default useMovies;
