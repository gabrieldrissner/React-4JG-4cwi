import React, { useEffect } from 'react'

export default function PeopleContainer() {

  
useEffect(() => {
    fetch("https://659fef475023b02bfe8adea7.mockapi.io/person").then(
        (res) => res.json().then((data) => {
            console.log(data);  

            
        })
    );
},[]);

  return (
    <div>
      <h1>People</h1>
    </div>
  )
}