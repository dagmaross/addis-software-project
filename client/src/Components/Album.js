import'../styles/artist.css';
import { useEffect,useState } from "react";
const Album = () => {
    const [artists, setArtists] = useState([]);
  
    useEffect(() => {
      const fetchArtists = async () => {
        try {
          const response = await fetch('/api/v1/stats/albums');
          const data = await response.json();
  
          if (response.ok) {
            setArtists(data.songsByAlbum);
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
          <h3 >Album Name:&nbsp;&nbsp;&nbsp; {item._id}</h3>
          <h3>Total Musics:&nbsp;&nbsp;&nbsp;{item.totalmusic}</h3>
          </div>
</div>
  )))}
    </div>
     );
}
 
export default Album;