import PageWrapper from "../../components/common/PageWrapper";

export default function News() {
  return (
    <PageWrapper title="News & Events">
      <div className="card-grid">
        <div className="card">Workshop</div>
        <div className="card">Seminar</div>
      </div>
    </PageWrapper>
  );
}