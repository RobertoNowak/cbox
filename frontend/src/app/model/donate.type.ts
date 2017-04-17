export class Donate {
  public id: number;
  public name:      string;
  public picture:     any;
  public description:     string;
  public city:   string;
  public country:   string;
  public commitment:   string;
  public donate_count:   number;
  public exist_count:   number;
  public del_flg: number;
  public isSelected: boolean;
  public quantity: number;
  public pictureFile: any;
  constructor(){
    this.id = 0;
    this.name = "";
    this.picture = "";
    this.description="";
    this.city = "";
    this.country = "";
    this.commitment = "";
    this.donate_count = 0;
    this.exist_count = 0;
    this.del_flg = 0;
    this.isSelected = false;
    this.quantity = 0;
  }
}
