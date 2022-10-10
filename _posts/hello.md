---
categories:
  - CSS
date: '2022-10-10'
description: about CSS
slug:
tags:
  - CSS
  - hi
title: hello CSS
---

### scroll snap

> 풀 페이지에 쓰려고 했는데 글을 보니, 페이지 보다는 페이지 내g의 컴포넌트에 쓰는 게 좋다고 함. 경우에 따라 유저가 컨트롤하지 못하는 느낌 들 수 있기 때문에 주의.

### focus-within

> 자식 노드에 focus 되어있으면 스타일을 적용해랏

```css
li:hover,
li:focus-within {
	background: red;
	cursor: pointer;
}
```

<img src="../_images/focus-within.png" width="400">

> 이렇게 메뉴의 자식 노드를 hover할때도 부모 & 자식 백그라운드가 적용된 걸 볼 수 있다.
