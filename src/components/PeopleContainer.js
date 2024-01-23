import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://659fef475023b02bfe8adea7.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
        console.log(data);
      })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter(person => person.name.includes(filter));
    setFilteredPeople(filtered);
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-sans font-bold justify-center mb-4">People</h1>
      <div className="border mb-4">
        <input
          className="border p-3"
          type="text"
          placeholder="Search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPeople.map((person) => {
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
