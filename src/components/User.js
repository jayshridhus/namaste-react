
import { useParams } from "react-router-dom";
import useGitProfileData from "../utils/useGitProfileData";

const User= ({username})=>{
//  const {username} =useParams();
 const profileData= useGitProfileData(username);
 console.log('hjjhh');
 console.log(profileData);

    return(
     
        <div className="user-card"> 
          <h1>Hello page...........</h1>
        {profileData ? (
        <>
          <img src={profileData.avatar_url} alt={profileData.login} />
          <h2>Name: {profileData.login}</h2>
          <h3>Location: {profileData.location}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
        </div>
    );
};

export default User;