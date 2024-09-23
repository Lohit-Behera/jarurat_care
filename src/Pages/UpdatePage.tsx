import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getService, updateService } from "@/features/ServiceSlice";

function UpdatePage() {
  const { id } = useParams();
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const service = useSelector((state: any) => state.service.getInfo);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    dispatch(getService(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (service) {
      setName(service.name || "");
      setDescription(service.description || "");
      setPrice(service.price || 0);
    }
  }, [service]);

  const handlePrice = (e: any) => {
    const { value } = e.target;
    const numericValue = Number(value);

    if (!isNaN(numericValue)) {
      setPrice(numericValue);
    } else {
      setPrice(0);
    }
  };

  const onSubmit = () => {
    dispatch(updateService({ id, name, description, price }));
    navigate("/");
  };

  return (
    <Card className="w-[98%] md:w-[90%] mx-auto">
      <CardHeader>
        <CardTitle>Update Service</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              value={price || ""}
              placeholder="Price"
              onChange={handlePrice}
            />
          </div>
          <Button onClick={onSubmit}>Update</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UpdatePage;
