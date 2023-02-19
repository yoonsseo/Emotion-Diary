import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
  }, []);

  const diaryList = useContext(DiaryStateContext);

  const navigate = useNavigate();

  const [originData, setOriginData] = useState();

  const { id } = useParams();

  useEffect(() => {
    if (diaryList.length >= 1) {
      // 일기 데이터가 하나라도 있을 때만 일기 데이터 꺼내기
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        // targetDiary가 있을 때 (올바른 id)
        // 데이터는 state로 사용하겠음
        setOriginData(targetDiary);
      } else {
        alert("존재하지 않는 일기입니다!");
        navigate("/", { replace: true });
        // 잘못된 targetId가 전달되었을 때
        // ex. 일기 5개인데 id 9인 경우
        // 뒤로가기 금지
      }
    }
  }, [id, diaryList]);
  //id나 diaryList가 변하면 다른 데이터(일기) 꺼내야 함

  return (
    <div className="Edit">
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
      {/* 일기 데이터가 있으면 DiaryEditor 렌더 */}
    </div>
  );
};

export default Edit;
