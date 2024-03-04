import CardBox from "../../components/Home/CardBox";
import IndexData from "./IndexData";
function Index() {
  return (
      <CardBox cards={IndexData().cards} />
  );
}
export default Index;
