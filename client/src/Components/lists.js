import { Card, Spin } from 'antd';

import Delete from'../img/delete.png';
import Edit from'../img/edit (1).png';
import { AiFillEdit } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setWorkout, deleteWorkout,updateWorkout } from '../Redux_music_store/musicSlice';
import { useSelector } from 'react-redux';
import {P1,Music,Cards}from'../styledComponent/create';

const Lists = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const workout = useSelector(state => state.workout.workout)
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fetchworkout = async () => {
      try {
        const response = await fetch("/api/v1/music");
        const json = await response.json();
  
        if (response.ok) {
          dispatch(setWorkout(json));
          setIsLoading(false)
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
    };
      
    fetchworkout();
  }, []);

  const handleDelete = async (id) => {
    setIsDeleting(true)
    try {
      const response = await axios.delete(`/api/v1/music/${id}`);
 
      dispatch(deleteWorkout(workout.filter(c=>c._id !== id)))
      const updatedResponse = await fetch("/api/v1/music");
      const updatedJson = await updatedResponse.json();
      dispatch(setWorkout(updatedJson));
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false)
    }
  }

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`/api/v1/music/${id}`);
      navigate(`/edit/${id}`)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Music>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <Spin size="large" />
        </div>
      ) : (
        workout && workout.map((item) => (
          <Cards key={item._id}>
            <Card
              hoverable
              style={{
                width: 350,
                height: 200,
              }}
            >
              <P1 src={Edit} alt="" className="p1" onClick={() => handleEdit(item._id)} />
              <p style={{ textAlign: "center", marginTop: -20 }}>
                {item.title}
              </p>
              <p style={{ textAlign: "center" }}>{item.artist}</p>
              <p style={{ textAlign: "center" }}>{item.album}</p>
              <p style={{ textAlign: "center" }}>{item.genre}</p>
              {isDeleting ? (
                <Spin size="small" style={{ display: 'block', margin: '0 auto' }} />
              ) : (
                <P1
                  src={Delete}
                  alt=""
                  className="p1"
                  onClick={() => handleDelete(item._id)}
                />
              )}
            </Card>
          </Cards>
        ))
      )}
    </Music>
  );
};

export default Lists;
