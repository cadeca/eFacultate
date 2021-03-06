import {Injectable} from '@angular/core';
import {HttpService} from './Http.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './types/wl-types';

@Injectable()
export class UserService {

  profileImageChange: BehaviorSubject<any> = new BehaviorSubject<any>(true);

  constructor(private httpService: HttpService) {
  }

  getProfile(): Observable<User> {
    return this.httpService.get('user/profile');
  }

  // getProfileImage(): Observable<Blob> {
  //   return this.httpService.get('user/profile/image', {responseType: 'blob' as 'json'});
  // }
  //
  // setProfileImage(file: File): Observable<any> {
  //   const data = new FormData();
  //   data.append('file', file, file.name);
  //   this.profileImageChange.next(true);
  //   return this.httpService.post('user/profile/image', data);
  // }

  searchUsers(query: string, type: string): Observable<User[]> {
    return this.httpService.get(`user/search?query=${query}${type ? '&type=' + type : ''}`);
  }

  setProfile(profile: any): Observable<User> {
      return this.httpService.post('user/profile', profile);
  }
}
