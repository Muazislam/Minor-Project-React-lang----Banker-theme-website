import Blogcard from "./Blogcard";

function Blog() {
  return (
    <section className="blog py-5">
      <style>{`
        .blog {
          overflow-x: hidden;
        }
        .blog .card {
          width: 100% !important;
          max-width: 24rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
          word-break: break-word;
          overflow-wrap: break-word;
          margin: 0 auto;
        }
        .blog .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        .blog .card-img-top {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .blog .card-body {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .blog .card-body:first-of-type {
          flex: 1 1 auto;
        }
        .blog .card-body:last-of-type {
          padding-top: 0;
          margin-top: auto;
        }
        .blog .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          word-break: break-word;
          overflow-wrap: break-word;
          line-height: 1.4;
        }
        .blog .list-group {
          margin-bottom: 0.75rem;
        }
        .blog .list-group-item {
          padding: 0.5rem 0.25rem;
          border-color: #f1f3f5;
          font-size: 0.9rem;
          color: #6c757d;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .blog .card-text {
          color: #495057;
          line-height: 1.6;
          font-size: 0.95rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .blog .card-link {
          word-break: break-word;
          overflow-wrap: break-word;
          text-decoration: none;
          font-weight: 600;
        }
        .blog .card-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="container px-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-2">Our Blog</h2>
          <p className="text-muted lead">Insights, news, and financial guidance from our experts</p>
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Blogcard
              img={
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"
              }
              title={"Getting Started With Small Business Franchising"}
              author={"Jordan Reyes"}
              date={"Mar 4, 2025"}
              newsLink={"https://example.com/blog/franchising-basics"}
              description={
                "A practical look at what it actually takes to open a franchise location — the upfront costs, legal paperwork, and the questions most first-timers forget to ask."
              }
              externalLink={"https://example.com/blog/franchising-basics"}
            />
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Blogcard
              img={
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
              }
              title={"Five Marketing Habits Every New Business Owner Needs"}
              author={"Priya Anand"}
              date={"Apr 12, 2025"}
              newsLink={"https://example.com/blog/marketing-habits"}
              description={
                "You don't need a big budget to build an audience. Here's a rundown of low-cost habits that compound over time and actually move the needle for small teams."
              }
              externalLink={"https://example.com/blog/marketing-habits"}
            />
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Blogcard
              img={
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
              }
              title={"Why Cash Flow Matters More Than Profit in Year One"}
              author={"Marcus Webb"}
              date={"May 27, 2025"}
              newsLink={"https://example.com/blog/cash-flow-year-one"}
              description={
                "Profitable on paper but broke in the bank account — it happens more than people think. A breakdown of why timing matters just as much as the numbers themselves."
              }
              externalLink={"https://example.com/blog/cash-flow-year-one"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
