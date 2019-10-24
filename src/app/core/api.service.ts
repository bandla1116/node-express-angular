import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from './person';
import { Config } from '../table';
import { configColumns } from './config';
import { data } from './data';
import { ApiAnswer } from './api-answer';

@Injectable()
export class ApiService {

  public getConfig(): Observable<Config> {
    return of(configColumns);
  }

  public getData(limit: number, offset: number): Observable<ApiAnswer<Person>> {

    return of(data)
    .pipe(
      map((data: Person[]) => {
        const result: ApiAnswer<Person> = {
          limit: limit,
          offset: offset,
          total: data.length,
          result: data.slice(offset, (limit + offset))
        }

        return result;
      })
    );
  }

  public getPerson(index: number): Observable<Person> {
    return of((data[index] as Person));
  }
}