import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Navigator from "./components/Navigator";
import { client } from "./client.js";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  const [profile, setProfile] = useState(null);
  const [work, setWork] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);

  useEffect(() => {
      client.fetch(`*[_type == "profile"]`).then((profile) => setProfile(profile));
      client.fetch(`*[_type == "work"]`).then((work) => setWork(work));
      client.fetch(`*[_type == "education"]`).then((education) => setEducation(education));
      client.fetch(`*[_type == "experience"]`).then((experience) => setExperience(experience));
  },[])

  return (
    <div className="">
      {profile?.map((profile, index) => (
        index === 0 ?
        <>
        <Navigator />
        <Header profile={profile} />
        <About profile={profile} />
        <Education education={education} />
        <Experience experience={experience} />
        <Projects work={work} />
        <Contact profile={profile} />
        </>
        : ''
      ))}
    </div>
  );
}

export default App;
