import React from "react";
import Home from "./Home";
import About from "./About";

const user = {
  name: "Richard",
  city: "Nairobi",
  bio: "Richard Otieno is a highly experienced civil and construction engineer with over 8 years of expertise in highways design, contract administration, and supervision. He is currently pursuing further education in software engineering to combine his technical skills with modern tech solutions. Richard is passionate about integrating IoT in smart cities and utilizing data analytics for efficient infrastructure management.",
  github: "https://github.com/RICHARD-ODHIAMBO-OTIENO",
  linkedin: "https://www.linkedin.com/in/richard-otieno-7b210b7b/"
};

function App() {
  return (
    <div>
      <Home name={user.name} city={user.city} color="firebrick" />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;