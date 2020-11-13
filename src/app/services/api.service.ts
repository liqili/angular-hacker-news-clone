import { Injectable } from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { NewsItem} from '../models';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) { }

  getStories(): Observable<NewsItem[]> {
    return this.http.get(this.BASE_URL + 'newstories.json?orderBy="$key"&limitToFirst=50').pipe(
      mergeMap((ids: number[]) => forkJoin(ids.map((id) => this.http.get<NewsItem>(`${this.BASE_URL}/item/${id}.json`)))),
    );
  }

  getTopStories(): Observable<NewsItem[]> {
    return this.http.get(this.BASE_URL + 'topstories.json?orderBy="$key"&limitToFirst=50').pipe(
      mergeMap((ids: number[]) => forkJoin(ids.map((id) => this.http.get<NewsItem>(`${this.BASE_URL}/item/${id}.json`)))),
    );
  }

  getBestStories(): Observable<NewsItem[]> {
    return this.http.get(this.BASE_URL + 'beststories.json?orderBy="$key"&limitToFirst=50').pipe(
      mergeMap((ids: number[]) => forkJoin(ids.map((id) => this.http.get<NewsItem>(`${this.BASE_URL}/item/${id}.json`)))),
    );
  }
}
