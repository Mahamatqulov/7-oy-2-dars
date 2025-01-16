import { useState } from "react";

const filters = ["all", "mine", "smm", "frontend", "backend", "design"];

function ProjectFilter({ changeFilter }) {
  const [currentFilter, setCurrentFilter] = useState("all");

  return (
    <div
      role="tablist"
      className=" max-w-[700px] w-full tabs tabs-bordered mb-2 "
    >
      {filters.map((filter) => {
        return (
          <a
            key={filter}
            role="tab"
            className={`tab ${currentFilter == filter ? "tab-active" : ""}`}
            onClick={() => {
              setCurrentFilter(filter);
              changeFilter(filter.toLowerCase());
            }}
          >
            {filter}
          </a>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
