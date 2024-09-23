import { useSelector, useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addService } from "../features/ServiceSlice";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be less than 50 characters." }),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters." })
    .max(200, { message: "Description must be less than 200 characters." }),
  price: z.number().min(1, { message: "Price must be greater than 0." }),
});

function CreateServicePage() {
  const dispatch = useDispatch<any>();
  const services = useSelector((state: any) => state.service.services);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      id: services.length + 1,
      name: values.name,
      description: values.description,
      price: values.price,
    };
    dispatch(addService(data));
    form.reset();
  }

  return (
    <Card className="w-[98%] md:w-[90%] mx-auto">
      <CardHeader>
        <CardTitle>Create Service</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormDescription>Name of the service</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormDescription>Description of the service</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="Price"
                      type="number"
                      {...field}
                      value={field.value || ""}
                      onChange={(e: any) =>
                        field.onChange(e.target.valueAsNumber)
                      }
                    />
                  </FormControl>
                  <FormDescription>Price of the service</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full " size="sm" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
export default CreateServicePage;
