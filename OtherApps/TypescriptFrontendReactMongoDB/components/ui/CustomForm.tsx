import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { ITextInput, Prijava } from "../../interfaces/Interfaces";
import PrijavaService from "../../server/services/PrijaveService";
import CustomFormTextField from "./customFormTextField";

const prijavaService = PrijavaService();
const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  sport: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
});

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      sport: "",
    },
  });

  async function onSubmit(
    e: React.FormEvent<HTMLFormElement>,
    values: Prijava
  ) {
    e.preventDefault();
    await prijavaService.create({
      name: values.name,
      lastName: values.lastName,
      phone: values.phone,
      email: values.email,
      sport: values.sport,
    } as Prijava);
    return values;
  }

  const formFields: ITextInput[] = [
    {
      name: "name",
      label: "Ime",
      placeholder: "Nenad",
      description: "Ime Deteta",
    },
    {
      name: "lastName",
      label: "Prezime",
      placeholder: "Kalicanin",
      description: "Prezime Deteta",
    },
    {
      name: "phone",
      label: "Telefon",
      placeholder: "017881127235",
      description: "Vas broj",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "nenad.kalicanin@qmbase.com",
      description: "Vasa Email",
    },
    {
      name: "sport",
      label: "Sportevi",
      placeholder: "Plivanje",
      description: "Sportevi Deteta",
    },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => form.handleSubmit(onSubmit(e, form.getValues()))}
        className="w-full"
      >
        <>
          {formFields.map((x) => (
            <CustomFormTextField
              key={x.name}
              formData={x}
              formControl={form.control}
            />
          ))}
          <Button type="submit">Submit</Button>
        </>
      </form>
    </Form>
  );
}
