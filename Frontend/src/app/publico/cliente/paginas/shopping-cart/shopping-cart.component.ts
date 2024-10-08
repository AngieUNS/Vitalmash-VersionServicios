import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para ngFor
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { HeaderComponent } from "../../../../core/header/header.component";

const count = 5;
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    CommonModule, 
    NzListModule, 
    NzButtonModule,
    HeaderComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  initLoading = true;
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];

  constructor(
    private http: HttpClient,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat([...Array(count)].fill({}).map(() => ({ loading: true, name: {} })));
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => {
        this.data = this.data.concat(res.results);
        this.list = [...this.data];
        this.loadingMore = false;
      });
  }

  edit(item: any): void {
    this.msg.success(item.email);
  }
}
