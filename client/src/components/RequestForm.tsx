import { useState } from "react";
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
  onSubmit,
  pickedPosition,
}: {
  onSubmit: (values: {
    requestType: string;
    details: string;
    position: [number, number] | null;
  }) => void;
  pickedPosition: [number, number] | null;
}) {
  const [formValues, setFormValues] = useState({
    requestType: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formValues, position: pickedPosition });
  };

  const handleReset = () => {
    setFormValues({ requestType: "", details: "" });
  };

  return (
    <form className="p-4 space-y-1" onSubmit={handleSubmit}>
      <FieldTitle className="text-green-700 text-lg font-semibold">
        Submit a Request
      </FieldTitle>
      <FieldDescription className="text-gray-500 text-sm pb-2">
        Fill out the form below to submit a new location request.
      </FieldDescription>

      <FieldGroup className="space-y-4">
        <Field>
          <Label className="text-green-700 font-medium">Request Type</Label>
          <Select
            value={formValues.requestType}
            onValueChange={(value) =>
              setFormValues({ ...formValues, requestType: value })
            }
          >
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
        </Field>

        <Field>
          <Label className="text-green-700 font-medium">
            Additional Details
          </Label>
          <Textarea
            className="h-32 mt-1"
            id="details"
            placeholder="Add details here."
            value={formValues.details}
            onChange={(e) =>
              setFormValues({ ...formValues, details: e.target.value })
            }
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
              type="button"
              variant="outline"
              onClick={handleReset}
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
