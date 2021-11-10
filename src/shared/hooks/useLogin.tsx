import create from "zustand";

const useLogin = create((set: any) => ({
  isLogin: false,
  setLogin: (value: any) => set((state: any) => ({ isLogin: value })),
}));

export default useLogin;
