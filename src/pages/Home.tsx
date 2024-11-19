// import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Stethoscope, Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                AI-Powered Chest Disease Diagnostics
              </h1>
              <p className="mt-4 text-xl text-blue-100">
                Get instant AI analysis of chest X-rays and connect with healthcare professionals for expert consultation.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:text-lg"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 bg-opacity-30 hover:bg-opacity-40 md:text-lg"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                alt="Medical professionals"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose DiagnoLink?
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Upload className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">
                Easy Upload
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Securely upload chest X-rays for instant AI analysis
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">
                AI Analysis
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Advanced AI algorithms for accurate disease detection
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">
                Expert Consultation
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Connect with healthcare professionals for detailed diagnosis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}