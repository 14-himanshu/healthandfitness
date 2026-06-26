import React from "react";
import { Link } from "react-router-dom";
import { Info, Target, Heart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-6">
            <Info className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About BMI Health</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Your personal companion for understanding your body, tracking your daily habits, and achieving your ultimate fitness goals.
          </p>
        </div>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We believe that health tracking should be simple, intuitive, and accessible to everyone. Our mission is to provide you with a beautifully designed, accurate tool to understand your Body Mass Index (BMI) and track your daily wellness metrics without overwhelming you with complex data.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">What is BMI?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify underweight, overweight, and obesity in adults. While it's not a perfect measure of overall health, it provides a very useful starting point for understanding your general fitness level.
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-muted/30 border border-border rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Why track with us?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <p className="text-foreground font-medium">Instant, accurate BMI calculations</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <p className="text-foreground font-medium">Secure, private account system</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <p className="text-foreground font-medium">Daily calorie and macro tracking</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
              <p className="text-foreground font-medium">Beautiful light and dark mode themes</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg h-14 px-8 font-semibold" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg h-14 px-8 font-semibold" asChild>
              <Link to="/">Calculate BMI Now</Link>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
