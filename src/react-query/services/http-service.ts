import APIClient from "./api-client";

export interface Item {
    _id: string,
    name: string,
}

export interface ItemForm {
    name: string,
}

export const itemService = new APIClient<Item, ItemForm>("/mock");
