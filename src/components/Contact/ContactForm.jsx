// components/ContactForm.js
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: { name: "", email: "", mobile: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
        .required("Mobile number is required"),
      message: Yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
    }),
    onSubmit: (values) => {
      alert("Thank you for reaching out! We will get back to you soon.");
      setStep(1); // Reset to step 1 after submission
    },
  });

  return (
    <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900 font-poppins">
        {step === 1 ? "Enter Your Details" : "Your Message"}
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Step 1: User Information */}
        {step === 1 && (
          <>
            <div>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your Name"
                className={`w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  formik.touched.name && formik.errors.name ? "border-red-500" : ""
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your Email"
                className={`w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  formik.touched.email && formik.errors.email ? "border-red-500" : ""
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your Mobile Number"
                className={`w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  formik.touched.mobile && formik.errors.mobile ? "border-red-500" : ""
                }`}
              />
              {formik.touched.mobile && formik.errors.mobile && (
                <p className="text-red-500 text-sm">{formik.errors.mobile}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full sm:w-auto bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Next Step
              </button>
            </div>
          </>
        )}

        {/* Step 2: Message */}
        {step === 2 && (
          <>
            <div>
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows="5"
                placeholder="Your Message"
                className={`w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  formik.touched.message && formik.errors.message ? "border-red-500" : ""
                }`}
              ></textarea>
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 text-white p-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                <Send className="w-6 h-6" /> Send Message
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-auto bg-gray-300 text-black p-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition duration-300 mt-4 sm:mt-0"
              >
                Back
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
