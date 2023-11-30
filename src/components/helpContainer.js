export default function HelpContainer({ title, children }) {
  return (
    <div>
      <h2 className="sm:text-3xl">{title}</h2>
      {children}
    </div>
  );
}
