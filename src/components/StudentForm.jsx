import React from "react";

export default function StudentForm() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <form
        className="bg-white shadow rounded p-5"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Student Form</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter student name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter student email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter student phone number"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
