export default function Title({
  msg,
  colorText,
  colorDivider,
}: {
  msg: string;
  colorText: string;
  colorDivider: string;
}) {
  return (
    <>
      <h2
        className="bold-text huge-text"
        style={{ color: colorText, textTransform: "uppercase" }}
      >
        {msg}
      </h2>
      <div className="add-pd" style={{ backgroundColor: colorDivider }}></div>
    </>
  );
}
