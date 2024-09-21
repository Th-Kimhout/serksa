import React from "react";
import { Link } from "react-router-dom";

export function EditInfo(){
    return(
        <>
        <main class="mx-32">
            <section>
                <div class="w-fit ">
                    <p class="font-bold text-2xl">Edit Personal Information</p>         
                </div>      
            </section>
            <section class="mt-5">
                <div class="flex flex-row justify-center">
                    <div class="w-72 mr-5 h-72 py-10 px-10 bg-slate-50 rounded-lg leading-relaxed">
                        <p class="font-bold text-xl mb-6">Settings</p>
                        <a href="./Setting-EditInfo.html" class="text-customBlue cursor-pointer">Edit your profile’s information</a>
                        <Link to="/ChangePW" class="hover:text-customBlue cursor-pointer">Change your password</Link>
                        <Link to="/SettingChangeEmail" class="hover:text-customBlue cursor-pointer">Change your email address</Link>
                        <Link to="/SettingDeleteAcc" class="hover:text-customBlue cursor-pointer">Delete Account</Link>
                        <br/>
                        <p class="mb-7"></p>
                        <a href="./Profile.html" class="hover:text-customBlue cursor-pointer">Back</a>
                    </div>
                    <div class="bg-slate-50 rounded-lg px-5 pt-5 w-793">
                        <div class="flex flex-row justify-center">
                            <div>
                                <img id="GetImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="w-40 h-40 rounded-full" alt=""/>
                                <button onclick="changePictureButton()" id="change-picture-button" class="bg-customGreen text-white px-3 py-2 rounded-full hover:bg-customGreenDarker transition-all duration-200;"><i class="fa-solid fa-pen"></i></button>
                            </div>
                            <div class="flex flex-col justify-center align-middle px-9">
                                <div>
                                    <h2 class="text-xl font-medium">Name</h2>
                                    <p>@username</p>
                                    <p>UserEmail@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <form class="py-8 px-5 h-40 mb-96 grid justify-center">
                            <h2 class="text-xl font-bold">Personal Information</h2>
                            <p class="mt-4">Name</p>
                            <input class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2" type="text" name="" id="" placeholder="Enter your name"/>
                            <p>Username</p>
                            <input class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2" type="text" name="" id="" placeholder="Enter your Username"/>
                            <p>Gender</p>
                            <input class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2" type="text" name="" id="" placeholder="Enter Gender"/>
                            <p>Email address</p>
                            <input class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2" type="text" name="" id="" placeholder="Enter your Email address"/>
                            <p>Bio</p>
                            <input class="mt-2 mb-3 border border-slate-400 h-12 w-96 rounded-md px-2 " type="text" name="" id="" placeholder="Bio....."/>
                            <div class="flex mt-2">
                                <a href="#"><button class="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-customGreen hover:bg-customGreenDarker">Discard</button></a>
                                <a href="#"><button class="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-customGreen hover:bg-customGreenDarker">Save Changes</button></a>              
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}
