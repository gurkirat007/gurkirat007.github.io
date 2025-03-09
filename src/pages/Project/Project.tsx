import { useParams } from "react-router-dom";
import { projects } from "../../content/projects";

export default function Project() {
  const { key } = useParams();
  const {
    name,
    description,
    skills,
    category,
  } = projects[key ?? ""];

  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{skills}</p>
      <p>{category}</p>
    </div>
  );
}
