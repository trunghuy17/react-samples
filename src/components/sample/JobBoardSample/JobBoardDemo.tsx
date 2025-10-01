import { useEffect, useState } from "react";
import { formatDate } from "../../../helpers/FormatDate";

//https://hacker-news.firebaseio.com/v0/jobstories.json  job stories
// https://hacker-news.firebaseio.com/v0/item/38667654.json job

interface jobs {
  by: string;
  time: number;
  title: string;
  id: number;
}

function JobBoardDemo() {
  const [jobIds, setJobIds] = useState<number[]>([]);
  const [jobs, setJobs] = useState<jobs[]>([]);
  const [page, setPage] = useState<number>(0);
  const LIMIT = 6;

  //get list jobId
  useEffect(() => {
    async function fetchJobIds() {
      try {
        const res = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        const jobIds = await res.json();
        setJobIds(jobIds);
      } catch (err) {
        console.log("Fail to fetch jobIds");
      }
    }
    fetchJobIds();
  }, []);

  //get job by ID
  useEffect(() => {
    async function fetchJobs() {
      const start = page * LIMIT;
      const end = start + LIMIT;
      const idsToLoad = jobIds.slice(start, end);

      const jobsPromise = idsToLoad.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (res) => res.json()
        )
      );
      const jobData = await Promise.all(jobsPromise);
      if (page === 0) {
        setJobs(jobData);
      } else {
        setJobs((prev) => [...prev, ...jobData]);
      }
    }

    if (jobIds.length > 0) {
      fetchJobs();
    }
  }, [page, jobIds]);

  return (
    <div className="mt-5">
      <h1 className="title">Job Board</h1>
      <div className="jobs">
        {jobs.map((job) => (
          <div className="post" key={job.id}>
            <h2 className="post_title">{job.title}</h2>
            <p className="post_metadata">
              By {job.by} · {formatDate(job.time)}
            </p>
          </div>
        ))}
      </div>
      {jobs.length < jobIds.length && (
        <button
          className="load-more-button"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Load more jobs
        </button>
      )}
    </div>
  );
}

export default JobBoardDemo;
