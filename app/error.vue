<script lang="ts" setup>
const error = useError();
const handleError = () => clearError({ redirect: "/" });
</script>
<template>
  <main class="container-error">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6 text-center mt-2">
          <template v-if="error?.statusCode == 404">
            <h1>404</h1>
            <h2>Oops!. Trang tìm kiếm không tồn tại.</h2>
            <p>
              Làm thế nào mà bạn có thể tìm đến đây. cõ lẽ lẽ trang này đã được
              xoá hoặc di chuyển hãy quay lại trang chủ nào.
            </p>
          </template>
          <template v-else>
            <h1>500</h1>
            <h2>Oops!. Có lỗi đã xảy ra.</h2>
            <p>
              Có vẻ như có một số thứ đã không hoạt động, bạn có thể thử tải lại
              trang sau vài giây hoặc quay về trang chủ
            </p>
          </template>
          <button
            class="btn green"
            @click="handleError"
          >
            Trang Chủ
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
:root {
  --blue: #0e0620;
  --white: #fff;
  --green: #4b91e2;
}

.container-error {
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}

button {
  font-family: "Nunito Sans", serif;
}

ul {
  list-style-type: none;
  padding-inline-start: 35px;
}

svg {
  width: 100%;
  visibility: hidden;
}

h1 {
  font-size: 5.5em;
  margin: 15px 0px;
  font-weight: bold;
}

h2 {
  font-weight: bold;
}

img {
  width: 100%;
  max-width: 180px;
  height: auto;
  object-fit: contain;
}

.btn {
  z-index: 1;
  overflow: hidden;
  background: transparent;
  position: relative;
  padding: 8px 50px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 2px;
  transition: 0.2s ease;
  font-weight: bold;
  margin: 5px 0px;

  &.green {
    border: 4px solid #4b91e2;
    color: #0e0620;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background: #4b91e2;
      z-index: -1;
      transition: 0.2s ease;
    }

    &:hover {
      color: #fff;
      background: #4b91e2;
      transition: 0.2s ease;

      &:before {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  body {
    display: block;
  }

  .container {
    margin-top: 70px;
    margin-bottom: 70px;
  }
}
</style>
