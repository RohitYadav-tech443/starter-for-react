import React from 'react';
import {Link} from 'react-router-dom';
import {Logo} from '../index';

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="bg-[url('https://tse1.mm.bing.net/th/id/OIP.eEb4kNlsY7bflfHqY5MBZwHaC5?pid=Api&P=0&h=180')] mx-auto w-full max-w-screen-full p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <Logo />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black hover:text-white uppercase">Resources</h2>
                            <ul className="text-black   font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline hover:text-white">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black hover:text-white uppercase">Follow us</h2>
                            <ul className="text-black font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline hover:text-white"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/rohit_calm/" className="hover:underline hover:text-white" target="_blank" rel="noreferrer">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black hover:text-white uppercase">Legal</h2>
                            <ul className="text-black font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline hover:text-white">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-black sm:text-center">
                        © 2025 
                        <a href="https://www.instagram.com/rohit_calm/" className="hover:underline">
                            Rohit Yadav
                        </a>
                         . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                       <Link
                        to="https://www.linkedin.com/in/rohit-yadav-6567a9321/"
                        className="text-black hover:text-blue-600 transition"
                        aria-label="LinkedIn page"
                        >
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.939v5.667H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.602 0 4.268 2.371 4.268 5.455v6.285zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.067 0-1.143.925-2.069 2.069-2.069s2.068.926 2.068 2.069c0 1.141-.924 2.067-2.068 2.067zm1.777 13.019H3.56V9h3.554v11.452z"/>
                        </svg>
                        <span className="sr-only">LinkedIn page</span>
                        </Link>

                        <Link
                            to="https://www.instagram.com/rohit_calm/"
                            className="text-black hover:text-pink-500 transition"
                            aria-label="Instagram page"
                            >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.403a4.92 4.92 0 0 1 1.77 1.017 4.92 4.92 0 0 1 1.017 1.77c.163.457.347 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.427a4.902 4.902 0 0 1-1.017 1.77 4.902 4.902 0 0 1-1.77 1.017c-.457.163-1.257.347-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.403a4.902 4.902 0 0 1-1.77-1.017 4.902 4.902 0 0 1-1.017-1.77c-.163-.457-.347-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.427a4.92 4.92 0 0 1 1.017-1.77 4.92 4.92 0 0 1 1.77-1.017c.457-.163 1.257-.347 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.797.308 4.012.56a6.919 6.919 0 0 0-2.52 1.486A6.919 6.919 0 0 0 .56 4.012c-.252.785-.43 1.763-.488 3.04C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.236 2.255.488 3.04a6.919 6.919 0 0 0 1.486 2.52 6.919 6.919 0 0 0 2.52 1.486c.785.252 1.763.43 3.04.488C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.255-.236 3.04-.488a6.919 6.919 0 0 0 2.52-1.486 6.919 6.919 0 0 0 1.486-2.52c.252-.785.43-1.763.488-3.04.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.236-2.255-.488-3.04a6.919 6.919 0 0 0-1.486-2.52 6.919 6.919 0 0 0-2.52-1.486c-.785-.252-1.763-.43-3.04-.488C15.668.014 15.259 0 12 0z"/>
                                <path d="M12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"/>
                                <circle cx="18.406" cy="5.594" r="1.44"/>
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </Link>



                        <Link to="https://github.com/RohitYadav-tech443" className="text-black hover:text-blue-600">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link
                        to="https://leetcode.com/u/RohitYadav94/"
                        className="text-black hover:text-blue-600 transition"
                        aria-label="LeetCode page"
                        >
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                        >
                            <path d="M256 0C114.624 0 0 114.624 0 256s114.624 256 256 256 256-114.624 256-256S397.376 0 256 0zm0 472c-119.296 0-216-96.704-216-216S136.704 40 256 40s216 96.704 216 216-96.704 216-216 216zm109.184-145.6c-1.536 4.992-6.016 8.64-11.232 9.408l-94.848 12.16c-5.632.704-10.432-2.944-12.352-8.192l-56-136c-1.536-3.84-.512-8.064 2.496-11.008l49.28-49.92c3.008-3.072 7.36-4.352 11.36-3.136l90.336 28.416c4.992 1.536 8.64 6.016 9.408 11.232l13.504 94.848c.704 5.632-2.944 10.432-8.192 12.352l-49.28 18.688z"/>
                        </svg>
                        <span className="sr-only">LeetCode page</span>
                        </Link>

                        
                    </div>
                </div>
            </div>
        </footer>
    );
}