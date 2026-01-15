<template>
  <footer class="border-t border-base-300">
    <div class="container-max py-12">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <div class="font-extrabold text-lg">UniT</div>
          <div class="opacity-70 mt-2">
            Consistent tutoring from Week 1 to finals.
          </div>
        </div>

        <div>
          <div class="font-bold">Pages</div>
          <ul class="mt-2 space-y-1 opacity-80">
            <li>
              <router-link to="/about" class="link link-hover"
                >About</router-link
              >
            </li>
            <li>
              <router-link to="/news" class="link link-hover">News</router-link>
            </li>
            <li>
              <router-link to="/blog" class="link link-hover">Blog</router-link>
            </li>
          </ul>
        </div>

        <div>
          <div class="font-bold">Contact</div>
          <div class="mt-2 opacity-80">
            Add contact email and social links when ready.
          </div>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 opacity-70 text-sm"
      >
        <div>© {{ new Date().getFullYear() }} UniT</div>
        <div>
          Tutor EOI submissions are stored for recruitment purposes only.
        </div>
      </div>
    </div>
  </footer>
</template>
