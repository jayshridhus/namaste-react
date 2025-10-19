import { useEffect, useState } from "react"

const useGitProfileData= (username)=>{
   
    const [profileData,setProfileData] = useState();

        useEffect(() => { 
            fetchProfile();
          }, []);
    
    
           const fetchProfile= async ()=>{
            const apiUrl = "https://api.github.com/users/" + username;
                  
            const resp = await fetch(apiUrl);
            const json=await resp.json();
            setProfileData(json);

           };
          return profileData;
        };

        export default useGitProfileData;
