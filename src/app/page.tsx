import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, BarChart, Laptop } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Master Behavioral Interviews with AI
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                Personalized feedback, progress tracking, and AI-powered
                practice sessions to help you ace your next interview.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
            Key Features
          </h2>
          <div className="grid gap-8 items-start md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "AI-Powered Feedback",
                description:
                  "Receive instant, personalized feedback on your interview responses.",
              },
              {
                icon: BarChart,
                title: "Progress Tracking",
                description:
                  "Monitor your improvement over time with detailed analytics.",
              },
              {
                icon: Laptop,
                title: "Realistic Simulations",
                description:
                  "Practice in a realistic interview environment with our AI interviewer.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
            How It Works
          </h2>
          <div className="grid gap-8 items-center md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: 1,
                title: "Sign Up",
                description:
                  "Create your account and set your interview goals.",
              },
              {
                step: 2,
                title: "Practice",
                description: "Engage in AI-powered interview simulations.",
              },
              {
                step: 3,
                title: "Improve",
                description:
                  "Review feedback, track progress, and refine your skills.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-400 text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testimonials section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah K.",
                quote:
                  "IntervuPrep helped me land my dream job! The AI feedback was spot-on.",
              },
              {
                name: "Michael T.",
                quote:
                  "The progress tracking feature kept me motivated throughout my job search.",
              },
              {
                name: "Emily R.",
                quote:
                  "I felt so much more confident in my real interview after practicing with IntervuPrep.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <img
                  alt={`${testimonial.name} avatar`}
                  className="rounded-full"
                  height="80"
                  src={`https://source.unsplash.com/random/80x80?face&${index}`}
                  style={{
                    aspectRatio: "1",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Ace Your Next Interview?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Join thousands of job seekers who have improved their interview
                skills with IntervuPrep.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  className="flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Sign Up
                </Button>
              </form>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Start your free trial today. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
