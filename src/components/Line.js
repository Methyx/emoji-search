const Line = ({ emoji }) => {
  return (
    <div className="emoji">
      <p
        onClick={() => {
          navigator.clipboard.writeText(emoji.symbol);
        }}
      >
        <span>
          {emoji.symbol} {emoji.title}
        </span>
        <span className="hidden">click to copy !</span>
      </p>
    </div>
  );
};

export default Line;
