import moment from 'moment'
import type { NextPage } from 'next'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useStoreOption } from '../lib/candidate'
import { uploadFile } from '../lib/upload'
import { saveCandidate } from '../pages/api/candidate'

export interface isSignUpData{
    officialName: string;
    nickName: string;
    positionApplied: number;
    informationSource: string;
    birthCity: number;
    email: string;
    gender: string;
    nationality: number;
    birthDate: string;
    idCardNumber: number;
    phoneNumber: string;
    instagramAccount: string;
    bankName: number;
    whatsappAccount: string;
    accountNumber: number;
    linkedInAccount: string;
    height: number;
    weight: number;
    religion: number;
    ethnic: string;
    bloodType: number;
    maritalStatus: number;
    taxType: number;
    npwp: string;
    addressTax: string;
    birthDateFix: string;
    address1: string;
    address2: string;
    address3: string;
    city1: number;
    city2: number;
    city3: number;
    posCode1: number;
    posCode2: number;
    posCode3: number;
    addressPhoneNumber1: string;
    addressPhoneNumber2: string;
    addressPhoneNumber3: string;
    residenceSince1: number;
    residenceSince2: number;
    residenceSince3: number;
    stayedStatus1: number;
    stayedStatus2: number;
    stayedStatus3: number;
    relationName: string[];
    relationShip: number[];
    relationTelephone: string[];
    relationPhone: string[];
    relationStatus: number[];
    relationAddress: string[];
    familyRelationship: number[];
    familyRelationName: string[];
    familyRelationBirth: string[];
    familyRelationBirthFix: string[];
    familyRelationEducation: number[];
    familyRelationOccupation: number[];
    familyRelationStatus: number[];
    educationFormalGrade: number[];
    educationFormalInstitution: number[];
    educationFormalMajor: number[];
    educationFormalCity: number[];
    educationFormalStart: number[];
    educationFormalEnd: number[];
    educationFormalGpa: number[];
    educationUnformalType: number[];
    educationUnformalName: string[];
    educationUnformalCity: number[];
    educationUnformalStart: string[];
    educationUnformalEnd: string[];
    educationUnformalCertificate: number[];
    workshopTitle: string[];
    workshopName: number[];
    workshopCity: number[];
    workshopStart: string[];
    workshopStartFix: string[];
    workshopEnd: string[];
    workshopEndFix: string[];
    workshopCertificate: number[];
    organizationName: string[];
    organizationPosition: string[];
    organizationCity: number[];
    organizationStart: string[];
    organizationStartFix: string[];
    organizationEnd: string[];
    organizationEndFix: string[];
    languageName: string[];
    languageReading: number[];
    languageWriting: number[];
    languageListening: number[];
    languageSpeaking: number[];
    skillProgram: string[];
    skillApplication: string[];
    skillType: string[];
    skillDescription: string[];
    workExpName: string[];
    workExpAddress: string[];
    workExpBusinessField: number[];
    workExpPosition: string[];
    workExpTelephone: string[];
    workExpStart: string[];
    workExpStartFix: string[];
    workExpEnd: string[];
    workExpEndFix: string[];
    workExpDirectSupervisor: string[];
    workExpSalaryMonth: number[];
    workExpDirectPosition: string[];
    workExpLeavingReason: number[];
    workExpJobDescription: string[];
    jobTypePrefer: string;
    workLocationPrefer: number;
    startWorking: string;
    startWorkingFix: string;
    expectedSalary: number;
    expectedFacility: string;
    personKnow: string[];
    strength: string[];
    weakness: string[];
    ilnessStatus: number;
    ilness: string[];
    criminalStatus: number;
    criminal: string[];
    recruitmentStatus: string;
    othersThing: string;
    candidatePhoto: string;
    idCardPhoto: string;
    familyCardPhoto: string;
    certificatePhoto: string;
    taxPhoto: string;
    simPhoto: string;
    maritalCertificatePhoto: string;
    workExpPhoto: string;
    vaccinePhoto: string;
}

