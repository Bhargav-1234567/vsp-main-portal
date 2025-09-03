import React from "react";

const Blog = () => {
  return (
    <>
      <section class="banner-section">
        <div class="banner-image">
          <img
            src="images/banner-blog.svg"
            alt="Immigration Blog & Resources"
            class="img-fluid w-100"
          />
        </div>
        <div class="banner-overlay">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-lg-8">
                <h1 class="display-4 fw-bold text-white mb-4">
                  Immigration Blog
                </h1>
                <p class="lead text-white mb-4">
                  Stay informed with the latest immigration news, policy
                  updates, and expert insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main class="main-content">
        <section class="py-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="featured-article">
                  <div class="article-badge">
                    <span class="badge bg-primary">Featured Article</span>
                  </div>
                  <div class="article-image">
                    <div class="placeholder-image bg-light d-flex align-items-center justify-content-center">
                      <i class="fas fa-newspaper fa-3x text-muted"></i>
                    </div>
                  </div>
                  <div class="article-content">
                    <h2 class="article-title">
                      Express Entry Draw Results: January 2025 Updates
                    </h2>
                    <div class="article-meta">
                      <span class="author">
                        <i class="fas fa-user me-1"></i>Maria Rodriguez
                      </span>
                      <span class="date">
                        <i class="fas fa-calendar me-1"></i>January 10, 2025
                      </span>
                      <span class="reading-time">
                        <i class="fas fa-clock me-1"></i>5 min read
                      </span>
                    </div>
                    <p class="article-excerpt">
                      The first Express Entry draw of 2025 has been announced
                      with significant changes to the selection criteria. Here's
                      what you need to know about the updated CRS score
                      requirements and how they might affect your application...
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read Full Article
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="sidebar">
                  <div class="newsletter-signup">
                    <h5>Stay Updated</h5>
                    <p>
                      Get the latest immigration news delivered to your inbox
                    </p>
                    <form class="newsletter-form">
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      <button type="submit" class="btn btn-primary w-100">
                        Subscribe
                      </button>
                    </form>
                  </div>

                  <div class="recent-articles">
                    <h5>Recent Articles</h5>
                    <div class="recent-article-item">
                      <h6>
                        <a href="#">
                          New Processing Times for Family Sponsorship
                          Applications
                        </a>
                      </h6>
                      <small class="text-muted">January 8, 2025</small>
                    </div>
                    <div class="recent-article-item">
                      <h6>
                        <a href="#">
                          Student Visa Requirements: What Changed in 2025
                        </a>
                      </h6>
                      <small class="text-muted">January 5, 2025</small>
                    </div>
                    <div class="recent-article-item">
                      <h6>
                        <a href="#">
                          Provincial Nominee Program Updates for Ontario
                        </a>
                      </h6>
                      <small class="text-muted">January 3, 2025</small>
                    </div>
                  </div>

                  <div class="popular-categories">
                    <h5>Popular Categories</h5>
                    <div class="category-list">
                      <a href="#policy-updates" class="category-item">
                        <span>Policy Updates</span>
                        <span class="badge bg-secondary">28</span>
                      </a>
                      <a href="#application-tips" class="category-item">
                        <span>Application Tips</span>
                        <span class="badge bg-secondary">34</span>
                      </a>
                      <a href="#case-studies" class="category-item">
                        <span>Case Studies</span>
                        <span class="badge bg-secondary">19</span>
                      </a>
                      <a href="#processing-times" class="category-item">
                        <span>Processing Times</span>
                        <span class="badge bg-secondary">15</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="policy-updates" class="py-5 bg-light">
          <div class="container">
            <div class="text-center mb-5">
              <h2 class="section-title">Immigration News & Policy Updates</h2>
              <p class="lead">
                Stay current with the latest changes in immigration laws and
                policies
              </p>
            </div>

            <div class="row g-4">
              <div class="col-md-6 col-lg-4">
                <div class="blog-card">
                  <div class="blog-image">
                    <div class="placeholder-image bg-light d-flex align-items-center justify-content-center">
                      <i class="fas fa-gavel fa-2x text-muted"></i>
                    </div>
                    <div class="blog-category">Policy Update</div>
                  </div>
                  <div class="blog-content">
                    <h5 class="blog-title">
                      <a href="#">
                        New LMIA Regulations: What Employers Need to Know
                      </a>
                    </h5>
                    <p class="blog-excerpt">
                      Recent changes to Labour Market Impact Assessment
                      requirements affect how employers can hire foreign
                      workers...
                    </p>
                    <div class="blog-meta">
                      <span class="author">Sarah Johnson</span>
                      <span class="date">Jan 12, 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="blog-card">
                  <div class="blog-image">
                    <div class="placeholder-image bg-light d-flex align-items-center justify-content-center">
                      <i class="fas fa-chart-line fa-2x text-muted"></i>
                    </div>
                    <div class="blog-category">Processing Times</div>
                  </div>
                  <div class="blog-content">
                    <h5 class="blog-title">
                      <a href="#">
                        2025 Processing Time Updates for All Immigration
                        Programs
                      </a>
                    </h5>
                    <p class="blog-excerpt">
                      Comprehensive overview of current processing times and
                      projected changes for the coming year...
                    </p>
                    <div class="blog-meta">
                      <span class="author">David Chen</span>
                      <span class="date">Jan 10, 2025</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="blog-card">
                  <div class="blog-image">
                    <div class="placeholder-image bg-light d-flex align-items-center justify-content-center">
                      <i class="fas fa-rocket fa-2x text-muted"></i>
                    </div>
                    <div class="blog-category">New Programs</div>
                  </div>
                  <div class="blog-content">
                    <h5 class="blog-title">
                      <a href="#">
                        Municipal Nominee Program: A New Pathway to PR
                      </a>
                    </h5>
                    <p class="blog-excerpt">
                      Exploring the new Municipal Nominee Program and how it
                      differs from existing immigration pathways...
                    </p>
                    <div class="blog-meta">
                      <span class="author">Maria Rodriguez</span>
                      <span class="date">Jan 8, 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="application-tips" class="py-5">
          <div class="container">
            <div class="text-center mb-5">
              <h2 class="section-title">Application Guides & Tips</h2>
              <p class="lead">
                Expert advice to maximize your chances of success
              </p>
            </div>

            <div class="row g-4">
              <div class="col-md-6 col-lg-4">
                <div class="guide-card">
                  <div class="guide-icon">
                    <i class="fas fa-list-check"></i>
                  </div>
                  <h5>Complete Document Checklist for Express Entry</h5>
                  <p>
                    Comprehensive list of all required documents with tips on
                    how to prepare them properly.
                  </p>
                  <div class="guide-meta">
                    <span class="difficulty easy">Beginner</span>
                    <span class="reading-time">10 min read</span>
                  </div>
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    Read Guide
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="guide-card">
                  <div class="guide-icon">
                    <i class="fas fa-comments"></i>
                  </div>
                  <h5>Mastering Your Immigration Interview</h5>
                  <p>
                    Proven strategies and common questions to help you prepare
                    for your immigration interview.
                  </p>
                  <div class="guide-meta">
                    <span class="difficulty medium">Intermediate</span>
                    <span class="reading-time">15 min read</span>
                  </div>
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    Read Guide
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="guide-card">
                  <div class="guide-icon">
                    <i class="fas fa-calculator"></i>
                  </div>
                  <h5>How to Calculate Your CRS Score</h5>
                  <p>
                    Step-by-step guide to understanding and calculating your
                    Comprehensive Ranking System score.
                  </p>
                  <div class="guide-meta">
                    <span class="difficulty easy">Beginner</span>
                    <span class="reading-time">8 min read</span>
                  </div>
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    Read Guide
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="guide-card">
                  <div class="guide-icon">
                    <i class="fas fa-language"></i>
                  </div>
                  <h5>Language Test Preparation Strategies</h5>
                  <p>
                    Tips for achieving high scores on IELTS, CELPIP, and other
                    approved language tests.
                  </p>
                  <div class="guide-meta">
                    <span class="difficulty medium">Intermediate</span>
                    <span class="reading-time">12 min read</span>
                  </div>
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    Read Guide
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="guide-card">
                  <div class="guide-icon">
                    <i class="fas fa-university"></i>
                  </div>
                  <h5>Choosing the Right Educational Institution</h5>
                  <p>
                    Factors to consider when selecting a college or university
                    for your studies abroad.
                  </p>
                  <div class="guide-meta">
                    <span class="difficulty easy">Beginner</span>
                    <span class="reading-time">7 min read</span>
                  </div>
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    Read Guide
                  </a>
                </div>
              </div>

              <div class="col-md-6 col-lg-4">
                <div class="guide-card">
                  <div class="guide-icon">
                    <i class="fas fa-money-bill-wave"></i>
                  </div>
                  <h5>Financial Requirements: Proof of Funds Guide</h5>
                  <p>
                    Understanding how much money you need and how to properly
                    document your financial resources.
                  </p>
                  <div class="guide-meta">
                    <span class="difficulty medium">Intermediate</span>
                    <span class="reading-time">9 min read</span>
                  </div>
                  <a href="#" class="btn btn-outline-primary btn-sm">
                    Read Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" class="py-5 bg-light">
          <div class="container">
            <div class="text-center mb-5">
              <h2 class="section-title">Success Stories & Case Studies</h2>
              <p class="lead">
                Real client journeys and how challenges were overcome
              </p>
            </div>

            <div class="row g-4">
              <div class="col-lg-6">
                <div class="case-study-card">
                  <div class="case-study-header">
                    <div class="case-study-type">
                      <span class="badge bg-success">
                        Express Entry Success
                      </span>
                    </div>
                    <h4>From 420 to 480 CRS: How Priya Boosted Her Score</h4>
                  </div>
                  <div class="case-study-content">
                    <div class="client-profile">
                      <div class="profile-details">
                        <h6>Client Profile</h6>
                        <ul class="profile-list">
                          <li>
                            <strong>Profession:</strong> Software Engineer
                          </li>
                          <li>
                            <strong>Country:</strong> India
                          </li>
                          <li>
                            <strong>Initial CRS:</strong> 420
                          </li>
                          <li>
                            <strong>Final CRS:</strong> 480
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="challenge">
                      <h6>Challenge</h6>
                      <p>
                        Priya's initial CRS score of 420 was below the typical
                        draw cutoff. She needed to improve her score to receive
                        an Invitation to Apply.
                      </p>
                    </div>
                    <div class="solution">
                      <h6>Our Solution</h6>
                      <ul>
                        <li>
                          Recommended French language training (20 points)
                        </li>
                        <li>
                          Guided through additional certification (5 points)
                        </li>
                        <li>
                          Optimized work experience documentation (15 points)
                        </li>
                        <li>
                          Provincial nomination pathway guidance (600 points)
                        </li>
                      </ul>
                    </div>
                    <div class="result">
                      <h6>Result</h6>
                      <p class="text-success">
                        <strong>
                          ITA received in 6 months. Now a Canadian permanent
                          resident working in Toronto.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="case-study-card">
                  <div class="case-study-header">
                    <div class="case-study-type">
                      <span class="badge bg-info">Family Sponsorship</span>
                    </div>
                    <h4>Reuniting the Weber Family After 5 Years</h4>
                  </div>
                  <div class="case-study-content">
                    <div class="client-profile">
                      <div class="profile-details">
                        <h6>Client Profile</h6>
                        <ul class="profile-list">
                          <li>
                            <strong>Sponsors:</strong> Anna & Michael Weber
                          </li>
                          <li>
                            <strong>Sponsored:</strong> Michael's parents
                          </li>
                          <li>
                            <strong>Separation:</strong> 5 years
                          </li>
                          <li>
                            <strong>Previous attempts:</strong> 2 refusals
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="challenge">
                      <h6>Challenge</h6>
                      <p>
                        Two previous sponsorship applications were refused due
                        to insufficient financial documentation and incomplete
                        relationship proof.
                      </p>
                    </div>
                    <div class="solution">
                      <h6>Our Solution</h6>
                      <ul>
                        <li>
                          Comprehensive financial planning and documentation
                        </li>
                        <li>Detailed relationship evidence compilation</li>
                        <li>Medical exam coordination and follow-up</li>
                        <li>Appeal process for previous refusal</li>
                      </ul>
                    </div>
                    <div class="result">
                      <h6>Result</h6>
                      <p class="text-success">
                        <strong>
                          Successful sponsorship approval. Parents reunited with
                          family in Vancouver.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-5 bg-primary text-white">
          <div class="container text-center">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <h2 class="mb-4">Need Personalized Immigration Advice?</h2>
                <p class="lead mb-4">
                  Our blog provides general guidance, but every case is unique.
                  Get expert consultation tailored to your specific situation.
                </p>
                <a href="contact.html" class="btn btn-light btn-lg">
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
