import {React,useState} from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddEducation = () => {
  const navigate = useNavigate();
  const [selectedEducation, setSelectedEducation] = useState("");
  const [formData, setFormData] = useState({
      course:"CS2124",
      school:"UTSA",
      start_date:"January 10th",
      end_date:"may 5th",
      grade:"90",
      logo:"",
    });
    const [errorData, setErrorData] = useState({
      course:false,
      school:false,
      startDate:false,
      endDate:false,
      grade:false,
      logo:false,
    });


    const handleFormData = (event) => {
      let name = event.target.name;
  
      setFormData((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }));
    };
  
    const handleGetEducation = async () => {
        axios
          .get("http://127.0.0.1:5000/resume/education", 0)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((err) => toast.error(err?.message));
          axios
          .get("http://127.0.0.1:5000/resume/education", 1)
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((err) => toast.error(err?.message));
      };
      const handleAddEducation = async () => {
        axios
          .post("http://127.0.0.1:5000/resume/education",formData )
          .then((res) => {
            console.log(res.data);
            navigate("/");
          })
          .catch((err) => toast.error(err?.message));
      };
    

  return (
    //Try to grab from backend next
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button >Add Education</button>
        <br></br>
      </div>
      <button onClick={handleGetEducation}>Submit</button>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={handleAddEducation}>TEST</button>
    </div>
  );
};

export default AddEducation;