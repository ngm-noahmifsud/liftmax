import React from "react";

type WorkoutCardProps = {
  title: string;
  category?: string;
  muscle: string;
};

function WorkoutCard({
  title,
  category = "Machine",
  muscle,
}: WorkoutCardProps) {
  return (
    <div className="bg-slate-300 text-slate-900">
      <div className=" p-2">
        <h3>{title}</h3>
        <div className="[&>*]:bg-slate-900 [&>*]:text-slate-100 [&>*]:rounded-full [&>*]:px-2 [&>*]:py-1 [&>*]:mr-1">
          <span>{category}</span>
          <span>{muscle}</span>
        </div>
      </div>
      <div>
        <p>Workout Content</p>
      </div>
    </div>
  );
}

export default WorkoutCard;
