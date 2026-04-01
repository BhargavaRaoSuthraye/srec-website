export default function PageWrapper({ title, children }) {
  return (
    <div className="page-container">
      <h1 className="page-title">{title}</h1>
      <div className="page-content">{children}</div>
    </div>
  );
}