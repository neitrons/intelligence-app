import { subjects } from "../../data/subjects";
import { Subject } from "./components/Subject/Subject";

export default function index() {
  return (
    <>
      {subjects?.map((subject) => {
        return <Subject key={subject.id} subject={subject} />;
      })}
    </>
  );
}
