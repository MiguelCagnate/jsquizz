import { Button } from "@mui/material";
import { useQuestionsData } from "../../hooks/useQuestionData";
import { useQuestionsStore } from "../store/questions";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "7px", textAlign: "center" }}>
      <div
        style={{ fontSize: "14px" }}
      >{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin respuesta`}</div>
      <div style={{ marginTop: "17px" }}>
        <Button
          style={{
            backgroundColor: "yellow",
            color: "black",
            alignContent: "center",
          }}
          onClick={() => reset()}
        >
          Reiniciar Quizz
        </Button>
      </div>
    </footer>
  );
};
