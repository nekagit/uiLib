<script setup lang="ts"></script>
<template>
  <section class="jumboTron mx-auto p-2 w-full h-auto">
    <main class="mainSection">

      <nav>
        Navbar
        <h3>title</h3>
        <span>icon</span>
      </nav>
      <div>Content</div>
      
      <footer>footer</footer>
    </main>

</section>
</template>
<style scoped>
.jumboTron {
  width: 10px;
  min-height: 300px;
  color: white;
  background-color: rgba(255, 0, 0, 0.333);
  border: 1px solid white;
  transition: all 1s ease-in-out;
}

.jumboTron:hover {
  color: black;
  background-color: white;
  border: 30px solid white;
  border-image: url('../../../../assets/border/border-edge-nine.svg');
  border-image-slice: 33%;
  width: 99%;
}
.mainSection {
  display: none;
  color: black;

}
.mainSection:hover {
  display: block;
  color: black;

}
</style>
