import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export function FormDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <form>
        <DialogContent className="sm:max-w-sm rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-green-700 text-xl font-semibold">
              Submit a Request
            </DialogTitle>
            <DialogDescription className="text-gray-500 text-sm">
              Fill out the form below to submit a new location request.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label className="text-green-700 font-medium">Request Type</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="pothole">Pothole</SelectItem>
                    <SelectItem value="light pole">Light Pole</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <Label className="text-green-700 font-medium">
                Additional Details
              </Label>
              <Textarea
                className="h-32"
                id="details"
                placeholder="Add details here."
              />
            </Field>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="rounded-xl border-green-600 text-green-600 hover:bg-green-50"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="rounded-xl bg-green-600 text-white hover:bg-green-700"
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
