import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StorageService {

  get<T>(key: string): Observable<T | null> {
    return of(localStorage.getItem(key)).pipe(
      map(item => {
        if (item) {
          return JSON.parse(item) as T;
        }

        return null;
      })
    );
  }

  set<T>(key: string, value: T): Observable<void> {
    return of({}).pipe(
      map(() => {
        localStorage.setItem(key, JSON.stringify(value))
      })
    );
  }
}