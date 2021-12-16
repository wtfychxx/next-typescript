import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import Candidate from '../components/Candidate'
import getCombo from './api/combobox'
import { useStoreOption } from '../lib/candidate'


interface propsData {
    positionApplied: any[],
    gender: any[],
    birthCity: any[],
    nationality: any[],
    bank: any[],
    bloodType: any[],
    maritalStatus: any[],
    taxType: any[],
    stayedStatus: any[],
    familyRelationship: any[],
    familyStatus: any[],
    education: any[],
    occupation: any[],
    educationInstantion: any[],
    businessLine: any[],
    terminationType: any[],
    skillLanguage: any[],
    skillLevel: any[],
    workLocation: any[],
    existsOrNo: any[]
}

const CandidateForm: NextPage<propsData> = ({positionApplied, gender, birthCity, nationality, bank, bloodType, maritalStatus, taxType, stayedStatus, familyRelationship, familyStatus, education, occupation, educationInstantion, businessLine, terminationType, skillLanguage, skillLevel, workLocation, existsOrNo}) => {
    const { setPositionApplied, setGender, setBirthCity, setNationality, setBank, setBloodType, setMaritalStatus, setTaxType, setStayedStatus, setFamilyRelationship, setFamilyStatus, setEducation, setOccupation, setEducationInstantion, setBusinessLine, setTerminationType, setSkillLanguage, setSkillLevel, setWorkLocation, setExistsOrNo } = useStoreOption()

    useEffect(() => {
        setPositionApplied(positionApplied)
        setGender(gender)
        setBirthCity(birthCity)
        setNationality(nationality)
        setBank(bank)
        setBloodType(bloodType)
        setMaritalStatus(maritalStatus)
        setTaxType(taxType)
        setStayedStatus(stayedStatus)
        setFamilyRelationship(familyRelationship)
        setFamilyStatus(familyStatus)
        setEducation(education)
        setOccupation(occupation)
        setEducationInstantion(educationInstantion)
        setBusinessLine(businessLine)
        setTerminationType(terminationType)
        setSkillLanguage(skillLanguage)
        setSkillLevel(skillLevel)
        setWorkLocation(workLocation)
        setExistsOrNo(existsOrNo)
    }, [])

    return(
        <>
        <Head>
            <title>Form Candidate HRMS</title>
            <meta name="description" content="Generated by create next app" />
        </Head>
        <div className="p-10 min-h-screen bg-gray-200">
            <div className="bg-white shadow-md rounded-md">
                <Candidate />
            </div>
        </div>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const positionAppliedData = await getCombo("positionApplied", 0);
    const genderData = await getCombo("gender", 0);
    const birthCityData = await getCombo("birthCity", 0)
    const nationalityData = await getCombo("nationality", 0)
    const bankData = await getCombo("bank", 0)
    const bloodTypeData = await getCombo("bloodType", 0)
    const maritalStatusData = await getCombo("maritalStatus", 0)
    const taxTypeData = await getCombo("taxType", 0)
    const stayedStatusData = await getCombo("stayedStatus", 0)
    const familyRelationshipData = await getCombo("familyRelationship", 0)
    const familyStatusData = await getCombo("familyStatus", 0)
    const occupationData = await getCombo("occupation", 0)
    const educationData = await getCombo("education", 0)
    const educationInstantionData = await getCombo("educationInstantion", 0)
    const businessLineData = await getCombo("businessLine", 0)
    const terminationTypeData = await getCombo("terminationType", 0)
    const skillLanguageData = await getCombo("skillLanguage", 0)
    const skillLevelData = await getCombo("skillLevel", 0)
    const workLocationData = await getCombo("workLocation", 0)
    const existsOrNoData = await getCombo("existsOrNo", 0)

    const positionApplied: any[] = [];
    const gender: any[] = [];
    const birthCity: any[] = [];
    const nationality: any[] = [];
    const bank: any[] = [];
    const bloodType: any[] = [];
    const maritalStatus: any[] = [];
    const taxType: any[] = [];
    const stayedStatus: any[] = [];
    const familyRelationship: any[] = [];
    const familyStatus: any[] = [];
    const education: any[] = [];
    const occupation: any[] = [];
    const educationInstantion: any[] = [];
    const businessLine: any[] = [];
    const terminationType: any[] = [];
    const skillLanguage: any[] = [];
    const skillLevel: any[] = [];
    const workLocation: any[] = [];
    const existsOrNo: any[] = [];

    positionAppliedData.map((key:any) => {
        positionApplied.push({value: key.combo_key, label: key.combo_name})
    })

    genderData.map((key:any) => {
        gender.push({value: key.combo_key, label: key.combo_name})
    })

    birthCityData.map((key:any) => {
        birthCity.push({value: key.combo_key, label: key.combo_name})
    })

    nationalityData.map((key:any) => {
        nationality.push({value: key.combo_key, label: key.combo_name})
    })

    bankData.map((key:any) => {
        bank.push({value: key.combo_key, label: key.combo_name})
    })

    bloodTypeData.map((key:any) => {
        bloodType.push({value: key.combo_key, label: key.combo_name})
    })

    maritalStatusData.map((key:any) => {
        maritalStatus.push({value: key.combo_key, label: key.combo_name})
    })

    taxTypeData.map((key:any) => {
        taxType.push({value: key.combo_key, label: key.combo_name})
    })

    stayedStatusData.map((key:any) => {
        stayedStatus.push({value: key.combo_key, label: key.combo_name})
    })

    familyRelationshipData.map((key:any) => {
        familyRelationship.push({value: key.combo_key, label: key.combo_name})
    })

    familyStatusData.map((key:any) => {
        familyStatus.push({value: key.combo_key, label: key.combo_name})
    })

    educationData.map((key:any) => {
        education.push({value: key.combo_key, label: key.combo_name})
    })

    occupationData.map((key:any) => {
        occupation.push({value: key.combo_key, label: key.combo_name})
    })

    educationInstantionData.map((key:any) => {
        educationInstantion.push({value: key.combo_key, label: key.combo_name})
    })

    businessLineData.map((key:any) => {
        businessLine.push({value: key.combo_key, label: key.combo_name})
    })

    terminationTypeData.map((key:any) => {
        terminationType.push({value: key.combo_key, label: key.combo_name})
    })

    skillLanguageData.map((key:any) => {
        skillLanguage.push({value: key.combo_key, label: key.combo_name})
    })

    skillLevelData.map((key:any) => {
        skillLevel.push({value: key.combo_key, label: key.combo_name})
    })

    workLocationData.map((key:any) => {
        workLocation.push({value: key.combo_key, label: key.combo_name})
    })

    existsOrNoData.map((key:any) => {
        existsOrNo.push({value: key.combo_key, label: key.combo_name})
    })

    return {
        props: {
            positionApplied,
            gender,
            birthCity,
            nationality,
            bank,
            bloodType,
            maritalStatus,
            taxType,
            stayedStatus,
            familyRelationship,
            familyStatus,
            education,
            occupation,
            educationInstantion,
            businessLine,
            terminationType,
            skillLanguage,
            skillLevel,
            workLocation,
            existsOrNo
        }
    }
}

export default CandidateForm