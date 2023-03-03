import '../styles/createlist.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateList = () => {

    const [title, settitle] = useState('');
    const [artist, setartist] = useState('');
    const [album, setalbum] = useState('');
    const [genre, setgenre] = useState('');
    const [error, seterror] = useState(null);
    
    const handlesubmit = async (e) => {
 
      e.preventDefault();
    
      const workout = { title, artist, album, genre };
    
      try {
        const response = await fetch('/api/v1/music', {
          method: 'POST',
          body: JSON.stringify(workout),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        const json = await response.json();
    
        if (!response.ok) {
          throw new Error(json.error);
        }
    
        settitle('');
        setartist('');
        setalbum('');
        setgenre('');
        seterror(null);
    
        console.log('new list added', json);
        alert("sucessful")
      } catch (error) {
        seterror(error.message);
      }
    };
    
    return (
        <div className="list" onSubmit={handlesubmit} >
            <form action="">
                <label htmlFor="">Title</label>
                <input type="text" 
                onChange={(e)=>settitle(e.target.value)}
                value={title} />
                <label htmlFor="">Artist</label>
                <input type="text" 
                  onChange={(e)=>setartist(e.target.value)}
                  value={artist}
                />
                <label htmlFor="">Album</label>
                <input type="text" 
                  onChange={(e)=>setalbum(e.target.value)}
                  value={album}
                />
                <label htmlFor="">Genre</label>
                <input type="text"
                  onChange={(e)=>setgenre(e.target.value)}
                  value={genre}
                />
                <button ><h4>Create</h4></button>
            </form>

        </div>

    );
}

export default CreateList;