import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import DiaryEditor from "../components/DiaryEditor";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const New = () => {
  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
