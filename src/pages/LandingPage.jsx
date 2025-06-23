/* Here first we create a landing page which is the page which will be shown first on visiting the website Here we will have login
and signup button .First lets understand landing page*/

import React, { useContext, useState } from "react"
import HERO_IMG from "../assets/hero-img.png"
import { APP_FEATURES} from "../utils/data";
import { useNavigate } from "react-router-dom";
import {LuSparkles} from "react-icons/lu"
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Modal from  "../components/Modal"
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard"

const LandingPage = () => {
    const {user} = useContext(UserContext)
    const navigate = useNavigate();

    const[openAuthModal,setOpenAuthModal] = useState(false);//Tracks whether the Auth modal is open or close
    const[currentPage,setCurrentPage] = useState("login");// Tracks whether the current page is login or signup

    const handleCTA = () => {
        if(!user){
            setOpenAuthModal(true);
        }else{
            navigate("/dashboard")
        }
    }//A placeholder function for "Get Started" button currently doing nothing

    return(
    <>
        <div className="w-full min-h-full bg-[#FFFCEF]">
            <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0 "/>

            <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
            {/* Header */}
            <header className="flex justify-between items-center mb-16">
                <div className="text-xl text-black font-bold">
                    Interview Prep AI
                </div>
                {user ? ( 
                    <ProfileInfoCard/> 
                ) : (
                <button className="bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer"
                 onClick={() => setOpenAuthModal(true)}>
                    Login/Sign Up
                </button>
                )}
            </header>

            {/*Hero Content*/}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                        <div className="flex items-center justify-left mb-2">
                            <div className="flex items-center gap-2 text-[13px] text-amber-600 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                               <LuSparkles/> AI powered
                            </div>
                        </div>
                             <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
                                Ace Interviews with <br/>
                                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate text-shine font-semibold">
                                    AI-Powered
                                </span>{" "}
                                Learning
                             </h1>
                    </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                                Get role specific questions, expand answers when you need them,
                                dive deeper into concepts and organize everything your way.
                                From preparation to mastery - your ultimate interview toolkit is
                                here.
                            </p>
                            <button className="bg-black text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer" onClick={handleCTA}>
                                Get started
                            </button>
                        </div>
                </div>
            </div>
        </div>

        <div className="w-full min-h-full relative z-10 mb-56">
              <div>
                <section className="flex items-center justify-center -mt-36">
                    <img src={HERO_IMG} alt="Hero Image" className="w-[50vw] rounded-lg"/> 
                </section>
              </div>

              <div className="w-full min-h-full bg-[#FFFCEF] mt-10">
                <div className="container mx-auto px-4 pt-10 pb-20">
                    <section className="mt-5">
                        <h2 className="text-2xl font-medium text-center mb-12">
                            Features that make you shine
                        </h2>
                        <div className="flex flex-col items-center gap-8">
                            {/*First 3 cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {APP_FEATURES.slice(0,2).map((feature) => (
                                    <div keys={feature.id} className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100">
                                        <h3 className="text-base font-semibold mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            {/*Reamining 2 cards*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
                                {APP_FEATURES.slice(3).map((feature) => (
                                    <div keys={feature.id} className="bg-[#FFFEF8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100">
                                        <h3 className="text-base font-semibold mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
              </div>
              <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5 ">
                Made with love... Happy Coding
              </div>
        </div>

        <Modal 
            isOpen={openAuthModal}//This prop tells the modal whether it should be visible or not , if true it will render if not true it wont render
            onClose={() => {//This is callback fucntion that will be triggered when it is asked to close
                setOpenAuthModal(false);
                setCurrentPage("login");
            }}
            hideHeader
            >
                <div>
                    {currentPage === "login" && (
                        <Login setCurrentPage={setCurrentPage}/>
                    )} 
                    {currentPage === "signup" && (
                        <Signup setCurrentPage={setCurrentPage}/>
                    )}
                </div>
        </Modal>
    </>
    )
}

export default LandingPage