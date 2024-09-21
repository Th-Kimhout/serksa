import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <main class="mx-32 mt-5">
                <section class="mb-5">
                    <p class="font-bold text-sm md:text-2xl mx-60">Account Settings</p>
                </section>
                <section class=" mt-5">
                    <div class="flex flex-col lg:flex-row lg:justify-center  ">
                        <div class="w-40 mr-5 h-40 grid content-center place-content-center bg-slate-50 rounded-lg min-w-screen-sm justify-center">
                            <a href="#" class="text-customBlue cursor-pointer">Profile</a>
                            <Link to="/EditInfo" class="hover:text-customBlue cursor-pointer mb-3">Settings</Link>
                            <hr class=" border-t-2 border-gray-300"/>
                            <a href="./Profile.html" class="hover:text-customBlue cursor-pointer">Logout</a>
                        </div>
                        <div class="grid justify-center bg-slate-50 rounded-lg px-5 pt-5 w-fit">
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="w-40 h-40 rounded-full" alt=""/>
                                </div>
                                <form class="py-8 px-5 h-36 mb-96 grid justify-center">
                                    <h2 class="text-xl font-bold">Personal Information</h2>
                                    <p class="mt-4">Name</p>
                                    <small class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2">Oeng Kimcheng</small>
                                    <p>Username</p>
                                    <small class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2">@Ahcheng16</small>
                                    <p>Gender</p>
                                    <small class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2">Female</small>
                                    <p>Email address</p>
                                    <small class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2">ahkimcheng@gmail.com</small>
                                    <p>Bio</p>
                                    <small class="mt-2 mb-3 border border-slate-400 h-fit w-96 rounded-md leading-8 px-2">Yesterday is in the past, Today is today.</small>
                                </form>
                        </div>
                    </div>
                </section>
            </main></>
  )
}
