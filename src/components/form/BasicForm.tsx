import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/Button";

import { Form } from "react-aria-components";

import { SelectItem, Select } from "../ui/Select";

const schema = z.object({
  favoriteSports: z.enum(["Football", "Basketball", "Tennis", "Soccer"], {
    required_error: "Please select one option",
  }),
});

// Infer the TypeScript type from the schema
type FormData = z.infer<typeof schema>;

export function BasicForm() {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {},
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        control={control}
        name="favoriteSports"
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error },
        }) => (
          <Select
            label="Favorite Sports"
            name={name}
            defaultSelectedKey={value}
            onSelectionChange={(key: any) => {
              onChange(key);
            }}
            onBlur={onBlur}
            // Let React Hook Form handle validation instead of the browser.
            validationBehavior="aria"
            ref={ref}
            isInvalid={invalid}
            errorMessage={error?.message}
          >
            <SelectItem id="Football">Football</SelectItem>
            <SelectItem id="Basketball">Basketball</SelectItem>
            <SelectItem id="Tennis">Tennis</SelectItem>
            <SelectItem id="Soccer">Soccer</SelectItem>
          </Select>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
