
export class Worksite {
  name: string;
  address: string;
  // tslint:disable-next-line: variable-name
  _id: string;

  constructor(worksite) {
    this.name = worksite.name;
    this.address = worksite.address;
    this._id = worksite._id;
  }
}
