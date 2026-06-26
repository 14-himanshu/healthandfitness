import React from "react";
import { Link } from "react-router-dom";
import { Activity, Droplets, Flame, ActivitySquare, Plus, Utensils, Dumbbell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

function Dashboard() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-2 text-lg">Welcome back! Here is your daily health summary.</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-full border border-border hidden sm:block">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Calories Burned</CardTitle>
                <div className="p-2 bg-orange-500/10 rounded-md">
                  <Flame className="h-4 w-4 text-orange-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,240 <span className="text-sm font-normal text-muted-foreground">/ 2,000 kcal</span></div>
                <Progress value={62} className="h-2 mt-4 bg-secondary [&>div]:bg-orange-500" />
              </CardContent>
            </Card>

            <Card className="shadow-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Minutes</CardTitle>
                <div className="p-2 bg-blue-500/10 rounded-md">
                  <ActivitySquare className="h-4 w-4 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">45 <span className="text-sm font-normal text-muted-foreground">/ 60 min</span></div>
                <Progress value={75} className="h-2 mt-4 bg-secondary [&>div]:bg-blue-500" />
              </CardContent>
            </Card>

            <Card className="shadow-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Water Intake</CardTitle>
                <div className="p-2 bg-cyan-500/10 rounded-md">
                  <Droplets className="h-4 w-4 text-cyan-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1.5 <span className="text-sm font-normal text-muted-foreground">/ 3 L</span></div>
                <Progress value={50} className="h-2 mt-4 bg-secondary [&>div]:bg-cyan-500" />
              </CardContent>
            </Card>

            <Card className="shadow-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Daily Steps</CardTitle>
                <div className="p-2 bg-green-500/10 rounded-md">
                  <Activity className="h-4 w-4 text-green-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8,234 <span className="text-sm font-normal text-muted-foreground">/ 10k</span></div>
                <Progress value={82} className="h-2 mt-4 bg-secondary [&>div]:bg-green-500" />
              </CardContent>
            </Card>
          </div>

          {/* Scaffolding for Workout and Diet Logs */}
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Workout Tracker Scaffolding */}
            <Card className="col-span-1 md:col-span-2 shadow-sm border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Today's Workouts</CardTitle>
                  <CardDescription>Log and track your daily exercises.</CardDescription>
                </div>
                <Button size="sm" className="h-9 gap-1 font-semibold">
                  <Plus className="h-4 w-4" /> Add Workout
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample Log Item */}
                  <div className="flex items-center justify-between p-4 border rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Dumbbell className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Upper Body Strength</p>
                        <p className="text-sm text-muted-foreground">45 minutes • Bench, Rows</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">210 kcal</p>
                      <p className="text-xs text-muted-foreground">Burned</p>
                    </div>
                  </div>

                  {/* Sample Log Item */}
                  <div className="flex items-center justify-between p-4 border rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-orange-500/10 rounded-full">
                        <ActivitySquare className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Morning Run</p>
                        <p className="text-sm text-muted-foreground">30 minutes • 5km Pace</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">320 kcal</p>
                      <p className="text-xs text-muted-foreground">Burned</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diet & Quick Actions */}
            <div className="flex flex-col gap-6">
              
              <Card className="shadow-sm border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Diet Log</CardTitle>
                  <CardDescription>Calories consumed today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span className="font-medium">1,850 kcal</span>
                    </div>
                    <Button variant="outline" size="sm" className="h-8"><Plus className="h-4 w-4 mr-1"/> Log Meal</Button>
                  </div>
                  <Progress value={75} className="h-2 mb-2" />
                  <p className="text-xs text-muted-foreground text-right">Target: 2,500 kcal</p>
                </CardContent>
              </Card>

              <Card className="shadow-sm border-border flex-1">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <Button variant="secondary" className="w-full justify-start h-12 font-medium" asChild>
                    <Link to="/"><Flame className="mr-2 h-4 w-4 text-orange-500"/> Calculate BMI</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12 font-medium">
                    <Droplets className="mr-2 h-4 w-4 text-cyan-500"/> Add Water
                  </Button>
                  <Button variant="outline" className="w-full justify-start h-12 font-medium">
                    <Activity className="mr-2 h-4 w-4 text-green-500"/> Check Trends
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
