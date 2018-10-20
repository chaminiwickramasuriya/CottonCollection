export class CategoryDTO {
  catCode:string;
  catName:string;
  catType:string;
  catPrice:string;
  qtyOnHand:string;
  size:string;
  imgPath:string;


  constructor(catCode: string, catName: string, catType: string, catPrice: string, qtyOnHand: string, size: string, imgPath: string) {
    this.catCode = catCode;
    this.catName = catName;
    this.catType = catType;
    this.catPrice = catPrice;
    this.qtyOnHand = qtyOnHand;
    this.size = size;
    this.imgPath = imgPath;
  }
}
