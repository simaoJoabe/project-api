import { Money } from './Money';

export class Stock {
  
  constructor(
    private _id: string,
    private _name: string,
    private _value: Money
  ) {}
  public get value(): Money {
    return this._value;
}
public set value(value: Money) {
    this._value = value;
}
public get name(): string {
    return this._name;
}
public set name(value: string) {
    this._name = value;
}
public get id(): string {
    return this._id;
}
public set id(value: string) {
    this._id = value;
}

  
}
