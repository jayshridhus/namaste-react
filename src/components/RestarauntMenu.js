import { useEffect } from "react";

const RestarauntMenu = () =>{

  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu= async ()=>{

        const apiUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=560619&catalog_qa=undefined&submitAction=ENTER";

        const resp = await fetch(apiUrl);
        console.log(resp);
        // const strjson = await resp.json();
        // console.log(strjson);
        // const resp = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=560619&catalog_qa=undefined&submitAction=ENTER");
        

          // const resp = await fetch("http://localhost:5000/api/menu");
          // const json = await resp.json();
          // console.log(json);
  };

    return (
        <div className="menu">
            <h1>Name of Restaraunt</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet coke</li>
            </ul>
        </div>
    );
};

export default RestarauntMenu;