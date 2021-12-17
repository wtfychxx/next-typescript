import type { NextPage} from 'next'
import { useState } from 'react'

export interface isSignUpData{
    
}

const PersonalData: NextPage = () => {
    return(
        <>
        <div className="p-4 w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tempat Lahir </label>
                    <select
                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                    >
                        <option value="">- choose -</option>
                        <option value="1"> Jakarta </option>
                        <option value="1"> Bandung </option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2"> Alamat Email </label>
                    <input
                        type="text"
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Tanggal Lahir </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2"> Kewarganegaraan </label>
                    <select
                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
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
                    <select
                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                    >
                        <option value="">- choose -</option>
                        <option value="219"> Pria </option>
                        <option value="220"> Wanita </option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2"> No KTP </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> No Handphone </label>
                    <input
                        className={`appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2"> Media Sosial </label>
                    
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
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Nama Bank </label>
                    <select
                        className={`appearance-none block w-full text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                    >
                        <option value="">- choose -</option>
                        <option value="219"> Pria </option>
                        <option value="220"> Wanita </option>
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-2"> Media Sosial </label>
                    
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
                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200 border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-700`}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PersonalData