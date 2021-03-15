import React from "react";

export default function DogsByName() {
    
    let dogs = localStorage.getItem("dogs");
    dogs = (dogs) ? JSON.parse(dogs) : [];
    
    const DogList = dogs.map(item => {
        const container = {};
        container[item.name] = item.name;
        return container;
    })

    return(
       {DogList}
    )

}


export {DogsByName}
