import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { JavascriptLogo } from "./assets/JavascirptLogo";
import Start from "./assets/Start";
import { useQuestionsStore } from "./assets/store/questions";
import { Game } from "./assets/store/Game";
import DigitalWatch from "./assets/store/DigitalWatch";

function App() {
  const questions = useQuestionsStore(state => state.questions)
  console.log(questions);
  return (
    <main>
      <DigitalWatch/>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavascriptLogo />
          <Typography variant="h2" component="h1">
            Javascript Quizz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game/>}
      </Container>
    </main>
  );
}

export default App;
