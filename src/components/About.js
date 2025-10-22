import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
 constructor(props){
    super(props);
    console.log("Parent constructor called...");
   }

   componentDidMount(){
    console.log("Parent did mount is called...")
   }

   render(){
    console.log("Parent render...");
    return (
    <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({LoggedInUser})=> (
              <h1 className="text-xl font-bold">{LoggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <User username="jayshridhus" />
        {/* <UserClass name={"Jayshri Dhus(class component)"} location={"pune"} contact={"jayshri.dhus"}/>
        <UserClass name={"Sharvil Rahane(class component)"} location={"pune"} contact={"sharvil.dhus"}/> */}
    </div>
   );
 }}


// const About = ()=>{
// return (
//     <div>
//         <h1>About</h1>
//         <h2>This is Namaste React Web series</h2>
//         <User name={"Jayshri Dhus(functional component)"} location={"pune"} contact={"jayshri.dhus"}/>


//         <UserClass name={"Jayshri Dhus(class component)"} location={"pune"} contact={"jayshri.dhus"}/>
//     </div>
// );
// };

export default About;