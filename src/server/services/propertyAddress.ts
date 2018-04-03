import { ObjectNotFound } from "../errors";
import { PropertyAddress } from "../interfaces/propertyAddress";
import { getPropertyAddressModel } from "../models/propertyAddress";

interface PropertyAddressService {
    all(): Promise<PropertyAddress[]>;

    create(propertyAddress: PropertyAddress): Promise<PropertyAddress>;

    findById(id: string): Promise<PropertyAddress>;

    update(propertyAddress: PropertyAddress): Promise<PropertyAddress>;

    remove(id: string): Promise<PropertyAddress>;
}

class PropertyAddressServiceImpl implements PropertyAddressService {
    public async all(): Promise<PropertyAddress[]> {
        return getPropertyAddressModel().find();
    }

    public create(entity: PropertyAddress): Promise<PropertyAddress> {
        return getPropertyAddressModel().create(entity);
    }

    public async findById(id: string): Promise<PropertyAddress> {
        const address = await getPropertyAddressModel().findById(id);
        if (!address) {
            return Promise.reject(new ObjectNotFound("PropertyAddress"));
        }
        return address;
    }

    public async update(address: PropertyAddress): Promise<PropertyAddress> {
        const updatedAddress = await getPropertyAddressModel().findByIdAndUpdate(address.id, address, { "new": true });
        if (!updatedAddress) {
            return Promise.reject(new ObjectNotFound("PropertyAddress"));
        }
        return updatedAddress;
    }

    public async remove(id: string): Promise<PropertyAddress> {
        const address = await getPropertyAddressModel().findByIdAndRemove(id);
        if (!address) {
            return Promise.reject(new ObjectNotFound("PropertyAddress"));
        }
        return address;
    }
}

let addressService: PropertyAddressService;

export default function getPropertyAddressService(): PropertyAddressService {
    if (!addressService) {
        addressService = new PropertyAddressServiceImpl();
    }
    return addressService;
}
