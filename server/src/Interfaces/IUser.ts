export enum loginType {
  kakao = '카카오',
  google = '구글',
  naver = '네이버',
  none = '일반',
}

export interface IUser {
  nickname: string;
  password: string;
  image?: string;
  email: string;
  type: loginType;
}
