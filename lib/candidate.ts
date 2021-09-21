import create from "zustand"

type State = {
    dataPositionApplied: Array<string>;
    setPositionApplied: (dataPositionApplied: Array<string>) => void;
}

export const useStoreOption = create<State>((set) => ({
    dataPositionApplied: [],
    setPositionApplied: (data: any) => set(() => ({ dataPositionApplied: data }))
}))