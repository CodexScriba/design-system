"use client"

import { SectionWrapper } from "./section-wrapper"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import {
  InfoIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  AlertCircleIcon,
} from "lucide-react"

export function AlertsSection() {
  return (
    <SectionWrapper
      id="alerts"
      title="Alerts & Feedback"
      description="Alert variants, confirmation dialogs, and toast notifications."
    >
      <div className="space-y-10">
        {/* Alert Variants */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Alert Variants
          </h3>
          <div className="max-w-2xl space-y-3">
            <Alert>
              <InfoIcon />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This is an informational alert using the default variant.
              </AlertDescription>
            </Alert>
            <Alert>
              <CheckCircleIcon />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangleIcon />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                Your session will expire in 5 minutes.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        <Separator />

        {/* Confirmation Dialog */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Confirmation Dialog
          </h3>
          <div className="flex flex-wrap gap-3">
            <AlertDialog>
              <AlertDialogTrigger render={<Button variant="destructive" />}>
                Delete Item
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your item and remove all associated data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>
                Open Dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p className="text-sm text-muted-foreground">
                    Dialog content goes here.
                  </p>
                </div>
                <DialogFooter showCloseButton>
                  <Button>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Separator />

        {/* Toast Notifications */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Toast Notifications
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast("Default toast notification")}
            >
              Default Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Action completed successfully!")}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("Something went wrong. Please try again.")
              }
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("Here's some useful information.")}
            >
              Info Toast
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
