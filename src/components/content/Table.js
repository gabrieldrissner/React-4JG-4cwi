import React from 'react'

export default function Table() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
        res.json().then((data) => {
          setPeople(data);

          console.log(data);
        })
      );
    }, []);
  

  
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
  
