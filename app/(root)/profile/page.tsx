import { getUserInfo } from "@/app/actions/authservice";
import ProfileCard from "./profilecard";
import { useStyleRegistry } from "styled-jsx";
import { redirect } from "next/navigation";
import { getuserbyid } from "@/app/actions/fetch";




const Profile = async() => {
  
  const user = {
    name: "Marcus Gideon Oware",
    email: "marcuoware@gmail.com",
    country: "Ghana",
    address: "Ashanti,Kumasi,Domeabra",
    contact:"05039833029"
  }  
  return (
    <section  className="">
         <ProfileCard 
         className=""
         {...user}
         />
    </section>
  )
}

export default Profile;

