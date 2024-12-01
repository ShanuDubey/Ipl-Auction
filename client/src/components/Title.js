const Title = ({ title, fadeAnimation }) => {
  return (
    <div
      className={`title ${fadeAnimation === "left" ? "fadeLeft" : "fadeRight"}`}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
