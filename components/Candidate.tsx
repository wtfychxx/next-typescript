import moment from 'moment'
import type { NextPage } from 'next'
import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useStoreOption } from '../pages/lib/candidate'

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
    familyRelationBirth: string;
    familyRelationEducation: number[];
    familyRelationOccupation: number[];
    familyRelationStatus: number[];
}

const Candidate: NextPage = () => {
    const { dataPositionApplied } = useStoreOption()

    const [signUpData, setSignUpData] = useState({
        officialName: "",
        nickName: "",
        positionApplied: "",
        informationSource: "",
        birthCity: "",
        email: "",
        gender: "",
        nationality: "",
        birthDate: new Date(),
        idCardNumber: "",
        phoneNumber: "",
        instagramAccount: "",
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
        birthDateFix: "",
        address1: "",
        address2: "",
        address3: "",
        city1: "",
        city2: "",
        city3: "",
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
        familyRelationBirth: ["", ""],
        familyRelationEducation: ["", ""],
        familyRelationOccupation: ["", ""],
        familyRelationStatus: ["", ""]
    })

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const dateFix = moment(signUpData.birthDate).format('YYYY-MM-DD')
        setSignUpData({...signUpData, birthDateFix: dateFix})
        console.log(signUpData)
    }

    const cloneContact = () => {
        const contactNameDefault: string[] = signUpData.contactName
        contactNameDefault.push("")
        setSignUpData({...signUpData, contactName: contactNameDefault})

        const contactShipDefault: string[] = signUpData.contactShip
        contactShipDefault.push("")
        setSignUpData({...signUpData, contactShip: contactShipDefault})

        const contactTelephoneDefault: string[] = signUpData.contactTelephone
        contactTelephoneDefault.push("")
        setSignUpData({...signUpData, contactTelephone: contactTelephoneDefault})

        const contactPhoneDefault: string[] = signUpData.contactPhone
        contactPhoneDefault.push("")
        setSignUpData({...signUpData, contactPhone: contactPhoneDefault})

        const contactStatusDefault: string[] = signUpData.contactStatus
        contactStatusDefault.push("")
        setSignUpData({...signUpData, contactStatus: contactStatusDefault})

        const contactAddressDefault: string[] = signUpData.contactAddress
        contactAddressDefault.push("")
        setSignUpData({...signUpData, contactAddress: contactAddressDefault})
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

    const cloneFamily = () => {
        const familyRelationshipDefault: string[] = signUpData.familyRelationship
        familyRelationshipDefault.push("")
        setSignUpData({...signUpData, familyRelationship: familyRelationshipDefault})

        const familyRelationNameDefault: string[] = signUpData.familyRelationName
        familyRelationNameDefault.push("")
        setSignUpData({...signUpData, familyRelationName: familyRelationNameDefault})

        const familyRelationBirthDefault: string[] = signUpData.familyRelationBirth
        familyRelationBirthDefault.push("")
        setSignUpData({...signUpData, familyRelationBirth: familyRelationBirthDefault})

        const familyRelationEducationDefault: string[] = signUpData.familyRelationEducation
        familyRelationEducationDefault.push("")
        setSignUpData({...signUpData, familyRelationEducation: familyRelationEducationDefault})

        const familyRelationOccupationDefault: string[] = signUpData.familyRelationOccupation
        familyRelationOccupationDefault.push("")
        setSignUpData({...signUpData, familyRelationOccupation: familyRelationOccupationDefault})

        const familyRelationStatusDefault: string[] = signUpData.familyRelationStatus
        familyRelationStatusDefault.push("")
        setSignUpData({...signUpData, familyRelationStatus: familyRelationStatusDefault})
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

        const familyLengthStatus: number = signUpData.familyRelationStatus.length
        const afterStatus = signUpData.familyRelationStatus.slice(0, familyLengthStatus - 1)

        setSignUpData({
            ...signUpData,
            familyRelationship: afterRelationship,
            familyRelationName: afterName,
            familyRelationBirth: afterBirth,
            familyRelationEducation: afterEducation,
            familyRelationOccupation: afterOccupation,
            familyRelationStatus: afterStatus
        })

    }

    const changeNewContact = (id: number=0, stateName: string[]= [], type: string = "", value: string= "") => {
        const temporary:string[] = stateName
        temporary[id] = value
        switch(type){
            case 'contactName':
                setSignUpData({...signUpData, contactName: temporary})
            break;
            case 'contactShip':
                setSignUpData({...signUpData, contactShip: temporary})
            break;
            case 'contactTelephone':
                setSignUpData({...signUpData, contactTelephone: temporary})
            break;
            case 'contactPhone':
                setSignUpData({...signUpData, contactPhone: temporary})
            break;
            case 'contactStatus':
                setSignUpData({...signUpData, contactStatus: temporary})
            break;
            case 'contactAddress':
                setSignUpData({...signUpData, contactAddress: temporary})
            break;
        }
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

        <div className="p-4 w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Nama Lengkap (Sesuai KTP) </label>
                    <input
                        type="text"
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                        name="officialName"
                        value={signUpData.officialName}
                        onChange={(e) => setSignUpData({...signUpData, officialName: e.target.value})}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Nama Panggilan </label>
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
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Posisi yang dilamar </label>
                    <select
                        className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                        value={signUpData.positionApplied}
                        onChange={(e) => setSignUpData({...signUpData, positionApplied: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        {
                            ((dataPositionApplied !== undefined) ? dataPositionApplied : []).map((entry:any, i:number) => {
                                return(
                                    <option key={i} value={entry.combo_key}>{entry.combo_name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Sumber Informasi </label>
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
                        onChange={(e) => setSignUpData({...signUpData, birthCity: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        <option value="1"> Jakarta </option>
                        <option value="1"> Bandung </option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Alamat Email </label>
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
                        <option value="">- choose -</option>
                        <option value="1"> Jakarta </option>
                        <option value="1"> Bandung </option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Kewarganegaraan </label>
                    <select
                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                        value={signUpData.nationality}
                        onChange={(e) => setSignUpData({...signUpData, nationality: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        <option value="219"> Pria </option>
                        <option value="220"> Wanita </option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tanggal Lahir </label>
                    <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-mm-dd" selected={signUpData.birthDate} onChange={(date: any) => setSignUpData({...signUpData, birthDate: moment(date, "YYYY-MM-DD").toDate()})} />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> No KTP </label>
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
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Media Sosial </label>
                    
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
                        value={signUpData.bankName}
                        onChange={(e) => setSignUpData({...signUpData, bankName: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        <option value="219"> Pria </option>
                        <option value="220"> Wanita </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        onChange={(e) => setSignUpData({...signUpData, city2: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
                    </select>
                </div>
            </div>
            <div className="-mx-3 mb-6 w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3">
                <div className="p-4 bg-green-400 text-white text-center">
                    <p className="font-bold text-md"> Alamat Orang Tua </p>
                </div>
                <div className="w-full px-4 py-2 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Alamat Orang Tua </label>
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
                        onChange={(e) => setSignUpData({...signUpData, city3: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        onChange={(e) => setSignUpData({...signUpData, city1: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                        <option value="1"> Islam </option>
                        <option value="2"> Kristen </option>
                        <option value="3"> Katolik </option>
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
                    <div className="p-4 w-full" key={i}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Nama Lengkap </label>
                                <input
                                    type="text"
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    name="officialName"
                                    onChange={(e) => changeNewContact(i, signUpData.contactName, 'contactName', e.target.value)}
                                />
                            </div>
                            <div className="w-full lg:w-1/6 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Hubungan </label>
                                <select
                                    className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactShip, 'contactShip', e.target.value)}
                                >
                                    <option value="">- choose -</option>
                                    <option value="1"> Islam </option>
                                    <option value="2"> Kristen </option>
                                    <option value="3"> Katolik </option>
                                </select>
                            </div>
                            <div className="w-full lg:w-1/6 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> No Telephone </label>
                                <input
                                    type="text"
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactTelephone, 'contactTelephone', e.target.value)}
                                />
                            </div>
                            <div className="w-full lg:w-1/6 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> No Handphone </label>
                                <input
                                    type="text"
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactPhone, 'contactPhone', e.target.value)}
                                />
                            </div>
                            <div className="w-full lg:w-1/6 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Status </label>
                                <select
                                    className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactStatus, 'contactStatus', e.target.value)}
                                >
                                    <option value="">- choose -</option>
                                    <option value="1"> Islam </option>
                                    <option value="2"> Kristen </option>
                                    <option value="3"> Katolik </option>
                                </select>
                            </div>
                            <div className="w-full lg:w-1/6 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold font-bold mb-2"> Alamat </label>
                                <textarea
                                    className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
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
                        className={`py-3 px-4 w-full bg-blue-500 text-white text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none block leading-tight`}
                        onClick={cloneContact}
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
                        className={`py-3 px-4 w-full bg-red-500 text-white text-md rounded shadow-md transition duration-200 flex hover:bg-red-700 appearance-none block leading-tight`}
                        onClick={deleteContact}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        <p className="ml-3">
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
                    <div className="p-4 w-full" key={i}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Hubungan </label>
                                <select
                                    className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactShip, 'contactShip', e.target.value)}
                                >
                                    <option value="">- choose -</option>
                                    <option value="1"> Islam </option>
                                    <option value="2"> Kristen </option>
                                    <option value="3"> Katolik </option>
                                </select>
                            </div>

                            <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lengkap </label>
                                <input
                                    type="text"
                                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactTelephone, 'contactTelephone', e.target.value)}
                                />
                            </div>

                            <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tanggal Lahir </label>
                                <DatePicker className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`} dateFormat="yyyy-mm-dd" selected={signUpData.birthDate} onChange={(date: any) => setSignUpData({...signUpData, birthDate: moment(date, "YYYY-MM-DD").toDate()})} />
                            </div>

                            <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Pendidikan Terakhir </label>
                                <select
                                    className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactShip, 'contactShip', e.target.value)}
                                >
                                    <option value="">- choose -</option>
                                    <option value="1"> Islam </option>
                                    <option value="2"> Kristen </option>
                                    <option value="3"> Katolik </option>
                                </select>
                            </div>

                            <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Pekerjaan </label>
                                <select
                                    className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactShip, 'contactShip', e.target.value)}
                                >
                                    <option value="">- choose -</option>
                                    <option value="1"> Islam </option>
                                    <option value="2"> Kristen </option>
                                    <option value="3"> Katolik </option>
                                </select>
                            </div>

                            <div className="w-full lg:w-1/6 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Status </label>
                                <select
                                    className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                                    onChange={(e) => changeNewContact(i, signUpData.contactShip, 'contactShip', e.target.value)}
                                >
                                    <option value="">- choose -</option>
                                    <option value="1"> Islam </option>
                                    <option value="2"> Kristen </option>
                                    <option value="3"> Katolik </option>
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
                        className={`py-3 px-4 w-full bg-blue-500 text-white text-sm rounded shadow-md transition duration-200 flex hover:bg-blue-700 appearance-none block leading-tight`}
                        onClick={cloneFamily}
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
                        className={`py-3 px-4 w-full bg-red-500 text-white text-md rounded shadow-md transition duration-200 flex hover:bg-red-700 appearance-none block leading-tight`}
                        onClick={deleteFamily}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        <p className="ml-3">
                            Delete row
                        </p>
                    </button>
                </div> : null
                }
            </div>
        </div>


        <div className="flex flex-wrap justify-end mx-3 mb-6 pb-3">
            <button
                className="px-6 py-2 m-3 bg-blue-500 text-white rounded shadow-md transition duration-200 hover:bg-blue-700"
                onClick={handleSubmit}
                type="submit"
            > Simpan </button>
        </div>
        </>
    )
}

export default Candidate