import { useEffect, useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import CollegeCard from "./CollegeCard";


const PopularSection = () => {
    const [collegesData, setCollegesData] = useState([]);
    useEffect(()=>{
        fetch('/collegeData.json')
        .then(res=>res.json())
        .then(data=>setCollegesData(data))
    },[])
    return (
        <>
         <SectionTitle firstHeader='Popular' secondHeader='Colleges' subTitle='Find out best college of the year Engineering, Medical, Management, Arts and Science, Law, Nursing, Paramedical' />
         <div className="grid grid-cols-3 gap-6 mb-20">
            {
                collegesData.map(college=><CollegeCard key={college.id} college={college} />)
            }
        </div> 
        </>
    );
};

export default PopularSection;