import React from "react";
import { Navbar, WorkoutCard } from "../components";

function Exercises() {
  return (
    <div>
      <Navbar title="Exercises" />
      <div className="[&>*]:mb-4">
        <WorkoutCard title="Preacher Curls" muscle="Biceps" />
        <WorkoutCard title="Tricep push-downs" muscle="Triceps" />
        <WorkoutCard title="Lat pull-down" muscle="Back" />
      </div>
    </div>
  );
}

export default Exercises;
