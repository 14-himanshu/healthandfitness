import React from "react";
import { Info, BookOpen, AlertCircle, CheckCircle } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h2
    className={`text-xl font-bold text-gray-800 dark:text-white ${className}`}
  >
    {children}
  </h2>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Navigation = () => (
  <nav className="bg-white dark:bg-gray-900 shadow-md">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Health Co.
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            BMI Calculator
          </a>
          <a
            href="#"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navigation />

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-black"> About</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">BMI</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn everything you need to know about Body Mass Index and how it
            can help you understand your health better.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader className="bg-[#d3e4f5]">
              <CardTitle className="flex items-center space-x-3 text-2xl text-blue-600 dark:text-blue-400">
                <div className="p-2 bg-blue-600 dark:bg-blue-400 rounded-lg">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <span className="text-black">What is BMI?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {" "}
                <span className="text-[#64748b]">
                  Body Mass Index (BMI) is a widely used screening tool that
                  measures body fat based on height and weight. It provides a
                  simple numeric measure of a person's thickness or thinness,
                  allowing health professionals to discuss weight problems more
                  objectively with their patients. BMI is calculated by dividing
                  weight in kilograms by height in meters squared (kg/m²).
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader className="bg-[#d3e4f5]">
              <CardTitle className="flex items-center space-x-3 text-2xl text-purple-600 dark:text-purple-400">
                <div className="p-2 bg-purple-600 dark:bg-purple-400 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-black">BMI Categories</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200 dark:border-yellow-800/50">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Underweight</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Below 18.5
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200 dark:border-green-800/50">
                    <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Normal weight
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        18.5 - 24.9
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg border border-orange-200 dark:border-orange-800/50">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800 ">Overweight</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        25.0 - 29.9
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200 dark:border-red-800/50">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-800">Obese</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        30.0 and above
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader className="bg-[#d3e4f5]">
              <CardTitle className="flex items-center space-x-3 text-2xl text-orange-600 dark:text-orange-400">
                <div className="p-2 bg-orange-600 dark:bg-orange-400 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-black">BMI Limitations</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <p className="text-gray-600 leading-relaxed mb-4">
                While BMI is a useful screening tool, it has several limitations
                that should be considered:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    BMI doesn't distinguish between muscle and fat mass.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    It doesn't account for age, ethnicity, or muscle mass
                    differences.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    Athletes with high muscle mass may have a high BMI but low
                    body fat.
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">
                    It may not accurately reflect health risks for all
                    populations.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-gray-700">
            <CardHeader className="bg-[#d3e4f5]">
              <CardTitle className="flex items-center space-x-3 text-2xl text-green-600 dark:text-green-400">
                <div className="p-2 bg-green-600 dark:bg-green-400 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <span className="text-black">When to Consult a Professional</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <p className="text-gray-600 leading-relaxed mb-4">
                BMI is just one tool for assessing health. Consider consulting
                with a healthcare professional if:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Your BMI falls outside the normal range.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>You have concerns about your weight or health.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>You want to develop a personalized health plan.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>You need guidance on nutrition and exercise.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
