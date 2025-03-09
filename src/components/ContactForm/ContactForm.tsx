import {
  Button,
  Grid,
  Textarea,
  TextInput,
} from "@mantine/core";
import {
  hasLength,
  isEmail,
  useForm,
} from "@mantine/form";
// import { useState } from "react";
import classes from "./ContactForm.module.less";

export default function ContactForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: hasLength(
        { min: 3 },
        "Must be at least 3 characters",
      ),
      email: isEmail("Invalid email"),
    },
  });

  // const [submittedValues, setSubmittedValues] = useState<
  //   typeof form.values | null
  // >(null);

  const handleSubmit = async (
    values: typeof form.values,
  ) => {
    // setSubmittedValues(values);
    const formData = new FormData();

    Object.entries(values).forEach(
      ([key, value]) => {
        formData.append(key, value);
      },
    );

    formData.append(
      "access_key",
      "62701653-f75b-45f4-9f4c-2c714fc54e3a",
    );

    const _res = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      },
    );
    console.log(_res);
  };

  return (
    <form
      onSubmit={form.onSubmit(
        handleSubmit,
      )}
    >
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            {...form.getInputProps(
              "email",
            )}
            classNames={{
              input: classes.input,
            }}
            key={form.key("email")}
            mt="md"
            placeholder="Email"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            {...form.getInputProps(
              "name",
            )}
            classNames={{
              input: classes.input,
            }}
            key={form.key("name")}
            mt="md"
            placeholder="Name"
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <TextInput
            {...form.getInputProps(
              "phoneNumber",
            )}
            classNames={{
              input: classes.input,
            }}
            key={form.key(
              "phoneNumber",
            )}
            mt="md"
            placeholder="Phone number"
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            {...form.getInputProps(
              "subject",
            )}
            classNames={{
              input: classes.input,
            }}
            key={form.key("subject")}
            mt="md"
            placeholder="Subject"
          />
        </Grid.Col>
      </Grid>
      <Textarea
        {...form.getInputProps(
          "message",
        )}
        classNames={{
          input: classes.input,
        }}
        key={form.key("message")}
        mt="md"
        placeholder="Message"
      />
      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
