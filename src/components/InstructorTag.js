import instructors from "../instructors";
const InstructorTag = () => {
  // Create the InstructorTag component here
  const instructorTag = instructors.map((instructor) => {
    return <InstructorTag key={instructor.id} instructor={instructor} />;
  });
  return (
    <div className="AppWrapper">
      <h2>When in doubt, ask for help!</h2>
      <h1>{instructorTag.emoji}</h1>
      <h1>{instructorTag.name}</h1>
      <h1>{instructorTag.github}</h1>
    </div>
  );
};

export default InstructorTag;
