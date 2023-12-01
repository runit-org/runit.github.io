export default function HelpContainer({ title, children }) {
  return (
    <div>
      <h2 className="sm:text-3xl mb-1">{title}</h2>
      {children}
    </div>
  );
}
