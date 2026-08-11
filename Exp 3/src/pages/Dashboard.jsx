import React from "react";
import { Link,Outlet } from "react-router";
import students from "../data/students";

function Dashboard() {
  return (
    <>
      <style>{`
        .dashboard {
          min-height: 100vh;
          background: #f4f6f8;
          padding: 40px 30px;
          font-family: Arial, sans-serif;
        }

        .dashboard-wrapper {
          max-width: 1200px;
          margin: auto;
        }

        .dashboard-header {
          margin-bottom: 30px;
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 32px;
          color: #111827;
        }

        .dashboard-header p {
          margin-top: 8px;
          color: #6b7280;
          font-size: 15px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 16px;
          border: 1px solid #eef0f3;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
        }

        .stat-card h3 {
          margin: 0 0 10px;
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
        }

        .stat-card .number {
          font-size: 32px;
          font-weight: bold;
          color: #111827;
        }

        .stat-card .description {
          margin-top: 8px;
          font-size: 13px;
          color: #9ca3af;
        }

        .dashboard-actions {
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          padding: 32px;
          border-radius: 20px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .dashboard-actions h2 {
          margin: 0 0 8px;
          color: #0f172a;
          font-size: 24px;
        }

        .dashboard-actions p {
          color: #475569;
          margin: 0;
          max-width: 640px;
          line-height: 1.6;
        }

        .students-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          background: #2563eb;
          color: white;
          padding: 14px 24px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          transition: background 0.2s ease, transform 0.2s ease;
          min-width: 180px;
        }

        .students-button:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .dashboard {
            padding: 25px 15px;
          }

          .dashboard-header h1 {
            font-size: 26px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-actions {
            padding: 22px;
          }
        }
      `}</style>

      <div className="dashboard">
        <div className="dashboard-wrapper">

          <div className="dashboard-header">
            <h1>Dashboard</h1>
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
                {new Set(students.map((student) => student.course)).size}
              </div>

              <div className="description">
                Different courses
              </div>
            </div>

          </div>

          <div className="dashboard-actions">

            <h2>Student Management</h2>

            <p>
              View student details, courses, grades and other information.
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