import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Laptop,
  BarChart,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-4 hidden md:block">
        <nav className="space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md"
          >
            <BarChart className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/practice"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md"
          >
            <MessageSquare className="h-5 w-5" />
            <span>Practice</span>
          </Link>
          <Link
            href="/schedule"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md"
          >
            <Calendar className="h-5 w-5" />
            <span>Schedule</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">Welcome back, Sarah!</h1>

          {/* Progress Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
              <CardDescription>
                Track your interview preparation journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Overall Progress
                    </span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Behavioral Questions
                    </span>
                    <span className="text-sm font-medium">80%</span>
                  </div>
                  <Progress value={80} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      Technical Questions
                    </span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <Progress value={70} className="w-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your latest interview practice sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Leadership Experience</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Behavioral Interview
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2 days ago
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Problem Solving</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Technical Interview
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    4 days ago
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Team Collaboration</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Behavioral Interview
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    1 week ago
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>
                Your scheduled practice interviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      Mock Interview: Software Engineer
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Technical + Behavioral
                    </p>
                  </div>
                  <Button size="sm">Join</Button>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">
                      AI Practice: Situational Questions
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Behavioral
                    </p>
                  </div>
                  <Button size="sm">Start</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Mobile navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 md:hidden">
        <div className="flex justify-around">
          <Link
            href="/dashboard"
            className="flex flex-col items-center p-2 text-gray-700 dark:text-gray-200"
          >
            <BarChart className="h-5 w-5" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link
            href="/practice"
            className="flex flex-col items-center p-2 text-gray-700 dark:text-gray-200"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-xs">Practice</span>
          </Link>
          <Link
            href="/schedule"
            className="flex flex-col items-center p-2 text-gray-700 dark:text-gray-200"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs">Schedule</span>
          </Link>
          <Link
            href="/settings"
            className="flex flex-col items-center p-2 text-gray-700 dark:text-gray-200"
          >
            <Settings className="h-5 w-5" />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
