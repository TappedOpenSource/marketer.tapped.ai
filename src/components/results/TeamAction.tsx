
const TeamSuggestion = ({ title, actions }: {
    title: string;
    actions: string;
}) => {
  return (
    <>
      <p className="text-white font-extrabold" style={{
        margin: 0,
      }}>{title}</p>
      <p className="text-white text-sm whitespace-pre-line" style={{
        margin: 0,
      }}>{actions}</p>
    </>
  );
};

export default TeamSuggestion;
