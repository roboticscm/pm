import { BehaviorSubject } from 'rxjs';
import { ProductService } from './service';

export class Store {
    productList$ = new BehaviorSubject([]);

    async find (filterText) {
        const data = await ProductService.find(filterText)
        this.productList$.next(data)
    }
}