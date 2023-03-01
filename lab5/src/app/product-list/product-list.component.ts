import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit{

  // products = products;
  // @ts-ignore
  public categoryId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const routerParams = this.route.snapshot.paramMap;
    this.categoryId = Number(routerParams.get('categoryId'));
  }
}

