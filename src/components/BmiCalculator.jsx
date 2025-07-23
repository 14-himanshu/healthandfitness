import React, { useState } from "react";
import { Calculator, Scale, User } from "lucide-react";


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

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors duration-200";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-blue-500",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Input = (props) => (
  <input
    {...props}
    className={`w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:text-white ${props.className}`}
  />
);

const Label = ({ children, htmlFor, className = "" }) => (
  <label
    htmlFor={htmlFor}
    className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className}`}
  >
    {children}
  </label>
);
function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters

    if (weightNum > 0 && heightNum > 0) {
      const bmiValue = weightNum / (heightNum * heightNum);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    } else {
      setBmi(null);
      setCategory("");
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "text-gray-500 dark:text-gray-400";
    if (bmi < 18.5) return "text-yellow-500";
    if (bmi >= 18.5 && bmi < 25) return "text-green-500";
    if (bmi >= 25 && bmi < 30) return "text-orange-500";
    return "text-red-500";
  };

  const reset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md mx-auto">
        <Card className="border-gray-200 dark:border-gray-700">
          <CardHeader className="text-center bg-gray-50 dark:bg-gray-900 rounded-t-lg">
            <div className="mx-auto p-3 bg-blue-600 rounded-full w-fit mb-4">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
              BMI Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weight" className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Weight (kg)</span>
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="e.g., 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="focus:border-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="height" className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>Height (cm)</span>
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="e.g., 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="focus:border-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <Button onClick={calculateBMI} className="flex-1">
                Calculate BMI
              </Button>
              <Button variant="outline" onClick={reset}>
                Reset
              </Button>
            </div>

            {bmi && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your BMI is
                  </p>
                  <p className={`text-4xl font-bold ${getBMIColor()}`}>{bmi}</p>
                  <p className={`text-lg font-semibold ${getBMIColor()}`}>
                    {category}
                  </p>
                </div>

                <div className="mt-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-2">
                    <span className="font-medium text-yellow-500">
                      Underweight:
                    </span>
                    <span>Below 18.5</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-2">
                    <span className="font-medium text-green-500">Normal:</span>
                    <span>18.5 – 24.9</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-2">
                    <span className="font-medium text-orange-500">
                      Overweight:
                    </span>
                    <span>25.0 – 29.9</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-2">
                    <span className="font-medium text-red-500">Obese:</span>
                    <span>30.0 and above</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