const Candidate: NextPage = () => {
    const { dataPositionApplied, dataGender, dataBirthCity, dataNationality, dataBank, dataBloodType, dataMaritalStatus, dataTaxType, dataStayedStatus, dataFamilyRelationship, dataFamilyStatus, dataEducation, dataOccupation, dataEducationInstantion, dataBusinessLine, dataTerminationType, dataSkillLanguage, dataSkillLevel, dataWorkLocation, dataExistsOrNo } = useStoreOption()

    const [signUpData, setSignUpData] = useState({
        officialName: "",
        nickName: "",
        positionApplied: "",
        positionAppliedName: "",
        informationSource: "",
        birthCity: "",
        birthCityName: "",
        email: "",
        gender: "",
        nationality: "",
        birthDate: new Date(),
        birthDateFix: moment(new Date()).format('YYYY-MM-DD'),
        idCardNumber: "",
        phoneNumber: "",
        instagramAccount: "",
        bank: "",
        bankName: "",
        whatsappAccount: "",
        accountNumber: "",
        linkedInAccount: "",
        height: "",
        weight: "",
        religion: "",
        ethnic: "",
        bloodType: "",
        maritalStatus: "",
        taxType: "",
        npwp: "",
        addressTax: "",
        address1: "",
        address2: "",
        address3: "",
        city1: "",
        cityName1: "",
        city2: "",
        cityName2: "",
        city3: "",
        cityName3: "",
        posCode1: "",
        posCode2: "",
        posCode3: "",
        addressPhoneNumber1: "",
        addressPhoneNumber2: "",
        addressPhoneNumber3: "",
        residenceSince1: "",
        residenceSince2: "",
        residenceSince3: "",
        stayedStatus1: "",
        stayedStatus2: "",
        stayedStatus3: "",
        contactName: [""],
        contactShip: [""],
        contactTelephone: [""],
        contactPhone: [""],
        contactStatus: [""],
        contactAddress: [""],
        familyRelationship: ["", ""],
        familyRelationName: ["", ""],
        familyRelationBirth: [new Date(), new Date()],
        familyRelationBirthFix: ["", ""],
        familyRelationEducation: ["", ""],
        familyRelationOccupation: ["", ""],
        familyRelationOccupationName: ["", ""],
        familyRelationStatus: ["", ""],
        educationFormalGrade: [""],
        educationFormalInstitution: [""],
        educationFormalInstitutionName: [""],
        educationFormalMajor: [""],
        educationFormalMajorName: [""],
        educationFormalCity: [""],
        educationFormalCityName: [""],
        educationFormalStart: [""],
        educationFormalEnd: [""],
        educationFormalGpa: [""],
        educationUnformalType: [""],
        educationUnformalName: [""],
        educationUnformalNameInstitution: [""],
        educationUnformalCity: [""],
        educationUnformalCityName: [""],
        educationUnformalStart: [new Date()],
        educationUnformalStartFix: [""],
        educationUnformalEnd: [new Date()],
        educationUnformalEndFix: [""],
        educationUnformalCertificate: ["No"],
        workshopTitle: [""],
        workshopName: [""],
        workshopNameInstitution: [""],
        workshopCity: [""],
        workshopCityName: [""],
        workshopStart: [new Date()],
        workshopStartFix: [""],
        workshopEnd: [new Date()],
        workshopEndFix: [""],
        workshopCertificate: [""],
        organizationName: [""],
        organizationPosition: [""],
        organizationCity: [""],
        organizationCityName: [""],
        organizationStart: [new Date()],
        organizationStartFix: [""],
        organizationEnd: [new Date()],
        organizationEndFix: [""],
        languageName: [""],
        languageReading: [""],
        languageWriting: [""],
        languageListening: [""],
        languageSpeaking: [""],
        skillProgram: [""],
        skillApplication: [""],
        skillType: [""],
        skillDescription: [""],
        workExpName: [""],
        workExpAddress: [""],
        workExpBusinessField: [""],
        workExpBusinessFieldName: [""],
        workExpPosition: [""],
        workExpTelephone: [""],
        workExpStart: [new Date()],
        workExpStartFix: [""],
        workExpEnd: [new Date()],
        workExpEndFix: [""],
        workExpDirectSupervisor: [""],
        workExpSalaryMonth: [""],
        workExpDirectPosition: [""],
        workExpLeavingReason: [""],
        workExpJobDescription: [""],
        jobTypePrefer: "",
        workLocationPrefer: "",
        startWorking: new Date(),
        startWorkingFix: moment(new Date()).format('YYYY-MM-DD'),
        expectedSalary: "",
        expectedFacility: "",
        personKnow: ["", "", ""],
        strength: [""],
        weakness: [""],
        ilnessStatus: "",
        ilness: ["", ""],
        criminalStatus: "",
        criminal: ["", ""],
        recruitmentStatus: "",
        othersThing: "",
        candidatePhoto: "",
        idCardPhoto: "",
        familyCardPhoto: "",
        certificatePhoto: "",
        taxPhoto: "",
        simPhoto: "",
        maritalCertificatePhoto: "",
        workExpPhoto: "",
        vaccinePhoto: ""
    })

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        signUpData.familyRelationBirth.map((entry, i) => {
            const temporary: string[] = signUpData.familyRelationBirthFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, familyRelationBirthFix: temporary})
        })

        signUpData.educationUnformalStart.map((entry, i) => {
            const temporary: string[] = signUpData.educationUnformalStartFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, educationUnformalStartFix: temporary})
        })

        signUpData.educationUnformalEnd.map((entry, i) => {
            const temporary: string[] = signUpData.educationUnformalEndFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, educationUnformalEndFix: temporary})
        })

        signUpData.workshopStart.map((entry, i) => {
            const temporary: string[] = signUpData.workshopStartFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, workshopStartFix: temporary})
        })

        signUpData.workshopEnd.map((entry, i) => {
            const temporary: string[] = signUpData.workshopEndFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, workshopEndFix: temporary})
        })

        signUpData.organizationStart.map((entry, i) => {
            const temporary: string[] = signUpData.organizationStartFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, organizationStartFix: temporary})
        })

        signUpData.organizationEnd.map((entry, i) => {
            const temporary: string[] = signUpData.organizationEndFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, organizationEndFix: temporary})
        })

        signUpData.workExpStart.map((entry, i) => {
            const temporary: string[] = signUpData.workExpStartFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, workExpStartFix: temporary})
        })

        signUpData.workExpEnd.map((entry, i) => {
            const temporary: string[] = signUpData.workExpEndFix

            temporary[i] = moment(entry).format('YYYY-MM-DD')

            setSignUpData({...signUpData, workExpEndFix: temporary})
        })

        const result = await saveCandidate(signUpData)
    }

    const cloneContact = () => {
        const contactNameDefault: string[] = signUpData.contactName
        contactNameDefault.push("")

        const contactShipDefault: string[] = signUpData.contactShip
        contactShipDefault.push("")

        const contactTelephoneDefault: string[] = signUpData.contactTelephone
        contactTelephoneDefault.push("")

        const contactPhoneDefault: string[] = signUpData.contactPhone
        contactPhoneDefault.push("")

        const contactStatusDefault: string[] = signUpData.contactStatus
        contactStatusDefault.push("")

        const contactAddressDefault: string[] = signUpData.contactAddress
        contactAddressDefault.push("")

        setSignUpData({
            ...signUpData,
            contactName: contactNameDefault,
            contactShip: contactShipDefault,
            contactTelephone: contactTelephoneDefault,
            contactPhone: contactPhoneDefault,
            contactStatus: contactStatusDefault,
            contactAddress: contactAddressDefault
        })
    }

    const cloneFamily = () => {
        const familyRelationshipDefault: string[] = signUpData.familyRelationship
        familyRelationshipDefault.push("")

        const familyRelationNameDefault: string[] = signUpData.familyRelationName
        familyRelationNameDefault.push("")

        const familyRelationBirthDefault: Date[] = signUpData.familyRelationBirth
        familyRelationBirthDefault.push(new Date())

        const familyRelationBirthFixDefault: string[] = signUpData.familyRelationBirthFix
        familyRelationBirthFixDefault.push("")

        const familyRelationEducationDefault: string[] = signUpData.familyRelationEducation
        familyRelationEducationDefault.push("")

        const familyRelationOccupationDefault: string[] = signUpData.familyRelationOccupation
        familyRelationOccupationDefault.push("")

        const familyRelationOccupationNameDefault: string[] = signUpData.familyRelationOccupationName
        familyRelationOccupationNameDefault.push("")

        const familyRelationStatusDefault: string[] = signUpData.familyRelationStatus
        familyRelationStatusDefault.push("")

        setSignUpData({
            ...signUpData,
            familyRelationship: familyRelationshipDefault,
            familyRelationName: familyRelationNameDefault,
            familyRelationBirth: familyRelationBirthDefault,
            familyRelationBirthFix: familyRelationBirthFixDefault,
            familyRelationEducation: familyRelationEducationDefault,
            familyRelationOccupation: familyRelationOccupationDefault,
            familyRelationOccupationName: familyRelationOccupationNameDefault,
            familyRelationStatus: familyRelationStatusDefault
        })
    }

    const cloneEducationFormal = () => {
        const educationFormalGradeDefault: string[] = signUpData.educationFormalGrade
        educationFormalGradeDefault.push("")
        
        const educationFormalInstitutionDefault: string[] = signUpData.educationFormalInstitution
        educationFormalInstitutionDefault.push("")

        const educationFormalInstitutionNameDefault: string[] = signUpData.educationFormalInstitutionName
        educationFormalInstitutionNameDefault.push("")
        
        const educationFormalMajorDefault: string[] = signUpData.educationFormalMajor
        educationFormalMajorDefault.push("")

        const educationFormalMajorNameDefault: string[] = signUpData.educationFormalMajorName
        educationFormalMajorNameDefault.push("")

        const educationFormalCityDefault: string[] = signUpData.educationFormalCity
        educationFormalCityDefault.push("")

        const educationFormalCityNameDefault: string[] = signUpData.educationFormalCityName
        educationFormalCityNameDefault.push("")

        const educationFormalStartDefault: string[] = signUpData.educationFormalStart
        educationFormalStartDefault.push("")

        const educationFormalEndDefault: string[] = signUpData.educationFormalEnd
        educationFormalEndDefault.push("")

        const educationFormalGpaDefault: string[] = signUpData.educationFormalGpa
        educationFormalGpaDefault.push("")

        setSignUpData({
            ...signUpData,
            educationFormalGrade: educationFormalGradeDefault,
            educationFormalInstitution: educationFormalInstitutionDefault,
            educationFormalInstitutionName: educationFormalInstitutionNameDefault,
            educationFormalMajor: educationFormalMajorDefault,
            educationFormalMajorName: educationFormalMajorNameDefault,
            educationFormalCity: educationFormalCityDefault,
            educationFormalCityName: educationFormalCityNameDefault,
            educationFormalStart: educationFormalStartDefault,
            educationFormalEnd: educationFormalEndDefault,
            educationFormalGpa: educationFormalGpaDefault
        })

    }

    const cloneEducationUnformal = () => {
        const educationUnformalTypeDefault: string[] = signUpData.educationUnformalType
        educationUnformalTypeDefault.push("")
        
        const educationUnformalNameDefault: string[] = signUpData.educationUnformalName
        educationUnformalNameDefault.push("")

        const educationUnformalNameInstitutionDefault: string[] = signUpData.educationUnformalNameInstitution
        educationUnformalNameInstitutionDefault.push("")
        
        const educationUnformalCityDefault: string[] = signUpData.educationUnformalCity
        educationUnformalCityDefault.push("")

        const educationUnformalCityNameDefault: string[] = signUpData.educationUnformalCityName
        educationUnformalCityNameDefault.push("")

        const educationUnformalStartDefault: Date[] = signUpData.educationUnformalStart
        educationUnformalStartDefault.push(new Date())

        const educationUnformalStartFixDefault: string[] = signUpData.educationUnformalStartFix
        educationUnformalStartFixDefault.push("")

        const educationUnformalEndDefault: Date[] = signUpData.educationUnformalEnd
        educationUnformalEndDefault.push(new Date())

        const educationUnformalEndFixDefault: string[] = signUpData.educationUnformalEndFix
        educationUnformalEndFixDefault.push("")

        const educationUnformalCertificateDefault: string[] = signUpData.educationUnformalCertificate
        educationUnformalCertificateDefault.push("No")

        setSignUpData({
            ...signUpData,
            educationUnformalType: educationUnformalTypeDefault,
            educationUnformalName: educationUnformalNameDefault,
            educationUnformalNameInstitution: educationUnformalNameInstitutionDefault,
            educationUnformalCity: educationUnformalCityDefault,
            educationUnformalCityName: educationUnformalCityNameDefault,
            educationUnformalStart: educationUnformalStartDefault,
            educationUnformalStartFix: educationUnformalStartFixDefault,
            educationUnformalEnd: educationUnformalEndDefault,
            educationUnformalEndFix: educationUnformalEndFixDefault,
            educationUnformalCertificate: educationUnformalCertificateDefault
        })

    }

    const cloneWorkshop = () => {
        const workshopTitleDefault: string[] = signUpData.workshopTitle
        workshopTitleDefault.push("")
        
        const workshopNameDefault: string[] = signUpData.workshopName
        workshopNameDefault.push("")

        const workshopNameInstitutionDefault: string[] = signUpData.workshopNameInstitution
        workshopNameInstitutionDefault.push("")
        
        const workshopCityDefault: string[] = signUpData.workshopCity
        workshopCityDefault.push("")
        
        const workshopCityNameDefault: string[] = signUpData.workshopCityName
        workshopCityNameDefault.push("")

        const workshopStartDefault: Date[] = signUpData.workshopStart
        workshopStartDefault.push(new Date())

        const workshopStartFixDefault: string[] = signUpData.workshopStartFix
        workshopStartFixDefault.push("")

        const workshopEndDefault: Date[] = signUpData.workshopEnd
        workshopEndDefault.push(new Date())

        const workshopEndFixDefault: string[] = signUpData.workshopEndFix
        workshopEndFixDefault.push("")

        const workshopCertificateDefault: string[] = signUpData.workshopCertificate
        workshopCertificateDefault.push("No")

        setSignUpData({
            ...signUpData,
            workshopTitle: workshopTitleDefault,
            workshopName: workshopNameDefault,
            workshopNameInstitution: workshopNameInstitutionDefault,
            workshopCity: workshopCityDefault,
            workshopCityName: workshopCityNameDefault,
            workshopStart: workshopStartDefault,
            workshopStartFix: workshopStartFixDefault,
            workshopEnd: workshopEndDefault,
            workshopEndFix: workshopEndFixDefault,
            workshopCertificate: workshopCertificateDefault
        })

    }

    const cloneOrganization = () => {
        const organizationNameDefault: string[] = signUpData.organizationName
        organizationNameDefault.push("")
        
        const organizationPositionDefault: string[] = signUpData.organizationPosition
        organizationPositionDefault.push("")
        
        const organizationCityDefault: string[] = signUpData.organizationCity
        organizationCityDefault.push("")

        const organizationCityNameDefault: string[] = signUpData.organizationCityName
        organizationCityNameDefault.push("")

        const organizationStartDefault: Date[] = signUpData.organizationStart
        organizationStartDefault.push(new Date())

        const organizationStartFixDefault: string[] = signUpData.organizationStartFix
        organizationStartFixDefault.push("")

        const organizationEndDefault: Date[] = signUpData.organizationEnd
        organizationEndDefault.push(new Date())

        const organizationEndFixDefault: string[] = signUpData.organizationEndFix
        organizationEndFixDefault.push("")

        setSignUpData({
            ...signUpData,
            organizationName: organizationNameDefault,
            organizationPosition: organizationPositionDefault,
            organizationCity: organizationCityDefault,
            organizationCityName: organizationCityNameDefault,
            organizationStart: organizationStartDefault,
            organizationStartFix: organizationStartFixDefault,
            organizationEnd: organizationEndDefault,
            organizationEndFix: organizationEndFixDefault,
        })

    }

    const cloneLanguage = () => {
        const languageNameDefault: string[] = signUpData.languageName
        languageNameDefault.push("")
        
        const languageReadingDefault: string[] = signUpData.languageReading
        languageReadingDefault.push("")
        
        const languageWritingDefault: string[] = signUpData.languageWriting
        languageWritingDefault.push("")

        const languageListeningDefault:string[] = signUpData.languageListening
        languageListeningDefault.push("")

        const languageSpeakingDefault: string[] = signUpData.languageSpeaking
        languageSpeakingDefault.push("")


        setSignUpData({
            ...signUpData,
            languageName: languageNameDefault,
            languageReading: languageReadingDefault,
            languageWriting: languageWritingDefault,
            languageListening: languageListeningDefault,
            languageSpeaking: languageSpeakingDefault
        })
    }

    const cloneComputerSkill = () => {
        const skillProgramDefault: string[] = signUpData.skillProgram
        skillProgramDefault.push("")
        
        const skillApplicationDefault: string[] = signUpData.skillApplication
        skillApplicationDefault.push("")

        setSignUpData({
            ...signUpData,
            skillProgram: skillProgramDefault,
            skillApplication: skillApplicationDefault
        })
    }

    const cloneSkill = () => {
        const skillTypeDefault: string[] = signUpData.skillType
        skillTypeDefault.push("")
        
        const skillDescriptionDefault: string[] = signUpData.skillDescription
        skillDescriptionDefault.push("")

        setSignUpData({
            ...signUpData,
            skillType: skillTypeDefault,
            skillDescription: skillDescriptionDefault
        })
    }

    const cloneWorkExp = () => {
        const workExpNameDefault: string[] = signUpData.workExpName
        workExpNameDefault.push("")

        const workExpAddressDefault: string[] = signUpData.workExpAddress
        workExpAddressDefault.push("")

        const workExpBusinessFieldDefault: string[] = signUpData.workExpBusinessField
        workExpBusinessFieldDefault.push("")

        const workExpBusinessFieldNameDefault: string[] = signUpData.workExpBusinessFieldName
        workExpBusinessFieldNameDefault.push("")

        const workExpPositionDefault: string[] = signUpData.workExpPosition
        workExpPositionDefault.push("")

        const workExpTelephoneDefault: string[] = signUpData.workExpTelephone
        workExpTelephoneDefault.push("")
        
        const workExpStartDefault: Date[] = signUpData.workExpStart
        workExpStartDefault.push(new Date())
        
        const workExpStartFixDefault: string[] = signUpData.workExpStartFix
        workExpStartFixDefault.push("")
        
        const workExpEndDefault: Date[] = signUpData.workExpEnd
        workExpEndDefault.push(new Date())
        
        const workExpEndFixDefault: string[] = signUpData.workExpEndFix
        workExpEndFixDefault.push("")
        
        const workExpDirectSupervisorDefault: string[] = signUpData.workExpDirectSupervisor
        workExpDirectSupervisorDefault.push("")
        
        const workExpSalaryMonthDefault: string[] = signUpData.workExpSalaryMonth
        workExpSalaryMonthDefault.push("")
        
        const workExpDirectPositionDefault: string[] = signUpData.workExpDirectPosition
        workExpDirectPositionDefault.push("")
        
        const workExpLeavingReasonDefault: string[] = signUpData.workExpLeavingReason
        workExpLeavingReasonDefault.push("")
        
        const workExpJobDescriptionDefault: string[] = signUpData.workExpJobDescription
        workExpJobDescriptionDefault.push("")

        setSignUpData({
            ...signUpData,
            workExpName: workExpNameDefault,
            workExpAddress: workExpAddressDefault,
            workExpBusinessField: workExpBusinessFieldDefault,
            workExpBusinessFieldName: workExpBusinessFieldNameDefault,
            workExpPosition: workExpPositionDefault,
            workExpTelephone: workExpTelephoneDefault,
            workExpStart: workExpStartDefault,
            workExpStartFix: workExpStartFixDefault,
            workExpEnd: workExpEndDefault,
            workExpEndFix: workExpEndFixDefault,
            workExpDirectSupervisor: workExpDirectSupervisorDefault,
            workExpSalaryMonth: workExpSalaryMonthDefault,
            workExpDirectPosition: workExpDirectPositionDefault,
            workExpLeavingReason: workExpLeavingReasonDefault,
            workExpJobDescription: workExpJobDescriptionDefault
        })
    }

    const deleteContact = () => {
        const cloneLengthName: number = signUpData.contactName.length
        const afterName = signUpData.contactName.slice(0, cloneLengthName - 1)

        const cloneLengthShip: number = signUpData.contactShip.length
        const afterShip = signUpData.contactShip.slice(0, cloneLengthShip - 1)

        const cloneLengthTelephone: number = signUpData.contactTelephone.length
        const afterTelephone = signUpData.contactTelephone.slice(0, cloneLengthTelephone - 1)

        const cloneLengthPhone: number = signUpData.contactPhone.length
        const afterPhone = signUpData.contactPhone.slice(0, cloneLengthPhone - 1)

        const cloneLengthStatus: number = signUpData.contactStatus.length
        const afterStatus = signUpData.contactStatus.slice(0, cloneLengthStatus - 1)

        const cloneLengthAddress: number = signUpData.contactAddress.length
        const afterAddress = signUpData.contactAddress.slice(0, cloneLengthAddress - 1)

        setSignUpData({
            ...signUpData,
            contactName: afterName,
            contactShip: afterShip,
            contactTelephone: afterTelephone,
            contactPhone: afterPhone,
            contactStatus: afterStatus,
            contactAddress: afterAddress
        })

    }

    const deleteFamily = () => {
        const familyLengthRelationship: number = signUpData.familyRelationship.length
        const afterRelationship = signUpData.familyRelationship.slice(0, familyLengthRelationship - 1)

        const familyLengthName: number = signUpData.familyRelationName.length
        const afterName = signUpData.familyRelationName.slice(0, familyLengthName - 1)

        const familyLengthBirth: number = signUpData.familyRelationBirth.length
        const afterBirth = signUpData.familyRelationBirth.slice(0, familyLengthBirth - 1)

        const familyLengthEducation: number = signUpData.familyRelationEducation.length
        const afterEducation = signUpData.familyRelationEducation.slice(0, familyLengthEducation - 1)

        const familyLengthOccupation: number = signUpData.familyRelationOccupation.length
        const afterOccupation = signUpData.familyRelationOccupation.slice(0, familyLengthOccupation - 1)

        const familyLengthOccupationName: number = signUpData.familyRelationOccupationName.length
        const afterOccupationName = signUpData.familyRelationOccupationName.slice(0, familyLengthOccupationName - 1)

        const familyLengthStatus: number = signUpData.familyRelationStatus.length
        const afterStatus = signUpData.familyRelationStatus.slice(0, familyLengthStatus - 1)

        setSignUpData({
            ...signUpData,
            familyRelationship: afterRelationship,
            familyRelationName: afterName,
            familyRelationBirth: afterBirth,
            familyRelationEducation: afterEducation,
            familyRelationOccupation: afterOccupation,
            familyRelationOccupationName: afterOccupationName,
            familyRelationStatus: afterStatus
        })

    }

    const deleteEducationFormal = () => {
        const educationFormalGradeLength: number = signUpData.educationFormalGrade.length
        const afterGrade = signUpData.educationFormalGrade.slice(0, educationFormalGradeLength - 1)

        const educationFormalInstitutionLength: number = signUpData.educationFormalInstitution.length
        const afterInstitution = signUpData.educationFormalInstitution.slice(0, educationFormalInstitutionLength - 1)

        const educationFormalInstitutionNameLength: number = signUpData.educationFormalInstitutionName.length
        const afterInstitutionName = signUpData.educationFormalInstitutionName.slice(0, educationFormalInstitutionNameLength - 1)

        const educationFormalMajorLength: number = signUpData.educationFormalMajor.length
        const afterMajor = signUpData.educationFormalMajor.slice(0, educationFormalMajorLength - 1)

        const educationFormalMajorNameLength: number = signUpData.educationFormalMajorName.length
        const afterMajorName = signUpData.educationFormalMajorName.slice(0, educationFormalMajorNameLength - 1)

        const educationFormalCity: number = signUpData.educationFormalCity.length
        const afterCity = signUpData.educationFormalCity.slice(0, educationFormalCity - 1)
        
        const educationFormalCityName: number = signUpData.educationFormalCityName.length
        const afterCityName = signUpData.educationFormalCityName.slice(0, educationFormalCityName - 1)

        const educationFormalStartLength: number = signUpData.educationFormalStart.length
        const afterStart = signUpData.educationFormalStart.slice(0, educationFormalStartLength - 1)

        const educationFormalEndLength: number = signUpData.educationFormalEnd.length
        const afterEnd = signUpData.educationFormalEnd.slice(0, educationFormalEndLength - 1)

        const educationFormalGpaLength: number = signUpData.educationFormalGpa.length
        const afterGpa = signUpData.educationFormalGpa.slice(0, educationFormalGpaLength - 1)

        setSignUpData({
            ...signUpData,
            educationFormalGrade: afterGrade,
            educationFormalInstitution: afterInstitution,
            educationFormalInstitutionName: afterInstitutionName,
            educationFormalMajor: afterMajor,
            educationFormalMajorName: afterMajorName,
            educationFormalCity: afterCity,
            educationFormalCityName: afterCityName,
            educationFormalStart: afterStart,
            educationFormalEnd: afterEnd,
            educationFormalGpa: afterGpa
        })

    }
    
    const deleteEducationUnformal = () => {
        const educationUnformalTypeLength: number = signUpData.educationUnformalType.length
        const afterType = signUpData.educationUnformalType.slice(0, educationUnformalTypeLength - 1)
        
        const educationUnformalNameLength: number = signUpData.educationUnformalName.length
        const afterName = signUpData.educationUnformalName.slice(0, educationUnformalNameLength - 1)
        
        const educationUnformalCityLength: number = signUpData.educationUnformalCity.length
        const afterCity = signUpData.educationUnformalCity.slice(0, educationUnformalCityLength - 1)

        const educationUnformalStartLength: number = signUpData.educationUnformalStart.length
        const afterStart = signUpData.educationUnformalStart.slice(0, educationUnformalStartLength - 1)

        const educationUnformalStartFixLength: number = signUpData.educationUnformalStartFix.length
        const afterStartFix = signUpData.educationUnformalStartFix.slice(0, educationUnformalStartFixLength - 1)

        const educationUnformalEndLength: number = signUpData.educationUnformalEnd.length
        const afterEnd = signUpData.educationUnformalEnd.slice(0, educationUnformalEndLength - 1)

        const educationUnformalEndFixLength: number = signUpData.educationUnformalEndFix.length
        const afterEndFix = signUpData.educationUnformalEndFix.slice(0, educationUnformalEndFixLength - 1)

        const educationUnformalCertificateLength: number = signUpData.educationUnformalCertificate.length
        const afterCertificate = signUpData.educationUnformalCertificate.slice(0, educationUnformalCertificateLength - 1)

        setSignUpData({
            ...signUpData,
            educationUnformalType: afterType,
            educationUnformalName: afterName,
            educationUnformalCity: afterCity,
            educationUnformalStart: afterStart,
            educationUnformalStartFix: afterStartFix,
            educationUnformalEnd: afterEnd,
            educationUnformalEndFix: afterEndFix,
            educationUnformalCertificate: afterCertificate
        })

    }

    const deleteWorkshop = () => {
        const workshopTitleLength: number = signUpData.workshopTitle.length
        const afterTitle = signUpData.workshopTitle.slice(0, workshopTitleLength - 1)
        
        const workshopNameLength: number = signUpData.workshopName.length
        const afterName = signUpData.workshopName.slice(0, workshopNameLength - 1)

        const workshopNameInstitutionLength: number = signUpData.workshopNameInstitution.length
        const afterNameInstitution = signUpData.workshopNameInstitution.slice(0, workshopNameInstitutionLength - 1)
        
        const workshopCityLength: number = signUpData.workshopCity.length
        const afterCity = signUpData.workshopCity.slice(0, workshopCityLength - 1)

        const workshopCityNameLength: number = signUpData.workshopCityName.length
        const afterCityName = signUpData.workshopCityName.slice(0, workshopCityNameLength - 1)

        const workshopStartLength: number = signUpData.workshopStart.length
        const afterStart = signUpData.workshopStart.slice(0, workshopStartLength - 1)

        const workshopStartFixLength: number = signUpData.workshopStartFix.length
        const afterStartFix = signUpData.workshopStartFix.slice(0, workshopStartFixLength - 1)

        const workshopEndLength: number = signUpData.workshopEnd.length
        const afterEnd = signUpData.workshopEnd.slice(0, workshopEndLength - 1)

        const workshopEndFixLength: number = signUpData.workshopEndFix.length
        const afterEndFix = signUpData.workshopEndFix.slice(0, workshopEndFixLength - 1)

        const workshopCertificateLength: number = signUpData.workshopCertificate.length
        const afterCertificate = signUpData.workshopCertificate.slice(0, workshopCertificateLength - 1)

        setSignUpData({
            ...signUpData,
            workshopTitle: afterTitle,
            workshopName: afterName,
            workshopNameInstitution: afterNameInstitution,
            workshopCity: afterCity,
            workshopCityName: afterCityName,
            workshopStart: afterStart,
            workshopStartFix: afterStartFix,
            workshopEnd: afterEnd,
            workshopEndFix: afterEndFix,
            workshopCertificate: afterCertificate
        })

    }

    const deleteOrganization = () => {
        const organizationNameLength: number = signUpData.organizationName.length
        const afterTitle = signUpData.organizationName.slice(0, organizationNameLength - 1)
        
        const organizationPositionLength: number = signUpData.organizationPosition.length
        const afterName = signUpData.organizationPosition.slice(0, organizationPositionLength - 1)
        
        const organizationCityLength: number = signUpData.organizationCity.length
        const afterCity = signUpData.organizationCity.slice(0, organizationCityLength - 1)

        const organizationCityNameLength: number = signUpData.organizationCityName.length
        const afterCityName = signUpData.organizationCityName.slice(0, organizationCityNameLength - 1)

        const organizationStartLength: number = signUpData.organizationStart.length
        const afterStart = signUpData.organizationStart.slice(0, organizationStartLength - 1)

        const organizationStartFixLength: number = signUpData.organizationStartFix.length
        const afterStartFix = signUpData.organizationStartFix.slice(0, organizationStartFixLength - 1)

        const organizationEndLength: number = signUpData.organizationEnd.length
        const afterEnd = signUpData.organizationEnd.slice(0, organizationEndLength - 1)

        const organizationEndFixLength: number = signUpData.organizationEndFix.length
        const afterEndFix = signUpData.organizationEndFix.slice(0, organizationEndFixLength - 1)

        setSignUpData({
            ...signUpData,
            organizationName: afterTitle,
            organizationPosition: afterName,
            organizationCity: afterCity,
            organizationCityName: afterCityName,
            organizationStart: afterStart,
            organizationStartFix: afterStartFix,
            organizationEnd: afterEnd,
            organizationEndFix: afterEndFix,
        })

    }

    const deleteLanguage = () => {
        const languageNameLength: number = signUpData.languageName.length
        const afterName = signUpData.languageName.slice(0, languageNameLength - 1)
        
        const languageReadingLength: number = signUpData.languageReading.length
        const afterReading = signUpData.languageReading.slice(0, languageReadingLength - 1)
        
        const languageWritingLength: number = signUpData.languageWriting.length
        const afterWriting = signUpData.languageWriting.slice(0, languageWritingLength - 1)

        const languageListeningLength: number = signUpData.languageListening.length
        const afterListening = signUpData.languageListening.slice(0, languageListeningLength - 1)

        const languageSpeakingLength: number = signUpData.languageSpeaking.length
        const afterSpeaking = signUpData.languageSpeaking.slice(0, languageSpeakingLength - 1)

        setSignUpData({
            ...signUpData,
            languageName: afterName,
            languageReading: afterReading,
            languageWriting: afterWriting,
            languageListening: afterListening,
            languageSpeaking: afterSpeaking
        })

    }

    const deleteComputerSkill = () => {
        const skillProgramLength: number = signUpData.skillProgram.length
        const afterProgram = signUpData.skillProgram.slice(0, skillProgramLength - 1)
        
        const skillApplicationLength: number = signUpData.skillApplication.length
        const afterApplication = signUpData.skillApplication.slice(0, skillApplicationLength - 1)

        setSignUpData({
            ...signUpData,
            skillProgram: afterProgram,
            skillApplication: afterApplication
        })

    }

    const deleteSkill = () => {
        const skillTypeLength: number = signUpData.skillType.length
        const afterType = signUpData.skillType.slice(0, skillTypeLength - 1)
        
        const skillDescriptionLength: number = signUpData.skillDescription.length
        const afterDescription = signUpData.skillDescription.slice(0, skillDescriptionLength - 1)

        setSignUpData({
            ...signUpData,
            skillType: afterType,
            skillDescription: afterDescription
        })

    }

    const deleteWorkExp = () => {
        const workExpNameLength: number = signUpData.workExpName.length
        const afterName = signUpData.workExpName.slice(0, workExpNameLength - 1)

        const workExpAddressLength: number = signUpData.workExpAddress.length
        const afterAddress = signUpData.workExpAddress.slice(0, workExpAddressLength - 1)
        
        const workExpBusinessFieldLength: number = signUpData.workExpBusinessField.length
        const afterBusinessField = signUpData.workExpBusinessField.slice(0, workExpBusinessFieldLength - 1)

        const workExpBusinessFieldNameLength: number = signUpData.workExpBusinessFieldName.length
        const afterBusinessFieldName = signUpData.workExpBusinessFieldName.slice(0, workExpBusinessFieldNameLength - 1)
        
        const workExpPositionLength: number = signUpData.workExpPosition.length
        const afterPosition = signUpData.workExpPosition.slice(0, workExpPositionLength - 1)

        const workExpTelephoneLength: number = signUpData.workExpTelephone.length
        const afterTelephone = signUpData.workExpTelephone.slice(0, workExpTelephoneLength - 1)
        
        const workExpStartLength: number = signUpData.workExpStart.length
        const afterStart = signUpData.workExpStart.slice(0, workExpStartLength - 1)
        
        const workExpStartFixLength: number = signUpData.workExpStartFix.length
        const afterStartFix = signUpData.workExpStartFix.slice(0, workExpStartFixLength - 1)
        
        const workExpEndLength: number = signUpData.workExpEnd.length
        const afterEnd = signUpData.workExpEnd.slice(0, workExpEndLength - 1)
        
        const workExpEndFixLength: number = signUpData.workExpEndFix.length
        const afterEndFix = signUpData.workExpEndFix.slice(0, workExpEndFixLength - 1)
        
        const workExpDirectSupervisorLength: number = signUpData.workExpDirectSupervisor.length
        const afterDirectSupervisor = signUpData.workExpDirectSupervisor.slice(0, workExpDirectSupervisorLength - 1)
        
        const workExpSalaryMonthLength: number = signUpData.workExpSalaryMonth.length
        const afterSalaryMonth = signUpData.workExpSalaryMonth.slice(0, workExpSalaryMonthLength - 1)
        
        const workExpDirectPositionLength: number = signUpData.workExpDirectPosition.length
        const afterDirectPosition = signUpData.workExpDirectPosition.slice(0, workExpDirectPositionLength - 1)
        
        const workExpLeavingReasonLength: number = signUpData.workExpLeavingReason.length
        const afterLeavingReason = signUpData.workExpLeavingReason.slice(0, workExpLeavingReasonLength - 1)
        
        const workExpJobDescriptionLength: number = signUpData.workExpJobDescription.length
        const afterJobDescription = signUpData.workExpJobDescription.slice(0, workExpJobDescriptionLength - 1)  
        
        setSignUpData({
            ...signUpData,
            workExpName: afterName,
            workExpAddress: afterAddress,
            workExpBusinessField: afterBusinessField,
            workExpBusinessFieldName: afterBusinessFieldName,
            workExpPosition: afterPosition,
            workExpTelephone: afterTelephone,
            workExpStart: afterStart,
            workExpStartFix: afterStartFix,
            workExpEnd: afterEnd,
            workExpEndFix: afterEndFix,
            workExpDirectSupervisor: afterDirectSupervisor,
            workExpSalaryMonth: afterSalaryMonth,
            workExpDirectPosition: afterDirectPosition,
            workExpLeavingReason: afterLeavingReason,
            workExpJobDescription: afterJobDescription
        })

    }

    const changeNewContact = (id: number=0, stateName: string[] | undefined= [], type: string = "", value: string= "") => {
        const temporary:string[] = stateName
        temporary[id] = value
        switch(type){
            case 'contactName':
                setSignUpData({...signUpData, contactName: temporary})
            break
            case 'contactShip':
                setSignUpData({...signUpData, contactShip: temporary})
            break
            case 'contactTelephone':
                setSignUpData({...signUpData, contactTelephone: temporary})
            break
            case 'contactPhone':
                setSignUpData({...signUpData, contactPhone: temporary})
            break
            case 'contactStatus':
                setSignUpData({...signUpData, contactStatus: temporary})
            break
            case 'contactAddress':
                setSignUpData({...signUpData, contactAddress: temporary})
            break
        }
    }

    const changeNewFamily = (id: number=0, stateName: any[]= [], type: string = "", value: any= "") => {
        const temporary:any[] = stateName

        temporary[id] = value
        switch(type){
            case 'familyRelationship':
                setSignUpData({...signUpData, familyRelationship: temporary})
            break
            case 'familyRelationName':
                setSignUpData({...signUpData, familyRelationName: temporary})
            break
            case 'familyRelationBirth':
                setSignUpData({...signUpData, familyRelationBirth: temporary})
            break
            case 'familyRelationEducation':
                setSignUpData({...signUpData, familyRelationEducation: temporary})
            break
            case 'familyRelationOccupation':
                setSignUpData({...signUpData, familyRelationOccupation: temporary})
            break
            case 'familyRelationOccupationName':
                setSignUpData({...signUpData, familyRelationOccupationName: temporary})
            break
            case 'familyRelationStatus':
                setSignUpData({...signUpData, familyRelationStatus: temporary})
            break
        }
    }

    const changeNewEduFormal = (id: number = 0, stateName: string[], type: string = "", value: string = "") => {
        const temporary:string[] = stateName

        temporary[id] = value
        switch(type){
            case 'educationFormalGrade':
                setSignUpData({...signUpData, educationFormalGrade: temporary})
            break
            case 'educationFormalInstitution':
                setSignUpData({...signUpData, educationFormalInstitution: temporary})
            break
            case 'educationFormalInstitutionName':
                setSignUpData({...signUpData, educationFormalInstitutionName: temporary})
            break
            case 'educationFormalMajor':
                setSignUpData({...signUpData, educationFormalMajor: temporary})
            break
            case 'educationFormalMajorName':
                setSignUpData({...signUpData, educationFormalMajorName: temporary})
            break
            case 'educationFormalCity':
                setSignUpData({...signUpData, educationFormalCity: temporary})
            break
            case 'educationFormalCityName':
                setSignUpData({...signUpData, educationFormalCityName: temporary})
            break
            case 'educationFormalStart':
                setSignUpData({...signUpData, educationFormalStart: temporary})
            break
            case 'educationFormalEnd':
                setSignUpData({...signUpData, educationFormalEnd: temporary})
            break
            case 'educationFormalGpa':
                setSignUpData({...signUpData, educationFormalGpa: temporary})
            break
        }
    }

    const changeNewEduUnformal = (id: number = 0, stateName: any[], type: string = "", value: any = "") => {
        const temporary:any[] = stateName

        temporary[id] = value
        switch(type){
            case 'educationUnformalType':
                setSignUpData({...signUpData, educationUnformalType: temporary})
            break
            case 'educationUnformalName':
                setSignUpData({...signUpData, educationUnformalName: temporary})
            break
            case 'educationUnformalNameInstitution':
                setSignUpData({...signUpData, educationUnformalNameInstitution: temporary})
            break
            case 'educationUnformalCity':
                setSignUpData({...signUpData, educationUnformalCity: temporary})
            break
            case 'educationUnformalCityName':
                setSignUpData({...signUpData, educationUnformalCityName: temporary})
            break
            case 'educationUnformalStart':
                setSignUpData({...signUpData, educationUnformalStart: temporary})
            break
            case 'educationUnformalEnd':
                setSignUpData({...signUpData, educationUnformalEnd: temporary})
            break
            case 'educationUnformalCertificate':
                setSignUpData({...signUpData, educationUnformalCertificate: temporary})
            break
        }
    }

    const changeNewWorkshop = (id: number = 0, stateName: any[], type: string = "", value: any = "") => {
        const temporary:any[] = stateName

        temporary[id] = value
        switch(type){
            case 'workshopTitle':
                setSignUpData({...signUpData, workshopTitle: temporary})
            break
            case 'workshopName':
                setSignUpData({...signUpData, workshopName: temporary})
            break
            case 'workshopNameInstitution':
                setSignUpData({...signUpData, workshopNameInstitution: temporary})
            break
            case 'workshopCity':
                setSignUpData({...signUpData, workshopCity: temporary})
            break
            case 'workshopCityName':
                setSignUpData({...signUpData, workshopCityName: temporary})
            break
            case 'workshopStart':
                setSignUpData({...signUpData, workshopStart: temporary})
            break
            case 'workshopEnd':
                setSignUpData({...signUpData, workshopEnd: temporary})
            break
            case 'workshopCertificate':
                setSignUpData({...signUpData, workshopCertificate: temporary})
            break
        }
    }

    const changeNewOrganization = (id: number = 0, stateName: any[], type: string = "", value: any = "") => {
        const temporary:any[] = stateName

        temporary[id] = value
        switch(type){
            case 'organizationName':
                setSignUpData({...signUpData, organizationName: temporary})
            break
            case 'organizationPosition':
                setSignUpData({...signUpData, organizationPosition: temporary})
            break
            case 'organizationCity':
                setSignUpData({...signUpData, organizationCity: temporary})
            break
            case 'organizationCityName':
                setSignUpData({...signUpData, organizationCityName: temporary})
            break
            case 'organizationStart':
                setSignUpData({...signUpData, organizationStart: temporary})
            break
            case 'organizationEnd':
                setSignUpData({...signUpData, organizationEnd: temporary})
            break
        }
    }

    const changeNewLanguage = (id: number = 0, stateName: string[], type: string = "", value: string = "") => {
        const temporary:string[] = stateName

        temporary[id] = value
        switch(type){
            case 'languageName':
                setSignUpData({...signUpData, languageName: temporary})
            break
            case 'languageReading':
                setSignUpData({...signUpData, languageReading: temporary})
            break
            case 'languageWriting':
                setSignUpData({...signUpData, languageWriting: temporary})
            break
            case 'languageListening':
                setSignUpData({...signUpData, languageListening: temporary})
            break
            case 'languageSpeaking':
                setSignUpData({...signUpData, languageSpeaking: temporary})
            break
        }
    }

    const changeNewComputerSkill = (id: number = 0, stateName: string[], type: string = "", value: string = "") => {
        const temporary:string[] = stateName

        temporary[id] = value
        switch(type){
            case 'skillProgram':
                setSignUpData({...signUpData, skillProgram: temporary})
            break
            case 'skillApplication':
                setSignUpData({...signUpData, skillApplication: temporary})
            break
        }
    }

    const changeNewSkill = (id: number = 0, stateName: string[], type: string = "", value: string = "") => {
        const temporary:string[] = stateName

        temporary[id] = value
        switch(type){
            case 'skillType':
                setSignUpData({...signUpData, skillType: temporary})
            break
            case 'skillDescription':
                setSignUpData({...signUpData, skillDescription: temporary})
            break
        }
    }

    const changeNewWorkExp = (id: number = 0, stateName: any[], type: string = "", value: any = "") => {
        const temporary:any[] = stateName

        temporary[id] = value
        switch(type){
            case 'workExpName':
                setSignUpData({...signUpData, workExpName: temporary})
            break
            case 'workExpAddress':
                setSignUpData({...signUpData, workExpAddress: temporary})
            break
            case 'workExpBusinessField':
                setSignUpData({...signUpData, workExpBusinessField: temporary})
            break
            case 'workExpBusinessFieldName':
                setSignUpData({...signUpData, workExpBusinessFieldName: temporary})
            break
            case 'workExpPosition':
                setSignUpData({...signUpData, workExpPosition: temporary})
            break
            case 'workExpTelephone':
                setSignUpData({...signUpData, workExpTelephone: temporary})
            break
            case 'workExpStart':
                setSignUpData({...signUpData, workExpStart: temporary})
            break
            case 'workExpStartFix':
                setSignUpData({...signUpData, workExpStartFix: temporary})
            break
            case 'workExpEnd':
                setSignUpData({...signUpData, workExpEnd: temporary})
            break
            case 'workExpEndFix':
                setSignUpData({...signUpData, workExpEndFix: temporary})
            break
            case 'workExpDirectSupervisor':
                setSignUpData({...signUpData, workExpDirectSupervisor: temporary})
            break
            case 'workExpSalaryMonth':
                setSignUpData({...signUpData, workExpSalaryMonth: temporary})
            break
            case 'workExpDirectPosition':
                setSignUpData({...signUpData, workExpDirectPosition: temporary})
            break
            case 'workExpLeavingReason':
                setSignUpData({...signUpData, workExpLeavingReason: temporary})
            break
            case 'workExpJobDescription':
                setSignUpData({...signUpData, workExpJobDescription: temporary})
            break
        }
    }

    const changePhoto = (type: string = "", files: any = {}, element: any = {}) => {
        const match = ["image/jpeg", "image/png", "image/jpg", "application/pdf"]

        const fileType: string = files.type
        let isValid:boolean = false;

        match.map((entry) => {
            if(entry === fileType) isValid = true
        })

        const alertElement = document.createElement("span")
        alertElement.classList.add('text-red-500', 'text-sm', 'type-validation')

        if(!isValid){
            document.querySelector('.type-validation')?.remove()
            
            alertElement.innerHTML = 'Tipe file tidak didukung'
            element.parentNode.insertBefore(alertElement, element.nextSibling)
            element.value = ''
            return
        }

        if(files.size > 2048000){
            document.querySelector('.type-validation')?.remove()
            
            alertElement.innerHTML = 'File melebihi batas maximal (2Mb)'
            element.parentNode.insertBefore(alertElement, element.nextSibling)
            element.value = ''
            return
        }

        /*const reader = new FileReader()
        reader.readAsDataURL(files)
        reader.onload = () => {
            const response: any = reader.result
            const frameElement = document.querySelector(`#${type}Photo`)
            frameElement?.classList.remove('h-auto', 'w-auto')
            frameElement?.classList.add('h-auto', 'w-auto')
            frameElement?.setAttribute('src', response)
        }*/

        const file = uploadFile(files)
        fetch('https://api.cloudinary.com/v1_1/ayo-belajar-company/image/upload', file)
            .then(res => res.json())
            .then(res => {
                switch(type){
                    case 'candidate':
                        setSignUpData({...signUpData, candidatePhoto: res.secure_url})
                    break
                    case 'idCard':
                        setSignUpData({...signUpData, idCardPhoto: res.secure_url})
                    break
                    case 'familyCard':
                        setSignUpData({...signUpData, familyCardPhoto: res.secure_url})
                    break
                    case 'certificate':
                        setSignUpData({...signUpData, certificatePhoto: res.secure_url})
                    break
                    case 'taxType':
                        setSignUpData({...signUpData, taxPhoto: res.secure_url})
                    break
                    case 'sim':
                        setSignUpData({...signUpData, simPhoto: res.secure_url})
                    break
                    case 'maritalCertificate':
                        setSignUpData({...signUpData, maritalCertificatePhoto: res.secure_url})
                    break
                    case 'workExp':
                        setSignUpData({...signUpData, workExpPhoto: res.secure_url})
                    break
                    case 'vaccine':
                        setSignUpData({...signUpData, vaccinePhoto: res.secure_url})
                    break
                }
            })
            .catch(error => console.error(error))
    }

    const generateYearCombo = (startYear: number = 1960) => {
        const currentYear = new Date().getFullYear()
        const years = []
    
        while (startYear <= currentYear) {
            years.push({value: startYear, label: startYear})
            startYear++
        }

    
        return years.reverse()
    }
    
    return(
        <>
        <div className="mb-2 text-center text-white bg-gradient-to-r from-green-400 to-blue-400 rounded-t-md py-5">
            <h1 className="font-bold text-2xl"> Form Candidate HRMS </h1>
            {/* <p className="block font-thin italic text md">APPLICANT DATA FORM</p> */}
        </div>

        <div className="mb-2">
            <p className="block font-semibold p-2 text-sm">Formulir lamaran kerja ini akan saya isi dengan sejujur-jujurnya sesuai dengan kenyataan yang sebenarnya. Apabila dikemudian hari terdapat keterangan yang tidak benar, saya bersedia ditindak sesuai dengan ketentuan perusahaan yang berlaku.</p>
            {/* <p className="block-font font-thin p-2 text-xs italic">I hereby acknowledge that all information I will fill in this form are true and accurate to the best of my knowledge. Should there be any false information. I'm willing to receive any sanctions according to campany's regulation.</p> */}
        </div>

        <div className="mb-2 text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
            <p className="font-bold text-md">Jika pilihan isian tidak ada silahkan memilih pilihan Lain-lain / Others.</p>
            {/* <p className="font-thin text-sm italic">If there is no option value please choose Others.</p> */}
        </div>

        <form onSubmit={handleSubmit} method="POST">
            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lengkap (Sesuai KTP) <label className="text-red-500"> * </label></label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            name="officialName"
                            value={signUpData.officialName}
                            onChange={(e) => setSignUpData({...signUpData, officialName: e.target.value})}
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Panggilan </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.nickName}
                            onChange={(e) => setSignUpData({...signUpData, nickName: e.target.value})}
                        />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Posisi yang dilamar <label className="text-red-500"> * </label></label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.positionApplied}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setSignUpData({...signUpData, positionAppliedName: e.target.options[e.target.options.selectedIndex].text, positionApplied: e.target.value})
                            }}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataPositionApplied !== undefined) ? dataPositionApplied : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Sumber Informasi </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.informationSource}
                            onChange={(e) => setSignUpData({...signUpData, informationSource: e.target.value})}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-2 text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md">Data Pribadi</p>
            </div>

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tempat Lahir </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.birthCity}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setSignUpData({...signUpData, birthCityName: e.target.options[e.target.options.selectedIndex].text, birthCity: e.target.value})
                            }}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alamat Email </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.email}
                            onChange={(e) => setSignUpData({...signUpData, email: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jenis Kelamin </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.gender}
                            onChange={(e) => setSignUpData({...signUpData, gender: e.target.value})}
                        >
                            {
                                ((dataGender !== undefined) ? dataGender : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kewarganegaraan </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.nationality}
                            onChange={(e) => setSignUpData({...signUpData, nationality: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataNationality !== undefined) ? dataNationality : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tanggal Lahir </label>
                        <DatePicker
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            dateFormat="yyyy-MM-dd"
                            selected={signUpData.birthDate}
                            onChange={(date: any) => {
                                setSignUpData({...signUpData, birthDate: moment(date, "YYYY-MM-DD").toDate(), birthDateFix: moment(date).format('YYYY-MM-DD')})
                            }}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No KTP </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.idCardNumber}
                            onChange={(e) => setSignUpData({...signUpData, idCardNumber: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No Handphone </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.phoneNumber}
                            onChange={(e) => setSignUpData({...signUpData, phoneNumber: e.target.value})}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Media Sosial </label>
                        
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                className="h-9 w-9 m-2"
                                viewBox="0 0 512 512"
                                >
                                <radialGradient
                                    id="a"
                                    cx="104.957"
                                    cy="447.447"
                                    r="564.646"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#fae100"></stop>
                                    <stop offset="0.054" stopColor="#fadc04"></stop>
                                    <stop offset="0.117" stopColor="#fbce0e"></stop>
                                    <stop offset="0.183" stopColor="#fcb720"></stop>
                                    <stop offset="0.251" stopColor="#fe9838"></stop>
                                    <stop offset="0.305" stopColor="#ff7950"></stop>
                                    <stop offset="0.492" stopColor="#ff1c74"></stop>
                                    <stop offset="1" stopColor="#6c1cd1"></stop>
                                </radialGradient>
                                <linearGradient
                                    id="b"
                                    x1="196.373"
                                    x2="-671.016"
                                    y1="222.46"
                                    y2="-265.446"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#a1b5d8" stopOpacity="0"></stop>
                                    <stop offset="0.309" stopColor="#90a2bd" stopOpacity="0.31"></stop>
                                    <stop offset="0.755" stopColor="#7c8b9c" stopOpacity="0.757"></stop>
                                    <stop offset="1" stopColor="#748290"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="c"
                                    x1="256"
                                    x2="256"
                                    y1="451.966"
                                    y2="531.774"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#fae100" stopOpacity="0"></stop>
                                    <stop offset="0.307" stopColor="#fca800" stopOpacity="0.306"></stop>
                                    <stop offset="0.627" stopColor="#fe7300" stopOpacity="0.627"></stop>
                                    <stop offset="0.869" stopColor="#ff5200" stopOpacity="0.867"></stop>
                                    <stop offset="1" stopColor="#ff4500"></stop>
                                </linearGradient>
                                <linearGradient id="d">
                                    <stop offset="0" stopColor="#833ab4" stopOpacity="0"></stop>
                                    <stop offset="1" stopColor="#833ab4"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="e"
                                    x1="226.872"
                                    x2="100.161"
                                    y1="226.148"
                                    y2="99.436"
                                    gradientUnits="userSpaceOnUse"
                                    xlinkHref="#d"
                                ></linearGradient>
                                <linearGradient
                                    id="f"
                                    x1="350.9"
                                    x2="287.656"
                                    y1="468.287"
                                    y2="170.138"
                                    gradientUnits="userSpaceOnUse"
                                    xlinkHref="#d"
                                ></linearGradient>
                                <linearGradient
                                    id="g"
                                    x1="374.965"
                                    x2="120.941"
                                    y1="374.965"
                                    y2="120.941"
                                    gradientUnits="userSpaceOnUse"
                                    xlinkHref="#d"
                                ></linearGradient>
                                <linearGradient
                                    id="h"
                                    x1="393.807"
                                    x2="309.806"
                                    y1="221.263"
                                    y2="137.262"
                                    gradientUnits="userSpaceOnUse"
                                    xlinkHref="#d"
                                ></linearGradient>
                                <linearGradient
                                    id="i"
                                    x1="357.658"
                                    x2="150.543"
                                    y1="155.05"
                                    y2="362.165"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset="0" stopColor="#833ab4"></stop>
                                    <stop offset="0.092" stopColor="#9c3495"></stop>
                                    <stop offset="0.293" stopColor="#dc2546"></stop>
                                    <stop offset="0.392" stopColor="#fd1d1d"></stop>
                                    <stop offset="0.559" stopColor="#fc6831"></stop>
                                    <stop offset="0.689" stopColor="#fc9b40"></stop>
                                    <stop offset="0.752" stopColor="#fcaf45"></stop>
                                    <stop offset="0.781" stopColor="#fdb750"></stop>
                                    <stop offset="0.866" stopColor="#fecb6a"></stop>
                                    <stop offset="0.942" stopColor="#ffd87a"></stop>
                                    <stop offset="1" stopColor="#ffdc80"></stop>
                                </linearGradient>
                                <path
                                    fill="url(#a)"
                                    d="M503.234 91.578c-4.66-43.664-39.144-78.156-82.812-82.812-109.508-11.688-219.336-11.688-328.84 0-43.668 4.66-78.156 39.148-82.816 82.812-11.688 109.504-11.688 219.336 0 328.84 4.66 43.668 39.148 78.156 82.812 82.816 109.504 11.688 219.336 11.688 328.844 0 43.668-4.66 78.152-39.148 82.812-82.816 11.688-109.504 11.688-219.332 0-328.84zm0 0"
                                ></path>
                                <path
                                    fill="url(#b)"
                                    d="M475.387 110.098c-4.133-38.746-34.735-69.352-73.485-73.489-97.172-10.367-194.632-10.367-291.804 0-38.746 4.137-69.352 34.743-73.489 73.489-10.367 97.172-10.367 194.632 0 291.8 4.137 38.75 34.743 69.356 73.489 73.489 97.172 10.37 194.632 10.37 291.8 0 38.75-4.133 69.356-34.739 73.489-73.489 10.37-97.168 10.37-194.628 0-291.8zm0 0"
                                ></path>
                                <path
                                    fill="url(#c)"
                                    d="M7.672 409.805c.351 3.539.715 7.078 1.094 10.617 4.66 43.664 39.148 78.152 82.816 82.812 109.504 11.688 219.336 11.688 328.84 0 43.668-4.66 78.152-39.148 82.812-82.812.38-3.54.743-7.078 1.098-10.617zm0 0"
                                ></path>
                                <path
                                    fill="url(#e)"
                                    d="M503.234 420.418a1547.774 1547.774 0 008.711-176.7l-117.03-117.03c-14.622-16.692-35.978-27.11-61.071-28.012-51.606-1.86-103.375-1.766-154.989.008-42.867 1.476-72.843 30.289-80.53 72.636-1.356 7.477-2.169 15.051-3.235 22.582v124.149c.59 4.023 1.457 8.027 1.726 12.074 1.72 25.758 12.305 47.82 29.254 62.746l119.094 119.09c58.445.41 116.895-2.496 175.258-8.727 43.668-4.66 78.152-39.148 82.812-82.816zm0 0"
                                ></path>
                                <path
                                    fill="url(#f)"
                                    d="M503.234 420.422c-4.656 43.66-39.152 78.156-82.812 82.812a1548.657 1548.657 0 01-175.254 8.727L126.254 393.047c13.785 12.066 31.754 19.414 52.605 20.2 51.602 1.937 103.383 1.886 154.985.026 46.672-1.687 80.445-36.23 81.902-82.902a2373.981 2373.981 0 000-148.793c-.664-21.531-8.223-40.476-20.754-54.812L511.95 243.723c.461 58.918-2.437 117.859-8.715 176.699zm0 0"
                                ></path>
                                <path
                                    fill="url(#g)"
                                    d="M316.414 200.559c-14.992-16.325-36.504-26.567-60.414-26.567-45.29 0-82.008 36.719-82.008 82.008 0 23.91 10.242 45.422 26.567 60.414l189.738 189.738a1564.245 1564.245 0 0030.121-2.918c43.668-4.66 78.156-39.148 82.816-82.816a1564.245 1564.245 0 002.918-30.121zm0 0"
                                ></path>
                                <path
                                    fill="url(#h)"
                                    d="M511.008 311.152L358.305 158.453c-3.563-4.676-9.176-7.71-15.508-7.71-10.774 0-19.512 8.734-19.512 19.51 0 6.333 3.035 11.946 7.711 15.509l177.281 177.285a1537.438 1537.438 0 002.73-51.895zm0 0"
                                ></path>
                                <path
                                    fill="url(#i)"
                                    d="M95.09 193.902c1.066-7.53 1.879-15.105 3.234-22.582 7.684-42.347 37.664-71.16 80.531-72.636 51.614-1.774 103.383-1.868 154.989-.008 46.656 1.68 80.445 36.226 81.902 82.898 1.55 49.559 1.55 99.238 0 148.797-1.457 46.672-35.234 81.215-81.898 82.899-51.606 1.863-103.387 1.91-154.989-.028-46.664-1.754-78.922-36.379-82.043-83.12-.27-4.044-1.136-8.052-1.726-12.075V193.902zM256.043 385.61c23.617 0 47.258.707 70.844-.164 36.98-1.37 59.726-23.441 60.59-60.386a2973.28 2973.28 0 000-138.172c-.864-36.938-23.625-59.524-60.59-60.309a3343.88 3343.88 0 00-140.805 0c-36.684.77-59.496 22.899-60.492 59.43a2579.097 2579.097 0 000 139.933c.996 36.528 23.808 58.145 60.496 59.504 23.289.867 46.637.164 69.957.164zm0 0"
                                ></path>
                                <g fill="#fff">
                                    <path d="M95.09 193.902c1.066-7.53 1.879-15.105 3.234-22.582 7.684-42.347 37.664-71.16 80.531-72.636 51.614-1.774 103.383-1.868 154.989-.008 46.656 1.68 80.445 36.226 81.902 82.898 1.55 49.559 1.55 99.238 0 148.797-1.457 46.672-35.234 81.215-81.898 82.899-51.606 1.863-103.387 1.91-154.989-.028-46.664-1.754-78.922-36.379-82.043-83.12-.27-4.044-1.136-8.052-1.726-12.075V193.902zM256.043 385.61c23.617 0 47.258.707 70.844-.164 36.98-1.37 59.726-23.441 60.59-60.386a2973.28 2973.28 0 000-138.172c-.864-36.938-23.625-59.524-60.59-60.309a3343.88 3343.88 0 00-140.805 0c-36.684.77-59.496 22.899-60.492 59.43a2579.097 2579.097 0 000 139.933c.996 36.528 23.808 58.145 60.496 59.504 23.289.867 46.637.164 69.957.164zm0 0"></path>
                                    <path d="M256 173.996c-45.29 0-82.008 36.715-82.008 82.004 0 45.293 36.719 82.008 82.008 82.008 45.293 0 82.008-36.715 82.008-82.008 0-45.29-36.715-82.004-82.008-82.004zm0 135.777c-29.7 0-53.773-24.074-53.773-53.773S226.3 202.227 256 202.227 309.773 226.3 309.773 256 285.7 309.773 256 309.773zm0 0M362.305 170.254c0 10.773-8.735 19.508-19.508 19.508s-19.512-8.735-19.512-19.508c0-10.777 8.738-19.512 19.512-19.512s19.508 8.735 19.508 19.512zm0 0"></path>
                                </g>
                                </svg>
                            <input
                                type="text"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                value={signUpData.instagramAccount}
                                onChange={(e) => setSignUpData({...signUpData, instagramAccount: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Bank </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.bank}
                            onChange={(e) => setSignUpData({...signUpData, bank: e.target.value, bankName: e.target.options[e.target.options.selectedIndex].text})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataBank !== undefined) ? dataBank : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-6">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                className="h-9 w-9 m-2"
                                enableBackground="new 0 0 512 512"
                                version="1.1"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                >
                                <path
                                    fill="#EDEDED"
                                    d="M0 512l35.31-128C12.359 344.276 0 300.138 0 254.234 0 114.759 114.759 0 255.117 0S512 114.759 512 254.234 395.476 512 255.117 512c-44.138 0-86.51-14.124-124.469-35.31L0 512z"
                                ></path>
                                <path
                                    fill="#55CD6C"
                                    d="M137.71 430.786l7.945 4.414c32.662 20.303 70.621 32.662 110.345 32.662 115.641 0 211.862-96.221 211.862-213.628S371.641 44.138 255.117 44.138 44.138 137.71 44.138 254.234c0 40.607 11.476 80.331 32.662 113.876l5.297 7.945-20.303 74.152 75.916-19.421z"
                                ></path>
                                <path
                                    fill="#FEFEFE"
                                    d="M187.145 135.945l-16.772-.883c-5.297 0-10.593 1.766-14.124 5.297-7.945 7.062-21.186 20.303-24.717 37.959-6.179 26.483 3.531 58.262 26.483 90.041s67.09 82.979 144.772 105.048c24.717 7.062 44.138 2.648 60.028-7.062 12.359-7.945 20.303-20.303 22.952-33.545l2.648-12.359c.883-3.531-.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-.883-10.593 2.648l-22.069 28.248c-1.766 1.766-4.414 2.648-7.062 1.766-15.007-5.297-65.324-26.483-92.69-79.448-.883-2.648-.883-5.297.883-7.062l21.186-23.834c1.766-2.648 2.648-6.179 1.766-8.828l-25.6-57.379c-.884-2.649-3.532-5.297-7.063-5.297"
                                ></path>
                            </svg>
                            <input
                                type="text"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                value={signUpData.whatsappAccount}
                                onChange={(e) => setSignUpData({...signUpData, whatsappAccount: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nomor Rekening </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.accountNumber}
                            onChange={(e) => setSignUpData({...signUpData, accountNumber: e.target.value})}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mt-6">
                        <div className="flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0"
                                y="0"
                                className="h-9 w-9 m-2"
                                enableBackground="new 0 0 382 382"
                                version="1.1"
                                viewBox="0 0 382 382"
                                xmlSpace="preserve"
                                >
                                <path
                                    fill="#0077B7"
                                    d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                                ></path>
                            </svg>
                            <input
                                type="text"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                value={signUpData.linkedInAccount}
                                onChange={(e) => setSignUpData({...signUpData, linkedInAccount: e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tinggi Badan </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.height}
                            onChange={(e) => setSignUpData({...signUpData, height: e.target.value})}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Berat Badan </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.weight}
                            onChange={(e) => setSignUpData({...signUpData, weight: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Agama </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.religion}
                            onChange={(e) => setSignUpData({...signUpData, religion: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            <option value="1"> Islam </option>
                            <option value="2"> Kristen </option>
                            <option value="3"> Katolik </option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Suku </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.ethnic}
                            onChange={(e) => setSignUpData({...signUpData, ethnic: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Golongan Darah </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.bloodType}
                            onChange={(e) => setSignUpData({...signUpData, bloodType: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataBloodType !== undefined) ? dataBloodType : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status Pernikahan </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.maritalStatus}
                            onChange={(e) => setSignUpData({...signUpData, maritalStatus: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataMaritalStatus !== undefined) ? dataMaritalStatus : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status Pajak </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.taxType}
                            onChange={(e) => setSignUpData({...signUpData, taxType: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataTaxType !== undefined) ? dataTaxType : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> NPWP </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.npwp}
                            onChange={(e) => setSignUpData({...signUpData, npwp: e.target.value})}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alamat Pajak </label>
                        <textarea
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.addressTax}
                            onChange={(e) => setSignUpData({...signUpData, addressTax: e.target.value})}
                        >
                        </textarea>
                    </div>
                </div>

            </div>
            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md">Alamat</p>
            </div>

            <div className="mx-auto max-w-full flex flex-wrap justify-around box-border pt-2 lg:pt-0 xl:pt-0 2xl:pt-0">
                <div className="-mx-3 mb-6 w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                    <div className="p-4 bg-green-400 text-white text-center">
                        <p className="font-bold text-md"> Alamat Sesuai KTP </p>
                    </div>
                    <div className="w-full px-4 py-2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alamat KTP </label>
                        <textarea
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.address2}
                            onChange={(e) => setSignUpData({...signUpData, address2: e.target.value})}
                        >
                        </textarea>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kota </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.city2}
                            onChange={(e) => setSignUpData({...signUpData, city2: e.target.value, cityName2: e.target.options[e.target.options.selectedIndex].text})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kode Pos </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.posCode2}
                            onChange={(e) => setSignUpData({...signUpData, posCode2: e.target.value})}
                        />
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No Telp/HP </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.addressPhoneNumber2}
                            onChange={(e) => setSignUpData({...signUpData, addressPhoneNumber2: e.target.value})}
                        />
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tinggal Sejak Tahun </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.residenceSince2}
                            onChange={(e) => setSignUpData({...signUpData, residenceSince2: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                generateYearCombo().map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status Tempat Tinggal </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.stayedStatus2}
                            onChange={(e) => setSignUpData({...signUpData, stayedStatus2: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataStayedStatus !== undefined) ? dataStayedStatus : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="-mx-3 mb-6 w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                    <div className="p-4 bg-green-400 text-white text-center">
                        <p className="font-bold text-md"> Alamat Orang Tua </p>
                    </div>
                    <div className="w-full px-4 py-2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alamat Orang Tua </label>
                        <textarea
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.address3}
                            onChange={(e) => setSignUpData({...signUpData, address3: e.target.value})}
                        >
                        </textarea>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kota </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.city3}
                            onChange={(e) => setSignUpData({...signUpData, city3: e.target.value, cityName3: e.target.options[e.target.options.selectedIndex].text})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kode Pos </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.posCode3}
                            onChange={(e) => setSignUpData({...signUpData, posCode3: e.target.value})}
                        />
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No Telp/HP </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.addressPhoneNumber3}
                            onChange={(e) => setSignUpData({...signUpData, addressPhoneNumber3: e.target.value})}
                        />
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tinggal Sejak Tahun </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.residenceSince3}
                            onChange={(e) => setSignUpData({...signUpData, residenceSince3: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                generateYearCombo().map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status Tempat Tinggal </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.stayedStatus3}
                            onChange={(e) => setSignUpData({...signUpData, stayedStatus3: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataStayedStatus !== undefined) ? dataStayedStatus : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="-mx-3 mb-6 w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                    <div className="p-4 bg-green-400 text-white text-center">
                        <p className="font-bold text-md"> Alamat Sesuai Domisili </p>
                    </div>
                    <div className="w-full px-4 py-2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alamat Sekarang </label>
                        <textarea
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.address1}
                            onChange={(e) => setSignUpData({...signUpData, address1: e.target.value})}
                        >
                        </textarea>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kota </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.city1}
                            onChange={(e) => setSignUpData({...signUpData, city1: e.target.value, cityName1: e.target.options[e.target.options.selectedIndex].text})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kode Pos </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.posCode1}
                            onChange={(e) => setSignUpData({...signUpData, posCode1: e.target.value})}
                        />
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No Telp/HP </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.addressPhoneNumber1}
                            onChange={(e) => setSignUpData({...signUpData, addressPhoneNumber1: e.target.value})}
                        />
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tinggal Sejak Tahun </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.residenceSince1}
                            onChange={(e) => setSignUpData({...signUpData, residenceSince1: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                generateYearCombo().map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="w-full px-4 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status Tempat Tinggal </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.stayedStatus1}
                            onChange={(e) => setSignUpData({...signUpData, stayedStatus1: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataStayedStatus !== undefined) ? dataStayedStatus : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md">Kontak Darurat</p>
            </div>

            {
                signUpData.contactName.map((entry, i) => {
                    return (
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lengkap </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        name="officialName"
                                        value={signUpData.contactName[i]}
                                        onChange={(e) => changeNewContact(i, signUpData.contactName, 'contactName', e.target.value)}
                                    />
                                </div>
                                <div className="w-full lg:w-1/6 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Hubungan </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.contactShip[i]}
                                        onChange={(e) => changeNewContact(i, signUpData.contactShip, 'contactShip', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataFamilyRelationship !== undefined) ? dataFamilyRelationship : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="w-full lg:w-1/6 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No Telephone </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.contactTelephone[i]}
                                        onChange={(e) => changeNewContact(i, signUpData.contactTelephone, 'contactTelephone', e.target.value)}
                                    />
                                </div>
                                <div className="w-full lg:w-1/6 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No Handphone </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.contactPhone[i]}
                                        onChange={(e) => changeNewContact(i, signUpData.contactPhone, 'contactPhone', e.target.value)}
                                    />
                                </div>
                                <div className="w-full lg:w-1/6 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.contactStatus[i]}
                                        onChange={(e) => changeNewContact(i, signUpData.contactStatus, 'contactStatus', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        <option value="Tidak dalam satu rumah"> Tidak dalam satu rumah </option>
                                        <option value="Dalam satu rumah"> Dalam satu rumah </option>
                                    </select>
                                </div>
                                <div className="w-full lg:w-1/6 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alamat </label>
                                    <textarea
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.contactAddress[i]}
                                        onChange={(e) => changeNewContact(i, signUpData.contactAddress, 'contactAddress', e.target.value)}
                                    >
                                    </textarea>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneContact}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.contactName.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteContact}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Keluarga </p>
            </div>

            {
                signUpData.familyRelationship.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Hubungan </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.familyRelationship[i]}
                                        onChange={(e) => changeNewFamily(i, signUpData.familyRelationship, 'familyRelationship', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataFamilyRelationship !== undefined) ? dataFamilyRelationship : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lengkap </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.familyRelationName[i]}
                                        onChange={(e) => changeNewFamily(i, signUpData.familyRelationName, 'familyRelationName', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tanggal Lahir </label>
                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.familyRelationBirth[i]} onChange={(date: any) => changeNewFamily(i, signUpData.familyRelationBirth, 'familyRelationBirth', moment(date, "YYYY-MM-DD").toDate())} />
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Pendidikan Terakhir </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.familyRelationEducation[i]}
                                        onChange={(e) => changeNewFamily(i, signUpData.familyRelationEducation, 'familyRelationEducation', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataEducation !== undefined) ? dataEducation : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Pekerjaan </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.familyRelationOccupation[i]}
                                        onChange={(e) => {
                                            changeNewFamily(i, signUpData.familyRelationOccupation, 'familyRelationOccupation', e.target.value)
                                            changeNewFamily(i, signUpData.familyRelationOccupationName, 'familyRelationOccupationName', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataOccupation !== undefined) ? dataOccupation : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.familyRelationStatus[i]}
                                        onChange={(e) => changeNewFamily(i, signUpData.familyRelationStatus, 'familyRelationStatus', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataFamilyStatus !== undefined) ? dataFamilyStatus : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneFamily}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.familyRelationship.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteFamily}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Pendidikan Formal </p>
            </div>

            {
                signUpData.educationFormalGrade.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tingkat </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationFormalGrade[i]}
                                        onChange={(e) => changeNewEduFormal(i, signUpData.educationFormalGrade, 'educationFormalGrade', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataEducation !== undefined) ? dataEducation : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lembaga </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationFormalInstitution[i]}
                                        onChange={(e) => {
                                            changeNewEduFormal(i, signUpData.educationFormalInstitution, 'educationFormalInstitution', e.target.value)
                                            changeNewEduFormal(i, signUpData.educationFormalInstitutionName, 'educationFormalInstitutionName', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataEducationInstantion !== undefined) ? dataEducationInstantion : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jurusan </label>
                                    <select
                                        className={`appearance-none hidden w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationFormalMajor[i]}
                                        onChange={(e) => {
                                            changeNewEduFormal(i, signUpData.educationFormalMajor, 'educationFormalMajor', e.target.value)
                                            changeNewEduFormal(i, signUpData.educationFormalMajorName, 'educationFormalMajorName', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                        id="majorSelect"
                                    >
                                        <option value="">- choose -</option>
                                        <option value="1"> Islam </option>
                                        <option value="2"> Kristen </option>
                                        <option value="3"> Katolik </option>
                                    </select>
                                    {/* <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.birthDate} onChange={(date: any) => setSignUpData({...signUpData, birthDate: moment(date, "YYYY-MM-DD").toDate()})} /> */}
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kota </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationFormalCity[i]}
                                        onChange={(e) => {
                                            changeNewEduFormal(i, signUpData.educationFormalCity, 'educationFormalCity', e.target.value)
                                            changeNewEduFormal(i, signUpData.educationFormalCityName, 'educationFormalCityName', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Mulai </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationFormalStart[i]}
                                        onChange={(e) => changeNewEduFormal(i, signUpData.educationFormalStart, 'educationFormalStart', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            generateYearCombo().map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>

                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Selesai </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationFormalEnd[i]}
                                        onChange={(e) => changeNewEduFormal(i, signUpData.educationFormalEnd, 'educationFormalEnd', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            generateYearCombo().map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nilai </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationFormalGpa[i]}
                                        onChange={(e) => changeNewEduFormal(i, signUpData.educationFormalGpa, 'educationFormalGpa', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneEducationFormal}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.educationFormalGrade.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteEducationFormal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Pendidikan Non Formal </p>
            </div>

            {
                signUpData.educationUnformalType.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jenis Kursus </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationUnformalType[i]}
                                        onChange={(e) => changeNewEduUnformal(i, signUpData.educationUnformalType, 'educationUnformalType', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lembaga </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationUnformalName[i]}
                                        onChange={(e) => {
                                            changeNewEduUnformal(i, signUpData.educationUnformalName, 'educationUnformalName', e.target.value)
                                            changeNewEduUnformal(i, signUpData.educationUnformalNameInstitution, 'educationUnformalNameInstitution', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataEducationInstantion !== undefined) ? dataEducationInstantion : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kota </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationUnformalCity[i]}
                                        onChange={(e) => {
                                            changeNewEduUnformal(i, signUpData.educationUnformalCity, 'educationUnformalCity', e.target.value)
                                            changeNewEduUnformal(i, signUpData.educationUnformalCityName, 'educationUnformalCityName', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {/* <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.birthDate} onChange={(date: any) => setSignUpData({...signUpData, birthDate: moment(date, "YYYY-MM-DD").toDate()})} /> */}
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Periode </label>
                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.educationUnformalStart[i]} onChange={(date: any) => changeNewEduUnformal(i, signUpData.educationUnformalStart, 'educationUnformalStart', moment(date, "YYYY-MM-DD").toDate())} />

                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.educationUnformalEnd[i]} onChange={(date: any) => changeNewEduUnformal(i, signUpData.educationUnformalEnd, 'educationUnformalEnd', moment(date, "YYYY-MM-DD").toDate())} />
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Berijazah </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.educationUnformalCertificate[i]}
                                        onChange={(e) => changeNewEduUnformal(i, signUpData.educationUnformalCertificate, 'educationUnformalCertificate', e.target.value)}
                                    >
                                        <option value="No"> No </option>
                                        <option value="Yes"> Yes </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneEducationUnformal}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.educationUnformalType.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteEducationUnformal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Penataran dan lokakarya </p>
            </div>

            {
                signUpData.workshopTitle.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jenis Kursus </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workshopTitle[i]}
                                        onChange={(e) => changeNewWorkshop(i, signUpData.workshopTitle, 'workshopTitle', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lembaga </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workshopName[i]}
                                        onChange={(e) => {
                                            changeNewWorkshop(i, signUpData.workshopName, 'workshopName', e.target.value)
                                            changeNewWorkshop(i, signUpData.workshopNameInstitution, 'workshopNameInstitution', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataEducationInstantion !== undefined) ? dataEducationInstantion : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kota </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workshopCity[i]}
                                        onChange={(e) => {
                                            changeNewWorkshop(i, signUpData.workshopCity, 'workshopCity', e.target.value)
                                            changeNewWorkshop(i, signUpData.workshopCityName, 'workshopCityName', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {/* <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.birthDate} onChange={(date: any) => setSignUpData({...signUpData, birthDate: moment(date, "YYYY-MM-DD").toDate()})} /> */}
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Periode </label>
                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.workshopStart[i]} onChange={(date: any) => changeNewWorkshop(i, signUpData.workshopStart, 'workshopStart', moment(date, "YYYY-MM-DD").toDate())} />

                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.workshopEnd[i]} onChange={(date: any) => changeNewWorkshop(i, signUpData.workshopEnd, 'workshopEnd', moment(date, "YYYY-MM-DD").toDate())} />
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Berijazah </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changeNewWorkshop(i, signUpData.workshopCertificate, 'workshopCertificate', e.target.value)}
                                    >
                                        <option value="No"> No </option>
                                        <option value="Yes"> Yes </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneWorkshop}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.workshopTitle.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteWorkshop}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Pengalaman Organisasi </p>
            </div>

            {
                signUpData.organizationName.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Organisasi </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.organizationName[i]}
                                        onChange={(e) => changeNewOrganization(i, signUpData.organizationName, 'organizationName', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Posisi </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.organizationPosition[i]}
                                        onChange={(e) => changeNewOrganization(i, signUpData.organizationPosition, 'organizationPosition', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Kota </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.organizationCity[i]}
                                        onChange={(e) => {
                                            changeNewOrganization(i, signUpData.organizationCity, 'organizationCity', e.target.value)
                                            changeNewOrganization(i, signUpData.organizationCityName, 'organizationCityName', e.target.value)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataBirthCity !== undefined) ? dataBirthCity : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/4 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Periode </label>
                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.organizationStart[i]} onChange={(date: any) => changeNewOrganization(i, signUpData.organizationStart, 'organizationStart', moment(date, "YYYY-MM-DD").toDate())} />

                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.organizationEnd[i]} onChange={(date: any) => changeNewOrganization(i, signUpData.organizationEnd, 'organizationEnd', moment(date, "YYYY-MM-DD").toDate())} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneOrganization}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.organizationName.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteOrganization}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Kemampuan Bahasa </p>
            </div>

            {
                signUpData.languageName.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Bahasa </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.languageName[i]}
                                        onChange={(e) => changeNewLanguage(i, signUpData.languageName, 'languageName', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataSkillLanguage !== undefined) ? dataSkillLanguage : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Membaca </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.languageReading[i]}
                                        onChange={(e) => changeNewLanguage(i, signUpData.languageReading, 'languageReading', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataSkillLevel !== undefined) ? dataSkillLevel : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Menulis </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.languageWriting[i]}
                                        onChange={(e) => changeNewLanguage(i, signUpData.languageWriting, 'languageWriting', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataSkillLevel !== undefined) ? dataSkillLevel : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Mendengarkan </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.languageListening[i]}
                                        onChange={(e) => changeNewLanguage(i, signUpData.languageListening, 'languageListening', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataSkillLevel !== undefined) ? dataSkillLevel : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/5 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Berbicara </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.languageSpeaking[i]}
                                        onChange={(e) => changeNewLanguage(i, signUpData.languageSpeaking, 'languageSpeaking', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataSkillLevel !== undefined) ? dataSkillLevel : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneLanguage}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.languageName.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteLanguage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Keterampilan Komputer </p>
            </div>

            {
                signUpData.skillProgram.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jenis Program </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.skillProgram[i]}
                                        onChange={(e) => changeNewComputerSkill(i, signUpData.skillProgram, 'skillProgram', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Aplikasi </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.skillApplication[i]}
                                        onChange={(e) => changeNewComputerSkill(i, signUpData.skillApplication, 'skillApplication', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneComputerSkill}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.skillProgram.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteComputerSkill}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Keterampilan Lain </p>
            </div>

            {
                signUpData.skillType.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jenis </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.skillType[i]}
                                        onChange={(e) => changeNewSkill(i, signUpData.skillType, 'skillType', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Deskripsi </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.skillDescription[i]}
                                        onChange={(e) => changeNewSkill(i, signUpData.skillDescription, 'skillDescription', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneSkill}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.skillProgram.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteSkill}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Pengalaman Kerja </p>
            </div>

            {
                signUpData.workExpName.map((entry, i) => {
                    return(
                        <div className="p-4 w-full border-b-2 border-gray-300" key={i}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Perusahaan </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpName[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpName, 'workExpName', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alamat Perusahaan </label>
                                    <textarea
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpAddress[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpAddress, 'workExpAddress', e.target.value)}
                                    >
                                    </textarea>
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Bidang Usaha </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpBusinessField[i]}
                                        onChange={(e) => {
                                            changeNewWorkExp(i, signUpData.workExpBusinessField, 'workExpBusinessField', e.target.value)
                                            changeNewWorkExp(i, signUpData.workExpBusinessFieldName, 'workExpBusinessFieldName', e.target.options[e.target.options.selectedIndex].text)
                                        }}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataBusinessLine !== undefined) ? dataBusinessLine : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jabatan </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpPosition[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpPosition, 'workExpPosition', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0 lg:mt-5">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No. Telephone </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpTelephone[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpTelephone, 'workExpTelephone', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Periode Kerja </label>
                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.workExpStart[i]} onChange={(date: any) => changeNewWorkExp(i, signUpData.workExpStart, 'workExpStart', moment(date, "YYYY-MM-DD").toDate())} />
                                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-MM-dd" selected={signUpData.workExpEnd[i]} onChange={(date: any) => changeNewWorkExp(i, signUpData.workExpEnd, 'workExpEnd', moment(date, "YYYY-MM-DD").toDate())} />
                                </div>
                                
                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Atasan Langsung </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpDirectSupervisor[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpDirectSupervisor, 'workExpDirectSupervisor', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Jabatan Atasan Langsung </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpDirectPosition[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpDirectPosition, 'workExpDirectPosition', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Pendapatan /Bulan </label>
                                    <input
                                        type="text"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpSalaryMonth[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpSalaryMonth, 'workExpSalaryMonth', e.target.value)}
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Alasan Berhenti </label>
                                    <select
                                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpLeavingReason[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpLeavingReason, 'workExpLeavingReason', e.target.value)}
                                    >
                                        <option value="">- choose -</option>
                                        {
                                            ((dataTerminationType !== undefined) ? dataTerminationType : []).map((entry:any, i:number) => {
                                                return(
                                                    <option key={i} value={entry.value}>{entry.label}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Uraian Tugas </label>
                                    <textarea
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        value={signUpData.workExpJobDescription[i]}
                                        onChange={(e) => changeNewWorkExp(i, signUpData.workExpJobDescription, 'workExpJobDescription', e.target.value)}
                                    >
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full lg:w-44 md:1/2 px-3 mb-6 md:mb-2">
                        <button
                            className={`py-2 px-4 w-full bg-blue-500 text-white border-2 border-blue-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none leading-tight`}
                            onClick={cloneWorkExp}
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Tambah Lagi
                            </p>
                        </button>
                    </div>

                    {
                        (signUpData.workExpName.length > 1) ? <div className="w-full lg:w-44 md:1/2 px-3">
                        <button
                            className={`py-2 px-4 w-full bg-white text-red-500 border-2 border-red-500 text-sm rounded shadow-md transition duration-200 flex hover:bg-red-500 hover:text-white appearance-none leading-tight`}
                            onClick={deleteWorkExp}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                            <p className="ml-3 mt-1">
                                Delete row
                            </p>
                        </button>
                    </div> : null
                    }
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Lain - Lain </p>
            </div>

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Jenis pekerjaan yang anda sukai </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.jobTypePrefer}
                            onChange={(e) => setSignUpData({...signUpData, jobTypePrefer: e.target.value})}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Jenis lokasi kerja yang anda sukai </label>
                        <select
                            className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.workLocationPrefer}
                            onChange={(e) => setSignUpData({...signUpData, workLocationPrefer: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataWorkLocation !== undefined) ? dataWorkLocation : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Bila diterima, kapan anda dapat mulai bekerja? </label>
                        <DatePicker
                            className={`appearance-none block text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            dateFormat="yyyy-MM-dd"
                            selected={signUpData.startWorking}
                            onChange={(date: any) => {
                                setSignUpData({...signUpData, startWorking: moment(date, "YYYY-MM-DD").toDate(), startWorkingFix: moment(date).format('YYYY-MM-DD')})
                            }}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Besar gaji yang diharapkan </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.expectedSalary}
                            onChange={(e) => setSignUpData({...signUpData, expectedSalary: e.target.value})}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Fasilitas yang diharapkan </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.expectedFacility}
                            onChange={(e) => setSignUpData({...signUpData, expectedFacility: e.target.value})}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Orang-orang yang anda kenal dalam perusahaan ini? </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.personKnow[0]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.personKnow

                                temporary[0] = e.target.value
                                setSignUpData({...signUpData, personKnow: temporary})
                            }}
                        />
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.personKnow[1]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.personKnow

                                temporary[1] = e.target.value
                                setSignUpData({...signUpData, personKnow: temporary})
                            }}
                        />
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.personKnow[2]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.personKnow

                                temporary[2] = e.target.value
                                setSignUpData({...signUpData, personKnow: temporary})
                            }}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> 3 (tiga) kelebihan yang anda miliki </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.strength[0]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.strength

                                temporary[0] = e.target.value
                                setSignUpData({...signUpData, strength: temporary})
                            }}
                        />
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.strength[1]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.strength

                                temporary[1] = e.target.value
                                setSignUpData({...signUpData, strength: temporary})
                            }}
                        />
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.strength[2]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.strength

                                temporary[2] = e.target.value
                                setSignUpData({...signUpData, strength: temporary})
                            }}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> 3 (tiga) kelemahan yang anda miliki </label>
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.weakness[0]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.weakness

                                temporary[0] = e.target.value
                                setSignUpData({...signUpData, weakness: temporary})
                            }}
                        />
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.weakness[1]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.weakness

                                temporary[1] = e.target.value
                                setSignUpData({...signUpData, weakness: temporary})
                            }}
                        />
                        <input
                            type="text"
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.weakness[2]}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.weakness

                                temporary[2] = e.target.value
                                setSignUpData({...signUpData, weakness: temporary})
                            }}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Penyakit berat yang pernah diderita & kapan? </label>
                        <select
                            className={`appearance-none block w-full lg:w-1/4 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.ilnessStatus}
                            onChange={(e) => setSignUpData({...signUpData, ilnessStatus: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataExistsOrNo !== undefined) ? dataExistsOrNo : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                        <input
                            type="text"
                            className={
                                `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 ${(signUpData.ilnessStatus === '718') ? '' : 'hidden'}`
                            }
                            value={signUpData.ilness[0] || ''}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.ilness

                                temporary[0] = e.target.value
                                setSignUpData({...signUpData, ilness: temporary})
                            }}
                        />

                        <input
                            type="text"
                            className={
                                `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 ${(signUpData.ilnessStatus === '718') ? '' : 'hidden'}`
                            }
                            value={signUpData.ilness[1] || ''}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.ilness

                                temporary[1] = e.target.value
                                setSignUpData({...signUpData, ilness: temporary})
                            }}
                        />
                    </div>

                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-xs"> Keterlibatan perkara pidana, masalah apa & kapan? </label>
                        <select
                            className={`appearance-none block w-full lg:w-1/4 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.criminalStatus}
                            onChange={(e) => setSignUpData({...signUpData, criminalStatus: e.target.value})}
                        >
                            <option value="">- choose -</option>
                            {
                                ((dataExistsOrNo !== undefined) ? dataExistsOrNo : []).map((entry:any, i:number) => {
                                    return(
                                        <option key={i} value={entry.value}>{entry.label}</option>
                                    )
                                })
                            }
                        </select>
                        <input
                            type="text"
                            className={
                                `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 ${(signUpData.criminalStatus === '718') ? '' : 'hidden'}`
                            }
                            value={signUpData.criminal[0] || ''}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.criminal

                                temporary[0] = e.target.value
                                setSignUpData({...signUpData, criminal: temporary})
                            }}
                        />
                        <input
                            type="text"
                            className={
                                `appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 ${(signUpData.criminalStatus === '718') ? '' : 'hidden'}`
                            }
                            value={signUpData.criminal[1] || ''}
                            onChange={(e) => {
                                const temporary: string[] = signUpData.criminal

                                temporary[1] = e.target.value
                                setSignUpData({...signUpData, criminal: temporary})
                            }}
                        />
                    </div>
                    
                </div>
            </div>
            
            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Bila anda sedang dalam proses seleksi di perusahaan lain, sebutkan nama perusahaan tersebut, posisi yang anda lamar dan seberapa jauh proses tersebut? </p>
            </div>

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <textarea
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.recruitmentStatus}
                            onChange={(e) => setSignUpData({...signUpData, recruitmentStatus: e.target.value})}
                        >
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Tuliskan keterangan lain yang ingin yang anda sampaikan dan perlu untuk diketahui </p>
            </div>

            <div className="p-4 w-full">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <textarea
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                            value={signUpData.othersThing}
                            onChange={(e) => setSignUpData({...signUpData, othersThing: e.target.value})}
                        >
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="text-center text-white bg-gradient-to-r from-green-400 to-blue-400 py-3">
                <p className="font-bold text-md"> Kelengkapan Data Diri </p>
            </div>

            <div className="p-4 w-full">
                <div className="border-b border-gray-200 shadow overflow-x-auto">
                    <table className="mx-auto w-full whitescape-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr className="text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4 lg:w-3/6">
                                    Jenis
                                </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 lg:w-2/6">
                                    Upload
                                </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 lg:w-1/6">
                                    Hasil
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto diri kandidat </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('candidate', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4">
                                    {
                                        signUpData.candidatePhoto !== '' ? <Image src={signUpData.candidatePhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto KTP </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('idCard', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4">
                                    {
                                        signUpData.idCardPhoto !== '' ? <Image src={signUpData.idCardPhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto Kartu Keluarga </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('familyCard', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4">
                                    {
                                        signUpData.familyCardPhoto !== '' ? <Image src={signUpData.familyCardPhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto Sertifikat </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('certificate', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4 text-gray-900">
                                    {
                                        signUpData.certificatePhoto !== '' ? <Image src={signUpData.certificatePhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto NPWP </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('tax', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4 text-gray-900">
                                    {
                                        signUpData.taxPhoto !== '' ? <Image src={signUpData.taxPhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto SIM </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('sim', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4 text-gray-900">
                                    {
                                        signUpData.simPhoto !== '' ? <Image src={signUpData.simPhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto Akte Nikah </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('maritalCertificate', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4 text-gray-900">
                                    {
                                        signUpData.maritalCertificatePhoto !== '' ? <Image src={signUpData.maritalCertificatePhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto Surat Pengalaman Kerja </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('workExp', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4 text-gray-900">
                                    {
                                        signUpData.workExpPhoto !== '' ? <Image src={signUpData.workExpPhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                            <tr className="whitespace-nowrap">
                                <td className="px-6 py-4 text-gray-900">
                                    <p className="text-md font-bold"> Foto Sertifikat Vaksin </p>
                                    <p className="text-sm"> ***Max Size: 2048Kb </p>
                                    <p className="text-sm"> ***Allowed file type: PNG, jpg </p>
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    <input type="file"
                                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                        onChange={(e) => changePhoto('vaccine', (!e.target.files) ? null : e.target.files[0], e.target) } />
                                </td>
                                <td className="lg:px-6 lg:py-4 text-gray-900">
                                    {
                                        signUpData.vaccinePhoto !== '' ? <Image src={signUpData.vaccinePhoto} alt={'Preview image'} id="candidatePhoto" height={500} width={500} /> : null
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-wrap justify-end mx-3 mb-6 pb-3">
                <button
                    className="px-6 py-2 m-3 bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white rounded shadow-md transition duration-200"
                    type="submit"
                >
                Simpan
                </button>
            </div>
        </form>
        </>
    )
}

export default Candidate