<template>
  <div>
    <div class="row justify-content-center">
      blabla
      {{ $route.params.id }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from "@/store/index.js";
export default {
  name: "ProductDetails",
  store: Store
};
</script>
