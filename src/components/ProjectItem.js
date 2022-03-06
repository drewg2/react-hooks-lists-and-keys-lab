import React from "react";

function ProjectItem({id, name, about, technologies }) {
  console.log({id})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        
      </div>
    </div>
  );
}

export default ProjectItem;
