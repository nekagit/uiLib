import { Control, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { ITextInput } from "../../interfaces/Interfaces";

interface IProps {
  formData: ITextInput;
  formControl: Control<FieldValues> | undefined;
}

export default function ProfileForm(props: IProps) {
  const { formData, formControl } = props;
  return (
    <FormField
      control={formControl}
      name={formData.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{formData.label}</FormLabel>
          <FormControl>
            <Input placeholder={formData.placeholder} {...field} />
          </FormControl>
          <FormDescription>{formData.description}.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
