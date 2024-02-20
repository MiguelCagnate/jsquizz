import { Button } from "@mui/material";
import { useQuestionsStore } from "./store/questions";

const Start = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);
  const handledClick = () => {
    fetchQuestions(5);
  };
  return (
    <div>
      <Button
        sx={{
          marginTop: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "5px",
          color: "yellow",
          backgroundColor: "black",
          width: "170px",
          display: "block",

          // Ensures the button takes up full width
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
