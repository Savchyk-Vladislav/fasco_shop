import { makeAutoObservable } from "mobx";

export default class ClothStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._clothes = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
    this._basketItems = [];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setClothes(clothes) {
    this._clothes = clothes;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  setBasketItem(cloth, size, count) {
    const item = {
      id: cloth.id,
      cloth: {
        name: cloth.name,
        price: cloth.price,
        img: cloth.img,
      },
      size: size,
      count: count,
    };
    this._basketItems.push(item);
  }

  setBasketItems(items) {
    this._basketItems = items;
  }

  updateBasketItemCount(id, newCount) {
    const item = this._basketItems.find((item) => item.id === id);
    if (item) {
      item.count = newCount;
    }
  }

  removeBasketItemById(id) {
    this._basketItems = this._basketItems.filter((item) => item.id !== id);
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get clothes() {
    return this._clothes;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }

  get basketItems() {
    return this._basketItems;
  }
}
