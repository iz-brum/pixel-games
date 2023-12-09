import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // URL base para requisições HTTP
  private url = "http://localhost:3000/produtos";

  constructor(private _httpClient: HttpClient) { }

  // Obter um produto específico por ID
  getProduto(id: any): Observable<Produto> {
    const urlAtualizar = `${this.url}?id=${id}`;
    return this._httpClient.get<Produto>(urlAtualizar);
  }

  // Obter uma lista de todos os produtos
  getProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.url);
  }

  // Cadastrar um novo produto
  cadastrarProduto(produto: Produto): Observable<Produto[]> {
    return this._httpClient.post<Produto[]>(this.url, produto);
  }

  // Atualizar um produto existente por ID
  atualizarProduto(id: any, produto: Produto): Observable<Produto[]> {
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Produto[]>(urlAtualizar, produto);
  }

  // Remover um produto por ID
  removerProduto(id: any): Observable<Produto[]> {
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Produto[]>(urlDeletar);
  }
}
