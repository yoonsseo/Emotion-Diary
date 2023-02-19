import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import DiaryEditor from "../components/DiaryEditor";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

// export const getStringDate1 = (date) => {
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();
//   if (month < 10) {
//     month = `0${month}`;
//   }
//   if (day < 10) {
//     day = `0${day}`;
//   }
//   return `${year}-${month}-${day}`;
// };

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - 새 일기`;
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
};

export default New;
