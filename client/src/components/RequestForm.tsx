import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "./ui/input";
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

export function RequestForm({
  //onPickLocation,
  pickedPosition,
}: {
  //onPickLocation: () => void;
  pickedPosition: [number, number] | null;
}) {
  return (
    <form className="p-4 space-y-1">
      <FieldTitle className="text-green-700 text-lg font-semibold">
        Submit a Request
      </FieldTitle>
      <FieldDescription className="text-gray-500 text-sm pb-2">
        Fill out the form below to submit a new location request.
      </FieldDescription>

      <FieldGroup className="space-y-4">
        <Field>
          <Label className="text-green-700 font-medium">Request Type</Label>
          <Select>
            <SelectTrigger className="w-full mt-1">
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
          <Label className="text-green-700 font-medium">Coordinates</Label>
          <FieldDescription className="text-gray-500 text-sm pb-2">
            📍 Pick Location on Map
          </FieldDescription>
          <Input
            value={
              pickedPosition
                ? `${pickedPosition[0].toFixed(5)}, ${pickedPosition[1].toFixed(5)}`
                : ""
            }
            placeholder="Click 'Pick on Map' to select"
            readOnly
            className="bg-gray-50 text-gray-500 mt-1"
          />
          {/* <Button
            type="button"
            variant="outline"
            onClick={onPickLocation}
            className="rounded-xl border-green-600 text-green-600 hover:bg-green-50 w-full mt-2"
          >
            📍 Pick Location on Map
          </Button> */}
        </Field>

        <Field>
          <Label className="text-green-700 font-medium">
            Additional Details
          </Label>
          <Textarea
            className="h-32 mt-1"
            id="details"
            placeholder="Add details here."
          />
        </Field>

        <Field orientation="horizontal">
          <div className="flex gap-2 pt-2">
            <Button
              type="submit"
              className="rounded-xl flex-1 bg-green-600 text-white hover:bg-green-700"
            >
              Submit
            </Button>
            <Button
              variant="outline"
              className="rounded-xl flex-1 border-green-600 text-green-600 hover:bg-green-50"
            >
              Cancel
            </Button>
          </div>
        </Field>
      </FieldGroup>
    </form>
  );
}
