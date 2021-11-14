# LIKE Project

[웹 사이트](http://wecode26likeproject.s3-website.ap-northeast-2.amazonaws.com/) | [시연영상](https://drive.google.com/file/d/1TyeGsUcogieXJmMcxchkl2-tk5qylNw8/view?usp=sharing)

### 팀명 : LIKE - 라이키

> 나이키 클론 프로젝트.
>
> 개발 초기 세팅부터 전부 직접 구현했으며, 실제 사용할 수 있는 서비스 수준으로 개발하는 것을 목표로 라이키 팀원들과 즐겁게 작업한 1차 프로젝트 입니다.

#### 프로젝트 선정이유

- 깔끔한 UI, 커머스 사이트의 기본적인 로직이 모두 들어가있어 프론트, 백엔드 모두 첫번째 프로젝트로 진행하기에 배울 점이 많다고 판단하여 선정하게 되었습니다.


&nbsp;

## 1. 개발 기간 및 개발 인원

- 개발 기간 : 2021년 11월 01일 – 11월 12일

- 개발 인원
  - **Front-end** 3명 : 임연수, 전지완, 신유진 👉️ [Front-end github 링크](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-frontend.git)
  - **Back-end** 2명 : 이지은, 김봉철 👉️ [Back-end github 링크](https://github.com/wecode-bootcamp-korea/26-1st-LIKE-backend.git)

&nbsp;


## 2. 스택

- **Front-End** : HTML5, SASS, React, AWS S3
- **Back-End** : Python, Django, MySQL, jwt, bcypt, AWS EC2, Redis
- **Common** : Git, Github, Slack, Trello, Postman

&nbsp;

## 3. 구현 기능

#### 신유진

> 로그인 & 회원가입

- 로그인 모달 구현
- 로그인과 회원기입 유효성 검사 로직구현

&nbsp;

#### 임연수

> 네비게이션

- 카테고리 데이터를 이용하여 네비게이션의 메뉴명과 서브메뉴명 업데이트

> 상세페이지 / 리뷰 아코디언

- 사이즈별 선택시 해당 사이즈의 최대 수량 업데이트 
- 리뷰 별점 표기 가능

> 미니장바구니 / 장바구니페이지 / 주문내역페이지

- `GET`, `POST`, `DELETE`로 백엔드와 통신 구현

&nbsp;

#### 전지완

> 메인 페이지

- 쿼리를 이용한 카테고리 필터 기능 구현

&nbsp;

## 4. 결과물

### 로그인

<img width="1440" alt="Screen Shot 2021-11-13 at 2 50 32 PM" src="https://user-images.githubusercontent.com/22067260/141607594-8cea47d7-89c8-43c8-97e7-e142cb6947d5.png">

### 회원가입

<img width="1440" alt="Screen Shot 2021-11-13 at 1 16 03 PM" src="https://user-images.githubusercontent.com/22067260/141605403-02dbca63-8e94-4f36-a443-402e61daa55c.png">

### 메인 페이지

<img width="1440" alt="Screen Shot 2021-11-13 at 1 10 22 PM" src="https://user-images.githubusercontent.com/22067260/141605212-3e8a7e92-9ed0-4a71-b091-1c91c6ff708e.png">

<img width="1440" alt="Screen Shot 2021-11-13 at 1 14 42 PM" src="https://user-images.githubusercontent.com/22067260/141607599-034a4712-ea15-4e07-aae4-b730b0dfc6a2.png">

### 상세 페이지

<img width="1440" alt="Screen Shot 2021-11-13 at 2 12 09 PM" src="https://user-images.githubusercontent.com/22067260/141606669-6b040a91-f51f-4913-99f2-cecbeb1a2a38.png">


### 장바구니 및 주문조회

<img width="1440" alt="Screen Shot 2021-11-13 at 2 31 36 PM" src="https://user-images.githubusercontent.com/22067260/141607177-7a4748f3-64c1-4229-a2ad-499d6b9d5896.png">


<img width="1440" alt="Screen Shot 2021-11-13 at 2 32 14 PM" src="https://user-images.githubusercontent.com/22067260/141607185-73b62508-a4b5-4baf-8dd6-82cec09a5d3e.png">


### 주문조회

<img width="1440" alt="Screen Shot 2021-11-13 at 2 32 39 PM" src="https://user-images.githubusercontent.com/22067260/141607195-163b8458-bfae-41a8-9f60-6c1732d00bb6.png">


&nbsp;

## 소감

- 신유진
   

- 임연수
   - 리엑트에 대한 전반적인 이해를 할 수 있었던는 프로젝트였습니다. 제일 기억에 남는 코드는 상세페이지에 사이즈 주문 수량 체크하는 부분이었어요. 그 기능을 구현하면 리엑트가 선언형이라는 대한 전반적인 이해를 할 수 있었어요.

- 전지완
  - 처음으로 React.js를 배운 후 진행된 프로젝트였습니다. 개발자의 역량/사고력을 높이는데 굉장한 도움이 된 계기가 됐습니다. 팀원 분들과의 '소통' 뿐 만이라 '개발자들 간의 소통'은 별개였다는 것을 깨닫게 된 좋은 계기가 됐습니다. 이 프로젝트의 메인 페이지를 코딩하면서 문제점에 직면 했을 때 어떤 자세로 그리고 그것을 해결하기 위해 어떻게 접근 해야 하는지 깨닫게 됐습니다. 자세한 사항은 개인 블로그에 정리 했습니다.    

&nbsp;

## Reference

- 이 프로젝트는 [Nike 사이트]()를 참조하여 학습 목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
