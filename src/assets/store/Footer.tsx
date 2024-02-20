import { Button } from "@mui/material";
import { useQuestionsData } from "../../hooks/useQuestionData";
import { useQuestionsStore } from "../store/questions";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin respuesta`}</strong>
      <div style={{ marginTop: "30px" }}>
        <Button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={() => reset()}
        >
          Reiniciar Quizz
        </Button>
      </div>
    </footer>
  );
};


