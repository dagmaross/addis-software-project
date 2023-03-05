import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import{Input,Label,Text4,List,Button,Loadingbar,Loadingbarfill,Form}from'../styledComponent/create';

import{Spin}from'antd';
const CreateList = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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

      setTitle('');
      setArtist('');
      setAlbum('');
      setGenre('');
      setError(null);
      setIsLoading(false);
      console.log('new list added', json);
      alert('Successful');
      navigate('/');
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <List>
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
        <Spin size="large" />
      </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="">Title</Label>
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Label htmlFor="">Artist</Label>
        <Input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        <Label htmlFor="">Album</Label>
        <Input type="text" value={album} onChange={(e) => setAlbum(e.target.value)} />
        <Label htmlFor="">Genre</Label>
        <Input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <Button>
          <Text4>Create</Text4>
        </Button>
      </Form>
    </List>
  );
};

export default CreateList;
