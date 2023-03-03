import'../styles/total.css';
import { useEffect,useState } from "react";
const Totalsong = () => {
    const [workout, setWorkout] = useState({
      totalSongs: 0,
      totalArtists: 0,
      totalAlbum: 0,
      totalGenres: 0,
    });
  
    useEffect(() => {
      const fetchWorkout = async () => {
        try {
          const response = await fetch('/api/v1/stats');
          const json = await response.json();
          if (response.ok) {
            setWorkout(json);
          } else {
            console.log('Response not okay');
          }
        } catch (err) {
          console.log(err);
        }
      };
      fetchWorkout();
    }, []);
  
    return (
      <div className="alltotal">
        <div className="total">
          <h1>Total Songs</h1>
          <h1>Total Artist</h1>
          <h1>Total Album</h1>
          <h1>Total Genre</h1>
        </div>
        <div className="totalnumbers">
          <h1>{workout.totalSongs}</h1>
          <h1>{workout.totalArtists}</h1>
          <h1>{workout.totalAlbum}</h1>
          <h1>{workout.totalGenres}</h1>
        </div>
      </div>
    );
  };
  
 
export default Totalsong;