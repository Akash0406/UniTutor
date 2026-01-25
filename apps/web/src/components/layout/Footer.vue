<template>
  <footer class="border-t border-base-300 bg-base-100">
    <div class="container-max py-14">
      <div class="grid gap-10 md:grid-cols-4">
        <!-- Brand -->
        <div>
          <div class="text-xl font-extrabold tracking-tight">UniT</div>
          <p class="mt-3 text-sm opacity-75 leading-relaxed max-w-xs">
            Consistent, semester-long academic support that brings structure,
            accountability, and confidence from Week&nbsp;1 to finals.
          </p>
        </div>

        <!-- Pages -->
        <nav aria-label="Footer navigation">
          <div class="font-bold">Pages</div>
          <ul class="mt-3 space-y-2 text-sm opacity-85">
            <li>
              <router-link
                to="/"
                class="link link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/how-it-works"
                class="link link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                How it works
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="link link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                About & Contact
              </router-link>
            </li>
            <li>
              <router-link
                to="/eoi?t=student"
                class="link link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Student registration
              </router-link>
            </li>
            <li>
              <router-link
                to="/eoi?t=tutor"
                class="link link-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Tutor registration
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Contact -->
        <div>
          <div class="font-bold">Contact</div>
          <p class="mt-3 text-sm opacity-80">
            <a
              href="mailto:theuniversitytutorofficial@gmail.com"
              class="link link-primary break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Email UniT"
            >
              theuniversitytutorofficial@gmail.com
            </a>
          </p>
          <p class="mt-2 text-xs opacity-65">
            We usually respond within 24–48 hours.
          </p>
        </div>

        <!-- Social -->
        <div>
          <div class="font-bold">Follow UniT</div>
          <ul class="mt-4 flex items-center gap-4" aria-label="Social links">
            <li>
              <a
                href="https://www.facebook.com/people/The-University-Tutor/61580055180861/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UniT on Facebook"
                class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 bg-base-200/40 hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span class="sr-only">Facebook</span>
                <span aria-hidden="true">f</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/theuniversitytutorofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UniT on Instagram"
                class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 bg-base-200/40 hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span class="sr-only">Instagram</span>
                <span aria-hidden="true">◎</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/the-university-tutor/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UniT on LinkedIn"
                class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 bg-base-200/40 hover:bg-base-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span class="sr-only">LinkedIn</span>
                <span aria-hidden="true">in</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="mt-12 pt-6 border-t border-base-300 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs opacity-70"
      >
        <div>© {{ new Date().getFullYear() }} UniT — The University Tutor</div>
        <div class="max-w-xl leading-relaxed">
          Tutor and student expressions of interest are stored securely and used
          only for academic support matching and communication.
        </div>
      </div>
    </div>
  </footer>
</template>
