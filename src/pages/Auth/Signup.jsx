import React,{useContext,useState} from "react"
import { useNavigate } from "react-router-dom";
import Input from '../../components/Inputs/Input';
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";
import { UserContext } from "../../context/userContext";
import { API_PATHS } from "../../utils/apiPaths";
import axiosInstance from '../../utils/axiosInstance';
import uploadImage from "../../utils/uploadImage";

const Signup = ({setCurrentPage}) => {
    const [profilePic,setProfilePic] = useState(null);
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [error,setError] = useState(null);

    const {updateUser} = useContext(UserContext)
    const navigate = useNavigate();

    //Handle signup form submit
    const handleSignup = async(e) =>{
        e.preventDefault();

        let profileImageUrl= "";
        
        if(!fullName){
            setError("Enter the full name")
            return
        }

        if(!validateEmail(email)){
            setError("Enter a valid email address")
            return
        }

        if(!password){
            setError("Enter a password")
            return
        }
        setError("");

        //Login API Calls
        try{
            //Upload image if present
            if(profilePic){
                const imgUploadRes = await uploadImage(profilePic)
                profileImageUrl = imgUploadRes.imageUrl || ""
            }
            const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER,{
                name:fullName,
                email,
                password,
                profileImageUrl
            })

            const {token} = response.data
            if(token){
                localStorage.setItem("token",token)
                updateUser(response.data)
                navigate("/dashboard");
            }

        }catch(error){
            if(error.response && error.response.data.message){
                setError(error.response.data.message)
            }else{
                setError("Something went wrong.Please try again")
            }
        }
    };
    return <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
        <h3 className="text-lg font-semibold text-black">Create an account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below</p>

        <form onSubmit={handleSignup}>

            <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                <Input
                    value={fullName}
                    onChange={({target}) => setFullName(target.value)}
                    label="Full Name"
                    placeholder="John"
                    type="text"
                />
                 <Input
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    label="Email"
                    placeholder="John@example.com"
                    type="text"
                />
                 <Input
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                    label="password"
                    placeholder="Min 8 characters"
                    type="password"
                />
                
            </div>
            {error && <p className="text-red-500 text-sx pb-2.5">{error}</p>}
            <button type="submit" className="btn-primary">
                SIGNUP
            </button>
            <p className="text-[13px] text-slate-800 mt-3">
                Already have an account?{" "}
                <button className="font-medium text-primary underline cursor-pointer" onClick={() => {
                    setCurrentPage("login")
                }}>
                    Login
                </button>
            </p>
        </form>
    </div>
}

export default Signup