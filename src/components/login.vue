<script setup>

</script>

<template>
<div class="container">
  <form class="w-50 ms-auto me-auto">
    <div class="mb-3">
      <label for="Input-email-1" class="form-label">邮件</label>
      <input type="email" class="form-control" id="Input-email-1" aria-describedby="emailHelp" placeholder="请输入邮件地址">
      <div id="Help" class="form-text">我们不会将你的邮箱公布。</div>
    </div>
    <div class="mb-3">
      <label for="Input-password-1" class="form-label">密码</label>
      <input type="password" class="form-control" id="Input-password-1" placeholder="请输入密码">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="checkbox-1">
      <label class="form-check-label" for="checkbox-1">记住</label>
    </div>
    <button type="submit" class="btn btn-primary">登录</button>
  </form>
</div>
</template>

<style scoped>

</style>