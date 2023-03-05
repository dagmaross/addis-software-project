
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import{Input,Label,Text4,List,Button,Loadingbar,Loadingbarfil,Form,Title,Span1,Span2,Span3}from'../styledComponent/create';
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
              <Title><Span1> Update </Span1> <Span2>Your</Span2> <Span3 className="s3">Music List</Span3> </Title>
               <List >
        <Form action="">
            <Label htmlFor="">Title</Label>
            <Input type="text" 
            onChange={(e)=>settitle(e.target.value)}
            value={title}
            />
            <Label htmlFor="">Artist</Label>
            <Input type="text" 
               onChange={(e)=>setartist(e.target.value)}
               value={artist}
            />
            <Label htmlFor="">Album</Label>
            <Input type="text" 
              
              onChange={(e)=>setalbum(e.target.value)}
              value={album}
            />
            <Label htmlFor="">Genre</Label>
            <Input type="text"
             
             onChange={(e)=>setgenre(e.target.value)}
             value={genre}
            />
            <Button onClick={(e)=>handleUpdate(e)}><Text4>update</Text4></Button>
        </Form>

    </List> 
        </div>
    
     );
}
 
export default Edit;