import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  //console.log(id);

  return (
    <div>
      <h1>Diary</h1>
      <p>일기 상세 페이지</p>
    </div>
  );
};

export default Diary;
