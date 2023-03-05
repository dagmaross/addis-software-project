
import { useEffect, useState } from "react";
import { setWorkout } from '../Redux_music_store/musicSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import{Spin}from'antd';

import{Artists,Artistcard,Loadingcontainer,Artisttexts}from'../styledComponent/create';
const Album = () => {
  const dispatch = useDispatch();
  const workout = useSelector(state => state.workout.workout);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('/api/v1/stats/albums');
        const data = await response.json();

        if (response.ok) {
          dispatch(setWorkout(data.songsByAlbum));
        } else {
          console.error('Error fetching albums:', response.status);
        }
      } catch (error) {
        console.error('Error fetching albums:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <Artists>
      {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <Spin size="large" />
        </div>
      ) : (
        Array.isArray(workout) && workout.map((item => (
          <Artistcard>
            <Artisttexts>
              <h3>Album Name:&nbsp;&nbsp;&nbsp; {item._id}</h3>
              <h3>Total Musics:&nbsp;&nbsp;&nbsp;{item.totalmusic}</h3>
            </Artisttexts>
          </Artistcard>
        )))
      )}
    </Artists>
  );
};

export default Album;
