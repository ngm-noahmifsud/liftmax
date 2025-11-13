import React from "react";

type WorkoutCardProps = {
  title: string;
  category?: string;
  measurement?: string;
  muscle: string;
};

function WorkoutCard({
  title,
  category = "Machine",
  measurement = "kg",
  muscle,
}: WorkoutCardProps) {
  return (
    <div className="bg-slate-700 text-slate-100 rounded-md p-2">
      <div>
        <h3 className="mb-1">{title}</h3>
        <div className="[&>*]:rounded-full [&>*]:px-2 [&>*]:py-1 [&>*]:mr-1 [&>*]:border-1">
          <span>{category}</span>
          <span>{muscle}</span>
          <span>{measurement}</span>
        </div>
      </div>
      <div>
        <p>User statistics</p>
      </div>
    </div>
  );
}

export default WorkoutCard;
