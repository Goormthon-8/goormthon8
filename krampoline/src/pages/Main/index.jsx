import Button from "../../components/Button";
import GlobalNavigation from "../../components/GNB";

const Main = () => {
  return (
    <>
      <h1>확인!</h1>
      <Button>입력하기</Button>
      <GlobalNavigation nowPage={2} />
    </>
  );
};

export default Main;
