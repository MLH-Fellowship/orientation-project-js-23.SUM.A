import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const EditSkillHook = async (formData, url) => {
  const navigate = useNavigate();
  axios
    .put(url, {
      ...formData,
    })
    .then((res) => {
      console.log(res.data);
      navigate("/");
    })
    .catch((err) => toast.error(err?.message));
};
