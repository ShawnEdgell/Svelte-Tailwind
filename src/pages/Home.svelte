<script>
    import PageWrapper from '../components/PageWrapper.svelte';
    let count = 0;
</script>

<PageWrapper title="Home Page">
    <p>This is the home page of the application.</p>
    <button 
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
      on:click={() => count += 1}>
      Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
</PageWrapper>
