import PageWrapper from "../../components/common/PageWrapper";

export default function Placements() {
  return (
    <PageWrapper title="Placements">
      <p>Highest Package: ₹12 LPA</p>

      <div className="card-grid">
        <div className="card">TCS</div>
        <div className="card">Infosys</div>
        <div className="card">Wipro</div>
      </div>
    </PageWrapper>
  );
}