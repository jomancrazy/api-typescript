import { Car } from '../interface/car.interface';
import itemModel from '../models/item.model';

const getOrders = async () => {
    const responseItem = await itemModel.find({});
    return responseItem;
}

export { getOrders };