import ProfileCard from "./profilecard";




const Profile = () => {
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

