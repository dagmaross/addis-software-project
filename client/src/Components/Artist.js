import'../styles/artist.css';
import { useEffect,useState } from "react";
const Artist = () => {
    const [artists, setArtists] = useState([]);
  
    useEffect(() => {
      const fetchArtists = async () => {
        try {
          const response = await fetch('/api/v1/stats/artists');
          const data = await response.json();
  
          if (response.ok) {
            setArtists(data.songsByArtist);
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
        {artists && artists.map((artist,index) => (
          <div className="artistcard" key={index}>
            <div className="texts">
              <h3 >Artist:&nbsp;&nbsp;&nbsp; {artist.artist}</h3>
              <h3>Total Musics: &nbsp;&nbsp;&nbsp;{artist.songs }</h3>
              <h3>Total Albums: &nbsp;&nbsp;&nbsp;{artist.albums}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
 
export default Artist;