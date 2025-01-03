import { headerItems, userInfo } from "../constants/constant";
import Image from "next/image";

const About: React.FunctionComponent = () => {
  return (
    <section
      id={headerItems.about.page || "about"}
      className="h-screen flex flex-col text-center justify-center items-center md:flex-row"
    >
      <div className="md:ml-10 sm:ml-4 md:w-1/2">
        <h1 className="text-5xl my-6">About</h1>
        <h2 className="text-2xl my-4">Get to know me!</h2>

        <p
          className="[&>p]:mt-5"
          dangerouslySetInnerHTML={{
            __html: userInfo.about 
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src="/profile.jpg"
          alt="dp"
          width={300}
          height={300}
          className="m-auto rounded-full"
        />
        <div className=" m-1 p-2 text-black-200 bg-slate-300 text-sm inline-block rounded-md"> HTML CSS TYPESCRIPT NODEJS REACT NEXT
        </div>
       </div>
       </section>)}
       export default About