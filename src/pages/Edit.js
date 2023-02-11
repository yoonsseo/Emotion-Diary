import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id : ", id);
  const mode = searchParams.get("mode");
  console.log("mode : ", mode);
  const who = searchParams.get("who");
  console.log("who : ", who);

  return (
    <div>
      <h1>Edit</h1>
      <p>일기 수정 페이지</p>
      <button onClick={() => setSearchParams({ who: "yOnSeo" })}>QS버튼</button>
      <button onClick={() => navigate("/home")}>HOME</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
