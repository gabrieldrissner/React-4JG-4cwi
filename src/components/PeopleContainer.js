import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://659fef475023b02bfe8adea7.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        console.log(data);
      })
    );
  }, []);

  const filterPeople = (filter) =>{
   let filtered= people.filter(person => person.name.includes(filter));
   setPeople(filtered);
  }

  return (
    <div>
      <h1>People</h1>
      <div className="border">
        <input className="border p-3" type="text" placeholder="Search" onChange={(el)=>{
          console.log(el.target.value); 
        }}/>
        </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {people.map((person) => {
          return (
            <Card
              title={person.name}
              imgUrl={person.avatar}
              description={person.jobtitle}
            />
          );
        })}
      </div>
    </div>
  );
}
