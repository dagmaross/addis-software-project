
import { useEffect, useState } from 'react';
import { setWorkout } from '../Redux_music_store/musicSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Spin } from 'antd';
import { Artists, Artistcard, Loadingcontainer, Artisttexts } from '../styledComponent/create';
const Artist = () => {
  const dispatch = useDispatch();
  const workout = useSelector((state) => state.workout.workout);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('/api/v1/stats/artists');
        const data = await response.json();

        if (response.ok) {
          dispatch(setWorkout(data.songsByArtist));
        } else {
          console.error('Error fetching artists:', response.status);
        }
      } catch (error) {
        console.error('Error fetching artists:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtists();
  }, []);

  return (
    <Artists>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <Spin size="large" />
        </div>
      ) : (
        Array.isArray(workout) &&
        workout.map((artist, index) => (
          <Artistcard key={index}>
            <Artisttexts>
              <h3>Artist:&nbsp;&nbsp;&nbsp; {artist.artist}</h3>
              <h3>Total Musics: &nbsp;&nbsp;&nbsp;{artist.songs}</h3>
              <h3>Total Albums: &nbsp;&nbsp;&nbsp;{artist.albums}</h3>
            </Artisttexts>
          </Artistcard>
        ))
      )}
    </Artists>
  );
};

export default Artist;

