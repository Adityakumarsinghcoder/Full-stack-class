import React from "react";
import { Link, Outlet } from "react-router";
import students from "../data/students";

function Dashboard() {
  function handlelogout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/"
  }
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .dashboard {
          min-height: 100vh;
          padding: 40px;
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          background:
            radial-gradient(
              circle at top left,
              rgba(59, 130, 246, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at bottom right,
              rgba(99, 102, 241, 0.1),
              transparent 30%
            ),
            #f8fafc;
          color: #0f172a;
        }

        .dashboard-wrapper {
          max-width: 1250px;
          margin: auto;
        }

        /* =========================
           HEADER
        ========================= */

        .dashboard-header {
          margin-bottom: 32px;
          padding: 28px 30px;
          background: linear-gradient(
            135deg,
            #1e3a8a,
            #2563eb 60%,
            #4f46e5
          );
          border-radius: 20px;
          color: white;
          box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2);
          position: relative;
          overflow: hidden;
        }

        .dashboard-header::after {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -70px;
          top: -100px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 34px;
          font-weight: 750;
          letter-spacing: -0.8px;
          position: relative;
          z-index: 1;
        }

        .dashboard-header p {
          margin: 9px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 15px;
          position: relative;
          z-index: 1;
        }

        /* =========================
           STATISTICS
        ========================= */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-bottom: 30px;
        }

        .stat-card {
          position: relative;
          background: rgba(255, 255, 255, 0.95);
          padding: 26px;
          border-radius: 18px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.06);
          overflow: hidden;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(
            180deg,
            #2563eb,
            #4f46e5
          );
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: #bfdbfe;
          box-shadow: 0 16px 35px rgba(37, 99, 235, 0.12);
        }

        .stat-card h3 {
          margin: 0 0 12px;
          color: #64748b;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-card .number {
          font-size: 36px;
          line-height: 1;
          font-weight: 750;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .stat-card .description {
          margin-top: 8px;
          font-size: 13px;
          color: #94a3b8;
        }

        /* =========================
           STUDENT MANAGEMENT
        ========================= */

        .dashboard-actions {
          position: relative;
          background: linear-gradient(
            135deg,
            #ffffff,
            #f8fafc
          );
          padding: 30px 32px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.07);

          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;

          overflow: hidden;
        }

        .dashboard-actions::before {
          content: "";
          position: absolute;
          width: 170px;
          height: 170px;
          right: -60px;
          bottom: -80px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.07);
        }

        .dashboard-actions h2 {
          margin: 0;
          color: #0f172a;
          font-size: 23px;
          font-weight: 700;
          min-width: 220px;
        }

        .dashboard-actions p {
          color: #64748b;
          margin: 0;
          line-height: 1.6;
          flex: 1;
          font-size: 14px;
          min-width: 250px;
        }

        /* =========================
           VIEW STUDENTS BUTTON
        ========================= */

        .students-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 190px;
          padding: 13px 22px;

          text-decoration: none;
          color: white;

          background: linear-gradient(
            135deg,
            #2563eb,
            #4f46e5
          );

          border-radius: 10px;

          font-size: 14px;
          font-weight: 700;

          box-shadow:
            0 8px 18px rgba(37, 99, 235, 0.22);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;

          position: relative;
          z-index: 1;
        }

        .students-button:hover {
          background: linear-gradient(
            135deg,
            #1d4ed8,
            #4338ca
          );

          transform: translateY(-3px);

          box-shadow:
            0 12px 25px rgba(37, 99, 235, 0.3);
        }

        .students-button:active {
          transform: translateY(0);
        }

        /* =========================
           OUTLET AREA
        ========================= */

        .dashboard-wrapper > div:last-child {
          position: relative;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .dashboard {
            padding: 30px 20px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-actions {
            align-items: flex-start;
          }

          .dashboard-actions h2 {
            width: 100%;
          }

          .dashboard-actions p {
            width: 100%;
          }

          .students-button {
            width: 100%;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .dashboard {
            padding: 20px 14px;
          }

          .dashboard-header {
            padding: 24px 20px;
            border-radius: 16px;
            margin-bottom: 22px;
          }

          .dashboard-header h1 {
            font-size: 27px;
          }

          .dashboard-header p {
            font-size: 14px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
            margin-bottom: 22px;
          }

          .stat-card {
            padding: 22px;
            border-radius: 15px;
          }

          .stat-card .number {
            font-size: 32px;
          }

          .dashboard-actions {
            padding: 24px 20px;
            border-radius: 16px;
            gap: 15px;
          }

          .dashboard-actions h2 {
            font-size: 20px;
          }

          .dashboard-actions p {
            font-size: 14px;
            min-width: 100%;
          }

          .students-button {
            min-width: 100%;
            width: 100%;
          }
        }


        @media (max-width: 380px) {
          .dashboard-header h1 {
            font-size: 24px;
          }

          .stat-card .number {
            font-size: 29px;
          }

          .dashboard-actions h2 {
            font-size: 18px;
          }
        }
      `}</style>

      <div className="dashboard">
        <div className="dashboard-wrapper">

          <div className="dashboard-header">
            <h1>Dashboard
              <button onClick={handlelogout} style={{ marginLeft: "20px", padding: "6px 12px", fontSize: "14px", backgroundColor: "#f87171", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>Logout</button>
            </h1>

            <p>
              Welcome back! Here's an overview of your students.
            </p>
          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <h3>Total Students</h3>

              <div className="number">
                {students.length}
              </div>

              <div className="description">
                Students currently registered
              </div>
            </div>

            <div className="stat-card">
              <h3>Active Students</h3>

              <div className="number">
                {
                  students.filter(
                    (student) =>
                      student.status?.toLowerCase() === "active"
                  ).length
                }
              </div>

              <div className="description">
                Currently active
              </div>
            </div>

            <div className="stat-card">
              <h3>Courses</h3>

              <div className="number">
                {
                  new Set(
                    students.map(
                      (student) => student.course
                    )
                  ).size
                }
              </div>

              <div className="description">
                Different courses
              </div>
            </div>

          </div>

          <div className="dashboard-actions">

            <h2>
              Student Management
            </h2>

            <p>
              View student details, courses, grades and
              other information.
            </p>

            <Link
              className="students-button"
              to="/dashboard/studentlist"
            >
              View All Students →
            </Link>

          </div>

          <Outlet />

        </div>
      </div>
    </>
  );
}

export default Dashboard;