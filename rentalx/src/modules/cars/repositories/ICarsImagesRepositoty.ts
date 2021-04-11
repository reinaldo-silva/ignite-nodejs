import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepositoty {
  create(car_id: string, image_name: string): Promise<CarImage>;
}

export { ICarsImagesRepositoty };
