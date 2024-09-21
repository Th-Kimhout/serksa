import React from "react";

export function SettingDeleteAcc(){
    return(
        <>
            <main class="mx-32">
                <section>
                    <div class="w-72 ">
                        <p class="font-bold text-2xl">Delete Account</p>         
                    </div>
                </section>
                <section class="mt-5">
                    <div class="flex flex-row justify-center">
                        <div class="w-72 mr-5 h-72 py-10 px-10 bg-slate-50 rounded-lg leading-relaxed">
                            <p class="font-bold text-xl mb-6">Settings</p>
                            <a href="./Setting-EditInfo.html" class="hover:text-customBlue cursor-pointer">Edit your profile’s information</a>
                            <a href="./Setting-ChangePW.html" class="hover:text-customBlue cursor-pointer">Change your password</a>
                            <a href="./Setting-ChangeEmail.html" class="hover:text-customBlue cursor-pointer">Change your email address</a>
                            <a href="./Setting-DeleteAcc.html" class="text-customBlue cursor-pointer">Delete Account</a>
                            <br/>
                            <p class="mb-7"></p>
                            <a href="./Profile.html" class="hover:text-customBlue cursor-pointer">Back</a>
                        </div>
                        <div class="bg-slate-50 rounded-lg px-10 pt-5 w-793">
                            <h2 class="text-xl font-bold">Delete your account permanently</h2>
                            <p class="pt-4">Warning: If you close your account, you will be unsubscribed from all 0 of your courses and will lose access to your account and data associated with your account forever, even if you choose to create a new account using the same email address in the future.</p>
                            <p class="pt-4">Please note, if you want to reinstate your account after submitting a deletion request, you will have 14 days after the initial submission date to reach out to rean@elearning.com to cancel this request.</p>
                            <div class="flex mt-4">
                                <a href="#"><button class="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-customGreen hover:bg-customGreenDarker">Discard</button></a>
                                <a href="#"><button class="text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-customGreen hover:bg-customGreenDarker">Save Changes</button></a>              
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}