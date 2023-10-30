<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './pages/Home.svelte';
  import About from './pages/About.svelte';
  import Contact from './pages/Contact.svelte';
</script>

<Router>
  <nav class="bg-gradient-to-r from-teal-400 to-blue-500 p-5 shadow-md">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-white">
          MyApp
        </div>
        <div class="space-x-4">
          <Link class="text-white px-3 py-2 hover:bg-blue-600 rounded transition" to="/">Home</Link>
          <Link class="text-white px-3 py-2 hover:bg-blue-600 rounded transition" to="/about">About</Link>
          <Link class="text-white px-3 py-2 hover:bg-blue-600 rounded transition" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  </nav>

  <div class="container mx-auto p-5 mt-5">
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
</Router>
