import { useLoaderData } from "react-router-dom";

const JobPage = () => {
  const job = useLoaderData();

  return <h1>{job.title}</h1>;
};

export default JobPage;
