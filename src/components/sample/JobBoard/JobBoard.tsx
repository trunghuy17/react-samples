import JobBoardDemo from "./JobBoardDemo";

function JobBoard() {
  return (
    <div className="p-5">
      <div className="jobboard-requirements">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900 flex items-center">
          Requirements
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a job board that displays the latest job postings fetched from
          the Hacker News API, with each posting displaying the job title,
          poster, and date posted.
          <ul className='space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5"'>
            <li>
              The page should show 6 jobs on initial load with a button to load
              more postings.
            </li>
            <li>
              Clicking on the <b>Load more</b> button will load the next page of
              6 postings. The button does not appear if there aren't any more
              postings to load.
            </li>
          </ul>
          <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
            API
          </h2>
          <ul className='class="space-y-1 text-gray-500 list-disc list-inside mt-5 ml-5"'>
            <li>
              Get job stories:{" "}
              <a
                href="https://hacker-news.firebaseio.com/v0/jobstories.json"
                className="font-medium text-blue-600 underline"
              >
                https://hacker-news.firebaseio.com/v0/jobstories.json
              </a>
            </li>
            <li>
              Get job:{" "}
              <a
                href="https://hacker-news.firebaseio.com/v0/item/38667654.json"
                className="font-medium text-blue-600 underline"
              >
                https://hacker-news.firebaseio.com/v0/item/38667654.json
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <hr className="box-content"/>
      </div>
      <JobBoardDemo />
    </div>
  );
}

export default JobBoard;
