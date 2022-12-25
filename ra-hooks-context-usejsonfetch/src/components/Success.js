import React from 'react';
import {useFetchJson} from "../hooks/useFetchJson";

const Success = () => {
  const [data, loading, error] = useFetchJson('http://localhost:7070/data', {})
  return (
    <div>
      {data && <p className="text-centered">{data.status}</p>}
    </div>
  );
};

export default Success;
