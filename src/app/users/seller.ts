export class Seller {
  constructor(
    public first_name: string,
    public other_names: string,
    public email: string,
    public mobile_no: string,
    public password: string,
    public confirm_password: string,
    public shop_name: string,
    public terms: boolean
  ) {}
}
