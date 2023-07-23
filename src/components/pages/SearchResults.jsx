import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CollegeCard from "./CollegeCard";

const SearchResults = () => {
  const [matchingColleges, setMatchingColleges] = useState([]);
  const location = useLocation();
  useEffect(() => {
    // Extract the search query from the URL
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('query');

    if (searchQuery) {
      // Send the search query to the backend API
      fetch(`http://localhost:5000/search?searchQuery=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => setMatchingColleges(data))
        .catch((error) => console.error('Error while fetching matching colleges:', error));
    }
  }, [location.search]);
  console.log(matchingColleges);
  return <div className="grid grid-cols-3 gap-8">
    {matchingColleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
  </div>;
};

export default SearchResults;
