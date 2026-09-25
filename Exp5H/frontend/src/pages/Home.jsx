import React from "react";

function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .home {
          min-height: 100vh;
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          background:
            radial-gradient(
              circle at top left,
              rgba(37, 99, 235, 0.15),
              transparent 30%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(79, 70, 229, 0.14),
              transparent 30%
            ),
            #f8fafc;
          color: #0f172a;
        }

        /* Navbar */
        .navbar {
          height: 72px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.9);
          border-bottom: 1px solid #e5e7eb;
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 21px;
          font-weight: 800;
          color: #1e3a8a;
        }

        .logo-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          font-size: 18px;
          box-shadow: 0 6px 15px rgba(37, 99, 235, 0.25);
        }

        .nav-text {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
        }

        /* Hero */
        .hero {
          max-width: 1200px;
          min-height: calc(100vh - 72px);
          margin: auto;
          padding: 80px 30px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 70px;
        }

        .hero-content {
          animation: fadeUp 0.7s ease;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 30px;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #dbeafe;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12);
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(42px, 6vw, 68px);
          line-height: 1.05;
          letter-spacing: -2px;
          font-weight: 800;
          color: #0f172a;
        }

        .hero h1 span {
          background: linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          max-width: 600px;
          margin: 24px 0 30px;
          color: #64748b;
          font-size: 17px;
          line-height: 1.7;
        }

        /* Buttons */
        .hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 24px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .primary-button {
          color: white;
          background: linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
          );
          box-shadow: 0 9px 20px rgba(37, 99, 235, 0.25);
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 25px rgba(37, 99, 235, 0.3);
        }

        .secondary-button {
          color: #2563eb;
          background: white;
          border: 1px solid #dbeafe;
        }

        .secondary-button:hover {
          background: #eff6ff;
          transform: translateY(-3px);
        }

        /* Profile Card */
        .hero-card-container {
          display: flex;
          justify-content: center;
          animation: fadeUp 0.9s ease;
        }

        .profile-card {
          width: 100%;
          max-width: 390px;
          padding: 32px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid #e2e8f0;
          box-shadow:
            0 25px 60px rgba(15, 23, 42, 0.12),
            0 8px 20px rgba(37, 99, 235, 0.06);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .profile-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.08);
          top: -90px;
          right: -70px;
        }

        .profile-avatar {
          width: 90px;
          height: 90px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
          );
          color: white;
          font-size: 32px;
          font-weight: 800;
          box-shadow:
            0 10px 25px rgba(37, 99, 235, 0.3);
          position: relative;
        }

        .profile-card h2 {
          margin: 0;
          font-size: 24px;
          color: #0f172a;
        }

        .profile-role {
          margin: 7px 0 20px;
          color: #64748b;
          font-size: 14px;
        }

        .profile-info {
          display: grid;
          gap: 10px;
          text-align: left;
        }

        .info-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #eef2f7;
        }

        .info-label {
          color: #94a3b8;
          font-size: 12px;
        }

        .info-value {
          color: #334155;
          font-size: 13px;
          font-weight: 600;
        }

        /* Features */
        .features {
          max-width: 1200px;
          margin: -20px auto 60px;
          padding: 0 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .feature-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.25s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.08);
          border-color: #bfdbfe;
        }

        .feature-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #eff6ff;
          color: #2563eb;
          font-size: 19px;
          margin-bottom: 15px;
        }

        .feature-card h3 {
          margin: 0 0 8px;
          font-size: 17px;
          color: #0f172a;
        }

        .feature-card p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.6;
        }

        /* Footer */
        .footer {
          padding: 25px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
          color: #94a3b8;
          font-size: 13px;
          background: white;
        }

        /* Animation */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
            padding-top: 60px;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .features {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .navbar {
            padding: 0 20px;
          }

          .nav-text {
            display: none;
          }

          .hero {
            padding: 45px 20px;
          }

          .hero h1 {
            font-size: 43px;
            letter-spacing: -1.5px;
          }

          .hero-description {
            font-size: 15px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .profile-card {
            padding: 26px 20px;
          }

          .features {
            padding: 0 20px;
            margin-top: 0;
          }
        }
      `}</style>

      <div className="home">

        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">P</div>
            Profile Viewer
          </div>

          <div className="nav-text">
            Student Profile Management
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">

          <div className="hero-content">

            <div className="badge">
              <span className="badge-dot"></span>
              Smart Profile Management
            </div>

            <h1>
              View.
              <br />
              Manage.
              <br />
              <span>Discover Profiles.</span>
            </h1>

            <p className="hero-description">
              Welcome to Profile Viewer, a simple and modern platform
              for viewing student profiles, academic information,
              courses and other important details in one place.
            </p>


          </div>

          {/* Profile Preview */}
          <div className="hero-card-container">

            <div className="profile-card">

              <div className="profile-avatar">
                PV
              </div>

              <h2>Profile Viewer</h2>

              <div className="profile-role">
                Student Information System
              </div>

              <div className="profile-info">

                <div className="info-item">
                  <span className="info-label">
                    Students
                  </span>

                  <span className="info-value">
                    View Profiles
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">
                    Courses
                  </span>

                  <span className="info-value">
                    Academic Data
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">
                    Information
                  </span>

                  <span className="info-value">
                    Centralized
                  </span>
                </div>

                <div className="info-item">
                  <span className="info-label">
                    Platform
                  </span>

                  <span className="info-value">
                    Profile Viewer
                  </span>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="features">

          <div className="feature-card">
            <div className="feature-icon">👤</div>

            <h3>Student Profiles</h3>

            <p>
              Easily view and manage detailed student
              profile information.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>

            <h3>Academic Details</h3>

            <p>
              Access courses, grades and other academic
              information quickly.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>

            <h3>Simple & Fast</h3>

            <p>
              A clean interface designed for quick
              navigation and easy profile management.
            </p>
          </div>

        </section>

        {/* Footer */}
        <footer className="footer">
          © 2026 Profile Viewer. All rights reserved.
        </footer>

      </div>
    </>
  );
}

export default Home;