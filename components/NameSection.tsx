import type { NextPage } from 'next'
import { useState } from 'react';

export interface isSignUpData{
    officialName: string;
    nickName: string;
}


const NameSection: NextPage = () => {
    const [signUpData, setSignUpData] = useState({
        officialName: "",
        nickName: "",
        positionApplied: "",
        informationSource: ""
    })

    return(
        <>
        <div className="p-4 w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Lengkap (Sesuai KTP) </label>
                    <input
                        type="text"
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                        name="officialName"
                        value={signUpData.officialName}
                        onChange={(e) => setSignUpData({...signUpData, officialName: e.target.value})}
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
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Posisi yang dilamar </label>
                    <select
                        className={`appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                        value={signUpData.positionApplied}
                        onChange={(e) => setSignUpData({...signUpData, positionApplied: e.target.value})}
                    >
                        <option value="">- choose -</option>
                        <option value="1">Pekerjaan 1</option>
                        <option value="">Pekerjaan 2</option>
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
        </>
    )
}

export default NameSection;