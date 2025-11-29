import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!name.trim()) {
      temp.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      temp.name = "Only letters and spaces allowed";
    }

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      temp.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      temp.email = "Enter a valid email";
    }

    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password) {
      temp.password = "Password is required";
    } else if (!strongPasswordRegex.test(password)) {
      temp.password =
        "Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Submitted:", { name, email, password });
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 p-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-1">Create account</h2>
        <p className="text-sm text-slate-500 mb-6">Simple, accessible form with client-side validation.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors({ ...errors, name: "" });
                }}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow
                  ${errors.name ? "border-red-300 bg-red-50" : "border-slate-200"}`}
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow
                  ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200"}`}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </label>

            <label className="block">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="text-xs text-indigo-600 hover:underline focus:outline-none"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow
                  ${errors.password ? "border-red-300 bg-red-50" : "border-slate-200"}`}
                placeholder="At least 6 characters"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />

              {errors.password && (
                <p id="password-error" className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}
            </label>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white px-4 py-2 text-sm font-medium transition-transform shadow-sm"
            >
              Submit
            </button>

            <div className="text-center text-xs text-slate-400 mt-3">By continuing you agree to our terms of service.</div>
          </div>
        </form>
      </div>

      <style jsx>{`
        @media (max-width: 420px) {
          .max-w-md { max-width: 95%; }
        }
      `}</style>
    </div>
  );
}
