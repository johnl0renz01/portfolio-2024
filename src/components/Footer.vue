<script setup></script>

<template>
  <section
    class="flex flex-col h-screen bg-color7 text-white sm:px-6 lg:px-[23rem] py-10"
  >
    <div class="mb-10">
      <p
        class="inline-block px-4 py-2 bg-darkshade font-montserrat text-white text-2xl font-bold"
      >
        About
      </p>
    </div>
    <div class="lg:grid lg:grid-cols-2 h-full max-h-screen">
      <div class="relative">
        <div class="font-montserrat mb-6 text-[1.4rem] font-bold w-[50%]">
          <ul class="flex gap-x-4">
            <li class="border-r-2 border-r-black pr-5">Full-stack Developer</li>
            <li class="border-r-2 border-r-black pr-5">Creative Artist</li>
            <li class="border-r-2 border-r-black pr-5">Passionate Learner</li>
            <li class="">Technology Enthusiast</li>
          </ul>
        </div>
        <div class="">
          <div class="text-[1.1rem]">
            <strong>I'm a motivated</strong> and
            <strong>detail-oriented computer science graduate</strong>
            with a strong foundation in
            <strong>software development</strong> and a passion for
            <strong>continuous learning</strong>.

            <br />
            <br />
            I have honed my skills in various
            <strong>programming languages</strong>,
            <strong>web development</strong>, and
            <strong>database management</strong>. With hands-on experience in
            developing interactive web applications, I specialize in creating
            seamless user experiences using <strong>JavaScript</strong>,
            <strong>PHP</strong>, and <strong>MySQL</strong>, along with
            frameworks such as <strong>ReactJS</strong> and
            <strong>Tailwind</strong>
            CSS.

            <br />
            <br />

            I also have interest in <strong>video and image editing</strong>,
            allowing me to contribute creatively to projects. I thrive in
            collaborative environments, utilizing tools like
            <strong>Git</strong> and <strong>Jira</strong> for effective project
            management.

            <br />
            <br />
            I am <strong>adaptable</strong> and <strong>proactive</strong>,
            tackling challenges with a collaborative spirit. Committed to
            <strong>continuous learning</strong> and
            <strong>industry trends</strong>, I focus on
            <strong>user-centric design</strong> and
            <strong>innovation</strong>. Eager to leverage my skills, I aim to
            contribute to impactful projects in the
            <strong>tech industry</strong>, driven by
            <strong>attention to detail</strong> and a
            <strong>growth mindset</strong>.
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="flex justify-content justify-center">
          <img
            class="rounded-md h-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-between">
      <button
        class="flex items-center font-roboto font-bold uppercase text-darkshade"
      >
        <i
          class="pi pi-arrow-circle-up rounded-full bg-darkshade text-gray-100 text-[2rem]"
        ></i>

        <span class="text-[1.25rem]"> Previous </span>
      </button>
      <button
        class="flex items-center font-roboto font-bold uppercase text-darkshade"
      >
        <span class="text-[1.25rem]"> Next </span>
        <i
          class="pi pi-arrow-circle-down rounded-full bg-darkshade text-gray-100 text-[2rem] shadow-none"
        ></i>
      </button>
    </div>
  </section>
</template>
