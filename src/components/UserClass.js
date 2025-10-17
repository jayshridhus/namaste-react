import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                login:"default",
                url:"default",
                avatar_url:"http://dummy-photo.com"
            }
        };
    }
  
     async componentDidMount(){
       const data=await fetch("https://api.github.com/users/jayshridhus");
       const json=await data.json();
       this.setState({
           userInfo:json,
       });

    }

    render() {
        const {login,url,avatar_url}=this.state.userInfo;
        return(
        <div className="user-card"> 
           <img src={avatar_url}></img>
           <h2>Name:{login}</h2>
           <h3>Git Url:{url}</h3>

        </div>
    );
 }
}

export default UserClass;