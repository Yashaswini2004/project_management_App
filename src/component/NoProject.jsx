import noProject from "../assets/no-projects.png";
import Buttons from "./Buttons";
export default function NoProject({ onAddingProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProject} className="w-16 h-16 object-contain mx-auto " />
      <h2 className="text-xl font-bold text-stone-500 mt-4 my-4">
        No project selected
      </h2>
      <p>Select a project or get satrted with a new one</p>
      <p>
        <Buttons name="Create new project" onClick={onAddingProject} />
      </p>
    </div>
  );
}
