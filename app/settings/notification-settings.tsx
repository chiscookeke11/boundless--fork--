"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/card"
import { Switch } from "./components/switch"
import { Label } from "./components/label"
import { Button } from "./components/button"
import { Separator } from "./components/separator"
import { LoaderIcon } from "./components/icons"


const toast = (props: { title: string; description: string }) => {
  console.log(`Toast: ${props.title} - ${props.description}`)
  alert(`${props.title}: ${props.description}`)
}

export function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false)

 
  const [emailNotifications, setEmailNotifications] = useState({
    projectUpdates: true,
    newComments: true,
    fundingAlerts: true,
    marketingEmails: false,
  })

  const [pushNotifications, setPushNotifications] = useState({
    projectUpdates: true,
    newComments: false,
    fundingAlerts: true,
    importantAnnouncements: true,
  })

  function handleSave() {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Notification preferences updated",
        description: "Your notification preferences have been updated successfully.",
      })
      console.log({ emailNotifications, pushNotifications })
    }, 1000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Control how and when you receive notifications from Boundless.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-project-updates">Project Updates</Label>
                <p className="text-sm text-gray-500">Receive emails about updates to projects you're backing</p>
              </div>
              <Switch
                id="email-project-updates"
                checked={emailNotifications.projectUpdates}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, projectUpdates: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-new-comments">New Comments</Label>
                <p className="text-sm text-gray-500">Receive emails when someone comments on your projects</p>
              </div>
              <Switch
                id="email-new-comments"
                checked={emailNotifications.newComments}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, newComments: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-funding-alerts">Funding Alerts</Label>
                <p className="text-sm text-gray-500">Receive emails about funding milestones for your projects</p>
              </div>
              <Switch
                id="email-funding-alerts"
                checked={emailNotifications.fundingAlerts}
                onCheckedChange={(checked) => setEmailNotifications({ ...emailNotifications, fundingAlerts: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-marketing">Marketing Emails</Label>
                <p className="text-sm text-gray-500">Receive promotional emails and newsletters</p>
              </div>
              <Switch
                id="email-marketing"
                checked={emailNotifications.marketingEmails}
                onCheckedChange={(checked) =>
                  setEmailNotifications({ ...emailNotifications, marketingEmails: checked })
                }
              />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Push Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-project-updates">Project Updates</Label>
                <p className="text-sm text-gray-500">
                  Receive push notifications about updates to projects you're backing
                </p>
              </div>
              <Switch
                id="push-project-updates"
                checked={pushNotifications.projectUpdates}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, projectUpdates: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-new-comments">New Comments</Label>
                <p className="text-sm text-gray-500">
                  Receive push notifications when someone comments on your projects
                </p>
              </div>
              <Switch
                id="push-new-comments"
                checked={pushNotifications.newComments}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, newComments: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-funding-alerts">Funding Alerts</Label>
                <p className="text-sm text-gray-500">
                  Receive push notifications about funding milestones for your projects
                </p>
              </div>
              <Switch
                id="push-funding-alerts"
                checked={pushNotifications.fundingAlerts}
                onCheckedChange={(checked) => setPushNotifications({ ...pushNotifications, fundingAlerts: checked })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-announcements">Important Announcements</Label>
                <p className="text-sm text-gray-500">
                  Receive push notifications about platform announcements and updates
                </p>
              </div>
              <Switch
                id="push-announcements"
                checked={pushNotifications.importantAnnouncements}
                onCheckedChange={(checked) =>
                  setPushNotifications({ ...pushNotifications, importantAnnouncements: checked })
                }
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading && <LoaderIcon className="mr-2 h-4 w-4" />}
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  )
}

