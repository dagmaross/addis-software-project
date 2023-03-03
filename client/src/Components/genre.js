import'../styles/artist.css';
import { useEffect,useState } from "react";
const Genre = () => {
    const [artists, setArtists] = useState([]);
  
    useEffect(() => {
      const fetchArtists = async () => {
        try {
          const response = await fetch('/api/v1/stats/genres');
          const data = await response.json();
  
          if (response.ok) {
            setArtists(data.songsByGenre);
            console.log(artists)
          } else {
            console.error('Error fetching artists:', response.status);
          }
        } catch (error) {
          console.error('Error fetching artists:', error);
        }
      };
  
      fetchArtists();
    }, []);
  
    useEffect(() => {
      console.log(artists);
    }, [artists]);
  
    return ( 
        <div className="artist">
  {artists && artists.map((item=>(
          <div className="artistcard">
          <div className="texts">
          <h3 >Genre Name:&nbsp;&nbsp;&nbsp; {item._id}</h3>
          <h3>Total totalGenres:&nbsp;&nbsp;&nbsp;{item.count}</h3>
          </div>
</div>
  )))}
    </div>
     );
}
 
export default Genre;