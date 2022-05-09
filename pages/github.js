import Container from "@components/Container";
import { useEffect, useState } from "react";

export default function gitub_repos() {
 const [repos, setRepos] = useState();

 // Function to collect data
 const getApiData = async () => {
   const response = await fetch("https://api.github.com/users/igorkowalczyk/repos").then((response) => response.json());
   setRepos(response);
 };

 useEffect(() => {
   getApiData();
 }, []);

 return (
  <Container>
   <p className="mt-2 text-center font-poppins text-black dark:text-white">
   {repos &&
        repos.map((repo) => (
          <div className="rounded-[10px] border-[1px] border-black/[15%] dark:border-white/[15%] p-5">
           <div className="title">{ repo.name } </div>
          </div>
        ))}
   </p>
  </Container>
 );
}
