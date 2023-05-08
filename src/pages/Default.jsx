// get the URL params
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";

export default function Default() {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    // column & space between items
    <div className="flex flex-col space-y-7">
      <Navbar />
      <div>This is in the url: {params["*"]}</div>
    </div>
  );
}
