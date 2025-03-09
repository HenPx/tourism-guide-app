import React from "react";
import defaultProfile from '../assets/teamsprofile/default.png'
import KoperSmall from '../assets/png/KoperSmall.png'
import WhatsappLogo from "../assets/svg/WhatsappLogo";
import IgLogo from "../assets/svg/IgLogo";
import TiktokLogo from "../assets/svg/TiktokLogo";

export default function TeamProfiles(){
    return(
        <>
            <div className="flex flex-col sm:flex-row justify-center">
                <img src={defaultProfile} alt="default" />
                <div className="p-6 sm:max-w-[40%]">
                    <h3 className="font-bold text-2xl">Indra Kusuma</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iusto laborum qui, repellendus itaque corporis nihil nemo doloribus fugit, harum delectus ex, debitis eveniet earum odit saepe porro provident error.</p>
                    <div className="space-y-6 mt-6">
                        <div className="flex items-center space-x-4 shadow-md rounded-xl px-6 py-3  hover:shadow-[0_2px_14px_rgba(126,211,233,0.9)]">
                            <img src={KoperSmall} alt="default" />
                            <div>
                                <h4 className="font-bold text-lg">Cheerfull</h4>
                                <p className="text-[#A8A8A8]">Very humble and always say cheese in the first meet.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 shadow-md rounded-xl px-6 py-3  hover:shadow-[0_2px_14px_rgba(126,211,233,0.9)]">
                            <img src={KoperSmall} alt="default" />
                            <div>
                                <h4 className="font-bold text-lg">Cheerfull</h4>
                                <p className="text-[#A8A8A8]">Very humble and always say cheese in the first meet.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 shadow-md rounded-xl px-6 py-3  hover:shadow-[0_2px_14px_rgba(126,211,233,0.9)]">
                            <img src={KoperSmall} alt="default" />
                            <div>
                                <h4 className="font-bold text-lg">Cheerfull</h4>
                                <p className="text-[#A8A8A8]">Very humble and always say cheese in the first meet.</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="" target="_blank" className="text-[#A8A8A8] hover:text-[#42A7C3]">
                                <WhatsappLogo/> 
                            </a>
                            <a href="" target="_blank" className="text-[#A8A8A8] hover:text-[#42A7C3]">
                                <IgLogo/>
                            </a>
                            <a href="" target="_blank" className="text-[#A8A8A8] hover:text-[#42A7C3]">
                                <TiktokLogo/> 
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}