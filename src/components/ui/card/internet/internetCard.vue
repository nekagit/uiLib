<script setup lang="ts">

</script>
<template>
  <div class="box">
    <div class="box-icon">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
        ></path>
      </svg> -->
    </div>
    <div class="box-label">SOP ROTTERDAM</div>
    <div class="box-title">Glavna Strana</div>
    <div class="box-image">
        <InternetMultipleCard />
    </div>
    <div class="studio-button">
      <div class="studio-button-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      </div>
      <div class="studio-button-label">Open in Studio</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box {
  background: white;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 64px 1fr;
  position: relative;
}

.box-icon {
  display: grid;
  place-items: center;
}

.box-label {
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-size: 14px;
  letter-spacing: 0.125em;
}

.box-title {
  white-space: nowrap;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 24px;
  padding-top: 16px;
}

.box-image {
//   width: 800px;
//   height: 800px;
//   border-radius: 18px 0 18px 0;
//   overflow: hidden;

//   img {
//     width: 100%;
//     display: block;
//   }
}

.studio-button {
  position: absolute;
  bottom: 32px;
  right: 32px;
  display: flex;
  align-items:flex-start;
  background: #68009d;
  color: white;
  padding: 6px 18px;
  border-radius: 50px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: 0.35s ease all;
  overflow: hidden;
  max-width: 22px; /* icon size */
}

.studio-button-icon {
    display: none;
}

.studio-button-label {
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0 18px;
  opacity: 0;
  transform: translateX(10px);
  transition: 0.25s ease all;
}

.box:hover {
  .studio-button {
    max-width: 100%;
  }
  .studio-button-label {
    opacity: 1;
    transform: translateX(0);
    transition:
      0.25s 0.1s ease-in opacity,
      0.15s 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
  }
}
</style>
