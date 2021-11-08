export class Person {
  private _id: number;
  private _name: string;
  private _bio: string;

  constructor(id: number, name: string, bio: string) {
    this._id = id;
    this._name = name;
    this._bio = bio;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get bio(): string {
    return this._bio;
  }
  public set bio(value: string) {
    this._bio = value;
  }
}
