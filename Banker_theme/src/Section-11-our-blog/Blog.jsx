import Blogcard from "./Blogcard";

function Blog() {
  return (
    <section className="blog">
      <h1>Our Blog</h1>

      <div className="grid text-center">
        {/* Card 1 */}
        <div className="g-col-3">
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
        <div className="g-col-3">
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
        <div className="g-col-3">
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
    </section>
  );
}

export default Blog;
