<script>
  export let title = "";
</script>

<div class="flex flex-col items-center justify-center bg-gray-100 min-h-vh">
  <div class="bg-white p-6 rounded-lg shadow-lg">
    <h1 class="text-2xl font-bold mb-4">{title}</h1>
    <slot></slot> <!-- This will render any content placed inside the PageWrapper component -->
  </div>
</div>
