import { Card } from 'antd';
import'../styles/list.css';
import Delete from'../img/delete.png';
import Edit from'../img/edit (1).png';
import { AiFillEdit } from 'react-icons/ai';
import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Lists = () => {
const navigate = useNavigate()
    const [workout, setworkout] = useState();
  
    useEffect(() => {
      const fetchworkout = async () => {
        const response = await fetch("/api/v1/music");
        const json = await response.json();
  
        if (response.ok) {
          setworkout(json);
          console.log(workout);
        }
      };
      

      fetchworkout();
    }, []);
    const handleDelete = async (id) => {
        try {
          const response = await axios.delete(`/api/v1/music/${id}`);
          alert('deleted successfuly')
                setworkout(workout.filter(c=>c._id !== id)) 
          } catch (error) {
          console.error(error);
     
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
      <div className="musics">
        {workout &&
          workout.map((item) => (
            <div className="cards" key={item._id}>
              <Card
                hoverable
                style={{
                  width: 350,
                  height: 200,
                }}
              >
                <img src={Edit} alt="" className="p1"onClick={()=>handleEdit(item._id)} />
                <p style={{ textAlign: "center", marginTop: -20 }}>
                  {item.title}
                </p>
                <p style={{ textAlign: "center" }}>{item.artist}</p>
                <p style={{ textAlign: "center" }}>{item.album}</p>
                <p style={{ textAlign: "center" }}>{item.genre}</p>
                <img
                  src={Delete}
                  alt=""
                  className="p1"
                  onClick={()=>handleDelete(item._id)}
                />
              </Card>
            </div>
          ))}
      </div>
    );
  };
  
  export default Lists;
  