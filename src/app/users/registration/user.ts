export class User {
  constructor(
    public first_name: string,
    public other_names: string,
    public email: string,
    public phone_number: string,
    public password: string,
    public confirm_password: string,
    public shop_name: string
  ) {}
}
