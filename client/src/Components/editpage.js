import '../styles/createlist.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import'../styles/header.css'
import axios from 'axios';

const Edit = () => {
    
    const{id}=useParams();

    const [title, settitle] = useState('');
    const [artist, setartist] = useState('');
    const [album, setalbum] = useState('');
    const [genre, setgenre] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchdata(){
            const response=await axios.get(`/api/v1/music/${id}`);
            const musicget=response.data
            settitle(musicget?.title)
            setartist(musicget?.artist)
            setalbum(musicget?.album)
            setgenre(musicget?.genre)
        }
        fetchdata()
    }, []);
const handleUpdate=async(e)=>{
e.preventDefault()
try {
    const response=await axios.patch(`/api/v1/music/${id}`,{
title,
artist,
album,
genre
})
alert('updated successfully')
navigate('/lists')
} catch (error) {
   console.log(error); 
}
}
    return ( 
        <div>
              <h1><span className="s1"> Update </span> <span className="s2">Your</span> <span className="s3">Music List</span> </h1>
               <div className="list" >
        <form action="">
            <label htmlFor="">Title</label>
            <input type="text" 
            onChange={(e)=>settitle(e.target.value)}
            value={title}
            />
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
            <button onClick={(e)=>handleUpdate(e)}><h4>update</h4></button>
        </form>

    </div> 
        </div>
    
     );
}
 
export default Edit;