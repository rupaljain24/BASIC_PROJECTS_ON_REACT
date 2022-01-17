import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
import './tab.css'



const url = "https://course-api.com/react-tabs-project";

function TabAnotherWay() {


const [loading, setLoading] = useState(true);
const [jobs, setJobs] = useState([]);
const [value, setValue] = useState(0); // as we want to dis[lay sinle object at a time]

const fetchdata = async () => {
  setLoading(true);
  try {
    const response = await fetch(url);
    const jobs = await response.json();
    console.log(jobs);
    setJobs(jobs)
    setLoading(false);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
useEffect(() => {
  fetchdata();
}, []);
if (loading) {
  return <Loading fetchdata={fetchdata} />;
}



return (
    <div>
    <h2>Hello</h2>
    </div>
  );

}
export default TabAnotherWay
