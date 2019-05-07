import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import * as productsActions from '../actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ProductService} from '../../services/product.service';
import {of} from 'rxjs';

@Injectable()
export class ProductsEffects {

  constructor( private actions$: Actions,
               public productService: ProductService) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productsActions.LOAD_PRODUCTS),
    switchMap( () => {
      return this.productService.getProducts()
        .pipe(
          map( products => {
            return new productsActions.LoadProductsSuccess(products);
          }),
          catchError( error => of(new productsActions.LoadProductsFail(error)))
        );
    })
  );


  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(productsActions.CREATE_PRODUCT),
    switchMap( (action) => {
      return this.productService.saveProduct(action['dataProduct'])
        .pipe(
          map( () => {
            return new productsActions.CreateProductSuccess();
          }),
          catchError( error => of(new productsActions.CreateProductFail(error)))
        );
    })
  );

  @Effect()
  succesCreateProduct$ = this.actions$.pipe(
    ofType(productsActions.CREATE_PRODUCT_SUCCESS),
    switchMap( () => {
        return of(new productsActions.LoadProducts());
      })
  );


  /*cargarUsuario$ = this.actions$
    .pipe(
      ofType(usuarioActions.CARGAR_USUARIO),
      switchMap( (action) => {
        const id = action['id'];
        console.log(action);
        return this.usuarioServie.getUserById(id)
          .pipe(
            map(user => new usuarioActions.CargarUsuarioSucces(user) ),
            catchError( error => of( new usuarioActions.CargarUsuarioFail( error ) ) )
          );
      })
    );*/
}
