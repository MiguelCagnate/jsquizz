import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const Start = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);
  const handledClick = () => {
    fetchQuestions(5);
  };
  return (
    <Button
      sx={{ marginTop: "24px", color: "yellow", backgroundColor: "black" }}
      onClick={handledClick}
      variant="contained"
    >
      Empezar!
    </Button>
  );
};

export default Start;
