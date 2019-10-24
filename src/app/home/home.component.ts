import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ApiService } from '../core/api.service';
import { Router } from '@angular/router';
import { PageRequest, DataTable, Config } from '../table';
import { map } from 'rxjs/operators';
import { ApiAnswer } from '../core/api-answer';
import { Person } from '../core/person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[]
  private static defaulPageSize = 5;
  private static defaultPage = 0;

  public config$: Observable<Config>;
  public data$: Observable<DataTable<Person>>;
  constructor(private _apiService: ApiService,
    private _router: Router) {

    this.config$ = this._apiService.getConfig();
    this.data$ = this._apiService.getData(HomeComponent.defaulPageSize, HomeComponent.defaultPage)
      .pipe(
        map(this._createDataTable)
      );

    this.products = [
      new Product(
        'A-01',
        'Adidas UltraBOOST',
        'https://www.flightclub.com/media/catalog/product/8/0/800238_1.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        260
      ),
      new Product(
        'N-01',
        'Nike Air Max',
        'https://ugc.nikeid.com/is/image/nike/ugc/287164203.tif',
        ['Men', 'Shoes', 'Running Shoes'],
        270
      )
    ]
  }

  productWasSelected(halo: Product): void {
    console.log('Product clicked: ', halo);
  }
  ngOnInit() {
  }

  private _createDataTable(answer: ApiAnswer<Person>): DataTable<Person> {
    const currentPage = Math.ceil(answer.offset / answer.limit) + 1;
    const lastPage = Math.ceil(answer.total / answer.limit);
    const result: DataTable<Person> = {
      pageActual: currentPage,
      lastPage: lastPage,
      data: answer.result
    }

    return result;
  }
  
  public updateTable(pageRequest: PageRequest) {
    this.data$ = this._apiService.getData(pageRequest.size, (pageRequest.page * pageRequest.size))
      .pipe(
        map(this._createDataTable)
      );
  }
  
  public goDetails(index: number) {
    this._router.navigateByUrl(`details/${index}`);
  }
}
