import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Person from "./Person";

const fetchPeople = async () =>
  await axios.get("https://swapi.dev/api/people/");

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data?.data);
  console.log(status);
  return (
    <div>
      <h2>People</h2>
      {status === "error" && <p>Error Fetching data </p>}
      {status === "loading" && <p>Loading data </p>}
      {status === "success" && (
        <section>
          {data.data.results.map((person) => {
            return <Person person={person} key={person.name} />;
          })}
        </section>
      )}
    </div>
  );
};

export default People;
