export class Worksite {
  name: string;
  address: string;
  _id: string;
  photo: string;

  constructor(worksite) {
    this.name = worksite.name;
    this.address = worksite.address;
    this._id = worksite._id;
    this.photo = worksite.photo;
  }
}
