import PageWrapper from "../../components/common/PageWrapper";

export default function Departments() {
  return (
    <PageWrapper title="Departments">
      <div className="card-grid">
        <div className="card">CSE</div>
        <div className="card">ECE</div>
        <div className="card">EEE</div>
        <div className="card">Mechanical</div>
      </div>
    </PageWrapper>
  );
}