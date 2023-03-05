
import { useEffect, useState } from "react";
import { setWorkout } from '../Redux_music_store/musicSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Spin } from 'antd';
import{Artists,Artistcard,Loadingcontainer,Artisttexts}from'../styledComponent/create';
const Genre = () => {
  const dispatch = useDispatch();
  const workout = useSelector(state => state.workout.workout);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch('/api/v1/stats/genres');
        const data = await response.json();

        if (response.ok) {
          dispatch(setWorkout(data.songsByGenre));
        } else {
          console.error('Error fetching genres:', response.status);
        }
      } catch (error) {
        console.error('Error fetching genres:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenres();
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
              <h3>Genre Name:&nbsp;&nbsp;&nbsp; {item._id}</h3>
              <h3>Total Genres:&nbsp;&nbsp;&nbsp;{item.count}</h3>
            </Artisttexts>
          </Artistcard>
        )))
      )}
    </Artists>
  );
};

export default Genre;
