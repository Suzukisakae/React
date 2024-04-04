### Handling Events the React Way

- Trong React, sự kiện được xử lý theo cách khác so với HTML thông thường. Trong HTML, sự kiện được xử lý bằng cách gán một hàm cho một sự kiện cụ thể của một phần tử. Trong React, sự kiện được xử lý bằng cách truyền một hàm vào một phần tử như một thuộc tính (ở đầy là `onClick`). Khi sự kiện xảy ra, hàm đó sẽ được gọi.
- Chú ý ở đây là hàm được truyền vào không được gọi ngay lập tức, mà chỉ được gọi khi sự kiện xảy ra.
- Ví dụ:

```jsx
<button style={{ backgroundColor: "#1971c2", color: "#fff" }}
          onClick={() => alert("Previous")}
        >
```

thì khi click vào button này, sẽ hiện ra một thông báo "Previous".

```jsx
<button style={{ backgroundColor: "#1971c2", color: "#fff" }}
          onClick={alert("Next")}
        >
```

thì khi render ra màn hình, sẽ hiện ra một thông báo "Next" ngay lập tức, không cần click vào button.

- Ta cũng có thể truyền vào một hàm đã được định nghĩa trước đó (ở trong cùng một component):

```jsx
function handleClick() {
  alert("Clicked");
}
<button style={{ backgroundColor: "#1971c2", color: "#fff" }}
          onClick={handleClick}
        >
```
hoặc là gọi hàm đó ngay lập tức:

```jsx
<button style={{ backgroundColor: "#1971c2", color: "#fff" }}
          onClick={handleClick()}
        >
```
