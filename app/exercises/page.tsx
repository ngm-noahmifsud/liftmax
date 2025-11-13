import React from "react";
import { Navbar, WorkoutCard } from "../components";

function Exercises() {
  return (
    <div>
      <Navbar title="Exercises" />
      <WorkoutCard title="Preacher Curls" muscle="Biceps" />
    </div>
  );
}

export default Exercises;
