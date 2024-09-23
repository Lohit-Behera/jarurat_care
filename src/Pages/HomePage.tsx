import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { deleteService } from "@/features/ServiceSlice";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const services = useSelector((state: any) => state.service.services);
  return (
    <>
      {services.length > 1 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[98%] md:w-[95%] mx-auto">
          {services.map((service: any) => (
            <Card key={service.id}>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col space-y-2">
                <p>{service.description}</p>
                <p>Price: {service.price}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => navigate(`/update/${service.id}`)}
                >
                  <Pencil />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => {
                    dispatch(deleteService(service.id));
                  }}
                >
                  <Trash />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center space-y-4 w-[90%] md:w-[70%] lg:w-[60%] mx-auto rounded-lg border-2 p-2 md:p-4">
          <p>No Services Found</p>
          <p>Please Create Services</p>
          <Button onClick={() => navigate("/create-service")}>Create</Button>
        </div>
      )}
    </>
  );
}

export default HomePage;
