import type { NextPage } from 'next'

const Header: NextPage = () => {
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
        </>
    )
}

export default Header