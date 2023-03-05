
import { useEffect, useState } from "react";
import { setWorkout } from '../Redux_music_store/musicSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {Spin}from'antd';
import{Total,Alltotal,Totalnumber}from'../styledComponent/create';
const Totalsong = () => {

  const dispatch = useDispatch();
  const workout = useSelector(state => state.workout.workout);
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch('/api/v1/stats');
        const json = await response.json();
        if (response.ok) {
          dispatch(setWorkout(json));
        } else {
          console.log('Response not okay');
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false); 
      }
    };
    fetchWorkout();
  }, []);

  return (
    <Alltotal>
    <Total>
      <h1>Total Songs</h1>
      {isLoading ? ( 
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
      <Spin size="large" />
    </div>
      ) : (
        <h1 style={{ color: "blue" }}>{workout?.totalSongs}</h1>
      )}
      <h1>Total Artist</h1>
      {isLoading ? ( 
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <Spin size="large" />
        </div>
      ) : (
        <h1 style={{ color: "blue" }}>{workout?.totalArtists}</h1>
      )}
      <h1>Total Album</h1>
      {isLoading ? ( 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
        <Spin size="large" />
      </div>
      ) : (
        <h1 style={{ color: "blue" }}>{workout?.totalAlbum}</h1>
      )}
      <h1>Total Genre</h1>
      {isLoading ? ( 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
        <Spin size="large" />
      </div>
      ) : (
        <h1 style={{ color: "blue" }}>{workout?.totalGenres}</h1>

      )}
    </Total>
  </Alltotal>
  );
};

export default Totalsong;
