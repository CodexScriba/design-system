"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  UserIcon,
  ShieldIcon,
  BellIcon,
  CreditCardIcon,
  KeyIcon,
  GlobeIcon,
  MailIcon,
  SmartphoneIcon,
  MonitorIcon,
  InfoIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  TrashIcon,
  CalendarIcon,
} from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account preferences and configuration.
        </p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList variant="line">
          <TabsTrigger value="profile">
            <UserIcon className="size-3.5" /> Profile
          </TabsTrigger>
          <TabsTrigger value="security">
            <ShieldIcon className="size-3.5" /> Security
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <BellIcon className="size-3.5" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCardIcon className="size-3.5" /> Billing
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details and public profile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-4">
                  <Avatar className="size-16">
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Profile Photo</p>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG or GIF. Max 2MB.
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Upload
                      </Button>
                      <Button size="sm" variant="ghost">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Form Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="Jane" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="jane@acme.io"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select defaultValue="admin">
                      <SelectTrigger id="role" className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          {/* Connected Accounts (cards inside container) */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Connected Accounts</h2>
            <p className="text-sm text-muted-foreground">
              Services linked to your profile.
            </p>
          </div>
          <div className="rounded-xl bg-muted/50 p-4 ring-1 ring-foreground/5">
            <div className="space-y-3">
              {[
                {
                  name: "Google",
                  email: "jane@gmail.com",
                  icon: GlobeIcon,
                  iconBg: "bg-primary/10 text-primary",
                  connected: true,
                },
                {
                  name: "GitHub",
                  email: "janedoe",
                  icon: MonitorIcon,
                  iconBg: "bg-secondary text-secondary-foreground",
                  connected: true,
                },
                {
                  name: "Slack",
                  email: "Not connected",
                  icon: MailIcon,
                  iconBg: "bg-muted text-muted-foreground",
                  connected: false,
                },
              ].map((account) => (
                <div
                  key={account.name}
                  className="flex items-center justify-between rounded-lg bg-card p-3 ring-1 ring-foreground/5"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-9 items-center justify-center rounded-lg ${account.iconBg}`}
                    >
                      <account.icon className="size-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{account.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {account.email}
                      </p>
                    </div>
                  </div>
                  {account.connected ? (
                    <Badge variant="secondary">Connected</Badge>
                  ) : (
                    <Button size="sm" variant="outline">
                      Connect
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-6 pt-4">
          <Alert>
            <CheckCircleIcon />
            <AlertTitle>Your account is secure</AlertTitle>
            <AlertDescription>
              Two-factor authentication is enabled. Last login: 2 hours ago.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password to keep your account secure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update Password</Button>
            </CardFooter>
          </Card>

          {/* Sessions (cards in container) */}
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
              <CardDescription>
                Devices currently signed in to your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    device: "MacBook Pro",
                    location: "San Francisco, CA",
                    icon: MonitorIcon,
                    iconBg: "bg-primary/10 text-primary",
                    current: true,
                  },
                  {
                    device: "iPhone 15",
                    location: "San Francisco, CA",
                    icon: SmartphoneIcon,
                    iconBg: "bg-secondary text-secondary-foreground",
                    current: false,
                  },
                  {
                    device: "Windows Desktop",
                    location: "New York, NY",
                    icon: MonitorIcon,
                    iconBg: "bg-muted text-muted-foreground",
                    current: false,
                  },
                ].map((session, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-9 items-center justify-center rounded-full ${session.iconBg}`}
                      >
                        <session.icon className="size-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium">
                            {session.device}
                          </p>
                          {session.current && (
                            <Badge variant="outline" className="text-[10px]">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {session.location}
                        </p>
                      </div>
                    </div>
                    {!session.current && (
                      <Button size="sm" variant="ghost">
                        Revoke
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="space-y-6 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how and when you want to be notified.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    title: "Email Notifications",
                    description: "Receive updates via email",
                    icon: MailIcon,
                    iconBg: "bg-primary/10 text-primary",
                    defaultChecked: true,
                  },
                  {
                    title: "Push Notifications",
                    description: "Browser push notifications",
                    icon: BellIcon,
                    iconBg: "bg-secondary text-secondary-foreground",
                    defaultChecked: true,
                  },
                  {
                    title: "SMS Alerts",
                    description: "Critical alerts via text message",
                    icon: SmartphoneIcon,
                    iconBg: "bg-accent text-accent-foreground",
                    defaultChecked: false,
                  },
                  {
                    title: "Weekly Digest",
                    description: "Summary of activity each week",
                    icon: CalendarIcon,
                    iconBg: "bg-muted text-muted-foreground",
                    defaultChecked: true,
                  },
                  {
                    title: "Security Alerts",
                    description: "Login attempts and suspicious activity",
                    icon: ShieldIcon,
                    iconBg: "bg-destructive/10 text-destructive",
                    defaultChecked: true,
                  },
                ].map((pref, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex size-9 items-center justify-center rounded-lg ${pref.iconBg}`}
                        >
                          <pref.icon className="size-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{pref.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {pref.description}
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked={pref.defaultChecked} />
                    </div>
                    {i < 4 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing" className="space-y-6 pt-4">
          <Alert>
            <AlertTriangleIcon />
            <AlertTitle>Payment method expiring soon</AlertTitle>
            <AlertDescription>
              Your Visa ending in 4242 expires next month. Please update your
              payment method.
            </AlertDescription>
          </Alert>

          {/* Plan Cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$0",
                features: ["5 projects", "1 GB storage", "Community support"],
                current: false,
              },
              {
                name: "Pro",
                price: "$29",
                features: [
                  "Unlimited projects",
                  "100 GB storage",
                  "Priority support",
                ],
                current: true,
              },
              {
                name: "Enterprise",
                price: "$99",
                features: ["Custom limits", "1 TB storage", "Dedicated CSM"],
                current: false,
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.current ? "ring-2 ring-primary" : ""
                }
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.current && <Badge>Current</Badge>}
                  </div>
                  <CardDescription>
                    <span className="text-2xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground"> /month</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircleIcon className="size-3.5 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={plan.current ? "outline" : "default"}
                    className="w-full"
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Danger Zone */}
          <Card className="border-destructive/30">
            <CardHeader>
              <CardTitle className="text-destructive">Danger Zone</CardTitle>
              <CardDescription>
                Irreversible actions that affect your account.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                <div>
                  <p className="text-sm font-medium">Delete Account</p>
                  <p className="text-xs text-muted-foreground">
                    Permanently remove your account and all data.
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  <TrashIcon /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
