export class PagerInfo {
  public constructor(
    public totalItems  : number,
    public  itemsPerPage: number,
    public  currentPage: number,
    public  totalPages: number
  ) {}
}
