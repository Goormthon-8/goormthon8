import Button from "../../components/Button";
import GlobalNavigation from "../../components/GNB";
import Input from "../../components/Input";

const Main = () => {
  return (
    <>
      <h1>확인!</h1>
      <Button>입력하기</Button>
      <GlobalNavigation nowPage={2} />
      <Input placeholder="입력해주세요" />
    </>
  );
};

export default Main;
