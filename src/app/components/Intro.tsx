import { headerItems, userInfo } from "../constants/constant"
import Image from "next/image"

const Intro:React.FunctionComponent =()=>{
    return(
       <section id={headerItems.home.page}
       className="h-screen flex flex-col  text-center justify-center items-center md:flex-row ">
        <div><Image 
        src="/profile.jpg" 
        alt="Profile Picture"
        width={300}
        height={300}
        className="rounded-full shadow-2xl mt-10"
        
        /></div>



        <div className="md:ml-10 sm:ml-15 md:w-1/2 ">
            <h1 className="text-7xl uppercase hidden md:block">Software Developer</h1>
            <h1 className="text-2xl mt-5 md:text-3xl">Hi, I'm <span className="text-red-900 md:text-4xl">{userInfo.name}</span></h1>
            <p> I am a student at GIAIC, pursuing a course in Artificial Intelligence,
                Web 3.0, &  Metaverse. Passionate about  technology and constantly learning new skills 
                to stay up-to-date with the latest innovations.</p>
                <button className="bg-red-800 w-28 h-10 rounded text-white">Projects</button>
        </div>
       </section>
    )
}
export default Intro