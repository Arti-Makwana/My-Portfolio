import { UserObject } from "../models/user"
import { NavItems } from "../models/header"

export const userInfo:UserObject={
    name:'Arti Makwana',
    picture:'profile.jpg',
    about:'Currently pursuing an IT course with a specialization in website development. Developing expertise in front-end and back-end technologies, including HTML, CSS, JavaScript, and modern frameworks. Hands-on experience in creating responsive, aesthetically pleasing, and functional websites that deliver exceptional user experiences. Proficient in integrating design and functionality to meet diverse project needs.',
  
}
export const headerItems:NavItems={
    home:{label:'Home',page:'home'},
    about:{label:'About',page:'about'},
    projects:{label:'Projects',page:'projects'},
   
}

export const projects={
    calculator:{image:"https://i.ibb.co/cQzN2C6/project2.jpg"} ,
    resume:{image:"https://i.ibb.co/DRjJ3G0/project1.png" },
    currency:{image:"https://i.ibb.co/YbNG2k4/project3.png"},
}