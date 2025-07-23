import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { Activity, LineChart, Target } from "lucide-react";
import BmiCalculator from "../components/BmiCalculator";
import { Card } from "../components/Card";
function Home() {
  const cardData = [
    {
      icon: <LineChart className="h-6 w-6 text-primary-foreground" />,
      title: "Instant Results",
      description:
        "Get your BMI calculated instantly with our fast and accurate calculator.",
      color:"#fff"
    },
    {
      icon: <Activity className="h-6 w-6 text-secondary-foreground" />,
      title: "Health Categories",
      description:
        "Understand your results with clear health category classifications.",
      color:"#bac"
    },
    {
      icon: <Target className="h-6 w-6 text-accent-foreground" />,
      title: "Track Progress",
      description:
        "Monitor your health journey and make informed decisions about your wellness.",
      color:"#4ac"
    }
  ]

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-b from-[#F5F9FC] text-black to-[#FFFFFF]">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="bg-[#F6F9FC] py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Calculate Your{" "}
            <span className="text-primary text-[#60A6FA]">BMI</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-[#A0ABBA]">
            Take control of your health journey with our easy-to-use BMI
            calculator. Get instant results and understand what they mean for
            your wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 text-white bg-[#60A6FA]">
              Calculate Now
            </button>
            <Link to="/about">
              <button className="px-8 text-white ">Learn About BMI</button>
            </Link>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <BmiCalculator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-health-bg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Use Our BMI Calculator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                color={card.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready to Start Your Health Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our BMI calculator for their
            health tracking needs.
          </p>
          <Link to="/signup">
            <button className="px-8">Get Started Today</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
