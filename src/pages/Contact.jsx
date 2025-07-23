import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white px-4 py-2 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden ${className}`}
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

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}) => {
  const baseClasses =
    "w-full px-4 py-2.5 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors duration-200";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  };
  return (
    <button
      type={type}
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

const Textarea = (props) => (
  <textarea
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
            className="text-blue-600 dark:text-blue-400 font-semibold"
          >
            Contactg
          </a>
        </div>
      </div>
    </div>
  </nav>
);

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F9FC] to-[#FFFFFF] font-sans">
      <Navigation />

      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">Contact</span>{" "}
            <span className="text-black">Us</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions about BMI or need support? We're here to help you on
            your health journey.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-gray-50 dark:bg-gray-900">
                <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                  <span className="text-[#60a6fa]">Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader className="bg-gray-50 dark:bg-gray-900">
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                    <span className="text-[#60a6fa]">Get in Touch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        Email Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        support@bmihealth.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        Call Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        Visit Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Health Street
                        <br />
                        Wellness City, WC 12345
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-gray-200 dark:border-gray-700">
                <CardHeader className="bg-gray-50 dark:bg-gray-900">
                  <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">
                    <span className="text-[#60a6fa]">Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="space-y-2 w-full text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          9:00 AM - 5:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          10:00 AM - 2:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          Closed
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg transition-opacity duration-300">
          <p className="font-bold">Message Sent!</p>
          <p className="text-sm">
            Thank you for contacting us. We'll get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
