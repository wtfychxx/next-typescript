import create from "zustand"

type State = {
    dataReligion: Array<any>;
    setReligion: (dataReligion: Array<any>) => void;
    dataPositionApplied: Array<any>;
    setPositionApplied: (dataPositionApplied: Array<any>) => void;
    dataGender: Array<any>;
    setGender: (dataPositionApplied: Array<any>) => void;
    dataBirthCity: Array<any>;
    setBirthCity: (dataBirthCity: Array<any>) => void;
    dataNationality: Array<any>;
    setNationality: (dataNationality: Array<any>) => void;
    dataBank: Array<any>;
    setBank: (dataBank: Array<any>) => void;
    dataBloodType: Array<any>;
    setBloodType: (dataBloodType: Array<any>) => void;
    dataMaritalStatus: Array<any>;
    setMaritalStatus: (dataMaritalStatus: Array<any>) => void;
    dataTaxType: Array<any>;
    setTaxType: (dataTaxType: Array<any>) => void;
    dataStayedStatus: Array<any>;
    setStayedStatus: (datastayedStatus: Array<any>) => void;
    dataFamilyRelationship: Array<any>;
    setFamilyRelationship: (dataFamilyRelationship: Array<any>) => void;
    dataFamilyStatus: Array<any>;
    setFamilyStatus: (dataFamilyStatus: Array<any>) => void;
    dataEducation: Array<any>;
    setEducation: (dataEducation: Array<any>) => void;
    dataOccupation: Array<any>;
    setOccupation: (dataOccupation: Array<any>) => void;
    dataMajor: Array<any>;
    setMajor: (dataMajor: Array<any>) => void;
    dataEducationInstantion: Array<any>;
    setEducationInstantion: (dataEducationInstantion: Array<any>) => void;
    dataBusinessLine: Array<any>;
    setBusinessLine: (dataBusinessLine: Array<any>) => void;
    dataTerminationType: Array<any>;
    setTerminationType: (dataTerminationType: Array<any>) => void;
    dataSkillLanguage: Array<any>;
    setSkillLanguage: (dataSkillLanguage: Array<any>) => void;
    dataSkillLevel: Array<any>;
    setSkillLevel: (dataSkillLevel: Array<any>) => void;
    dataWorkLocation: Array<any>;
    setWorkLocation: (dataWorkLocation: Array<any>) => void;
    dataExistsOrNo: Array<any>;
    setExistsOrNo: (dataExistsOrNo: Array<any>) => void;
}

export const useStoreOption = create<State>((set) => ({
    dataReligion: [],
    setReligion: (data: any) => set(() => ({ dataReligion: data })),
    dataPositionApplied: [],
    setPositionApplied: (data: any) => set(() => ({ dataPositionApplied: data })),
    dataGender: [],
    setGender: (data: any) => set(() => ({dataGender: data})),
    dataBirthCity: [],
    setBirthCity: (data: any) => set(() => ({dataBirthCity: data})),
    dataNationality: [],
    setNationality: (data: any) => set(() => ({dataNationality: data})),
    dataBank: [],
    setBank: (data: any) => set(() => ({dataBank: data})),
    dataBloodType: [],
    setBloodType: (data: any) => set(() => ({dataBloodType: data})),
    dataMaritalStatus: [],
    setMaritalStatus: (data: any) => set(() => ({dataMaritalStatus: data})),
    dataTaxType: [],
    setTaxType: (data: any) => set(() => ({dataTaxType: data})),
    dataStayedStatus: [],
    setStayedStatus: (data: any) => set(() => ({dataStayedStatus: data})),
    dataFamilyRelationship: [],
    setFamilyRelationship: (data: any) => set(() => ({dataFamilyRelationship: data})),
    dataFamilyStatus: [],
    setFamilyStatus: (data: any) => set(() => ({dataFamilyStatus: data})),
    dataEducation: [],
    setEducation: (data: any) => set(() => ({dataEducation: data})),
    dataOccupation: [],
    setOccupation: (data: any) => set(() => ({dataOccupation: data})),
    dataMajor: [],
    setMajor: (data: any) => set(() => ({ dataMajor: data })),
    dataEducationInstantion: [],
    setEducationInstantion: (data: any) => set(() => ({dataEducationInstantion: data})),
    dataBusinessLine: [],
    setBusinessLine: (data: any) => set(() => ({dataBusinessLine: data})),
    dataTerminationType: [],
    setTerminationType: (data: any) => set(() => ({dataTerminationType: data})),
    dataSkillLanguage: [],
    setSkillLanguage: (data: any) => set(() => ({dataSkillLanguage: data})),
    dataSkillLevel: [],
    setSkillLevel: (data: any) => set(() => ({dataSkillLevel: data})),
    dataWorkLocation: [],
    setWorkLocation: (data: any) => set(() => ({dataWorkLocation: data})),
    dataExistsOrNo: [],
    setExistsOrNo: (data: any) => set(() => ({dataExistsOrNo: data})),
}))