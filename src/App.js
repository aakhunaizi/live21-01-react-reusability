import { AppWrapper } from "./components/styles";
import InstructorTag from "../src/components/InstructorTag";
import instructors from "./instructors";
const App = () => {
  const Instructors = instructors.map((instructor) => (
    <InstructorTag
      key={instructor.id}
      emoji={instructor.emoji}
      name={instructor.name}
      github={instructor.github}
    />
  ));
  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {Instructors}
    </AppWrapper>
  );
};

export default App;
