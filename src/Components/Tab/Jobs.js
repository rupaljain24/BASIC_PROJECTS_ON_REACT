import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

function Jobs({ jobs}) {
  const { id, order, title, duties, company, dates } = { jobs };
  return (
    <section>
      <div className="job-center">
        {jobs.map((job) => {
          console.log(job.company);
          return (
            <article key={job.id} className="job-info">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p className="job-date">{job.dates}</p>
              {job.duties.map((duty) => {
                return (
                  <div key={duty} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                  </div>
                );
              })}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Jobs;
