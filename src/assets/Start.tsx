import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const Start = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);
  const handledClick = () => {
    fetchQuestions(5);
  };
  return (
    <div
      style={{
        textAlign: "center",
        width: "300px",
      }}
    >
      <Button
        sx={{
          marginTop: "10px",
          color: "yellow",
          backgroundColor: "black",
          textAlign: "center",
          alignItems: "center",
        }}
        onClick={handledClick}
        variant="contained"
      >
        Empezar!
      </Button>
    </div>
  );
};

export default Start;
