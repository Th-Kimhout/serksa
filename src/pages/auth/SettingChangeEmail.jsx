import React from "react";

export function SettingChangeEmail(){
    return(
        <>   
            <main class="mx-32">
                <section>
                    <div class="w-72 ">
                        <p class="font-bold text-2xl">Change Email Address</p>         
                    </div>
                </section>
                <section class="mt-5">
                    <div class="flex flex-row justify-center">
                        <div class="w-72 mr-5 h-72 py-10 px-10 bg-slate-50 rounded-lg leading-relaxed">
                            <p class="font-bold text-xl mb-6">Settings</p>
                            <a href="./Setting-EditInfo.html" class="hover:text-customBlue cursor-pointer">Edit your profile’s information</a>
                            <a href="./Setting-ChangePW.html" class="hover:text-customBlue cursor-pointer">Change your password</a>
                            <a href="./Setting-ChangeEmail.html" class="text-customBlue cursor-pointer">Change your email address</a>
                            <a href="./Setting-DeleteAcc.html" class="hover:text-customBlue cursor-pointer">Delete Account</a>
                            <br/>
                            <p class="mb-7"></p>
                            <a href="./Profile.html" class="hover:text-customBlue cursor-pointer">Back</a>
                        </div>
                        <div class="bg-slate-50 rounded-lg px-5 pt-5 w-793">
                            <form class="py-8 px-5 h-fit grid justify-center">
                                <h2 class="text-xl font-bold">Change An Email</h2>
                                <small class="mt-5">Enter New Email</small>
                                <input class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2 text-sm" type="text" name="" id="" placeholder="Current Password"/>
                                <small>Enter Password</small>
                                <input class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2 text-sm" type="text" name="" id="" placeholder="New Password"/>
                                <small>Comfirm New Password</small>
                                <input class="mt-2 mb-3 border border-slate-400 h-8 w-96 rounded-md leading-8 px-2 text-sm" type="text" name="" id="" placeholder="Comfirm Password"/>
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