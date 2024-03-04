<template>
  <div class="row">
    <div class="card">
      <h4>What is a Frontend Develoment?</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam porro similique aliquid
        debitis ipsam soluta dolorum ipsa! Voluptate, suscipit iure.
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=devanagari,latin-ext');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #343a40;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  user-select: none;
}

.card {
  border-radius: 10px;
  filter: drop-shadow(0 5px 10px 0 #ffffff);
  width: 400px;
  height: 180px;
  background-color: #ffffff;
  padding: 20px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: 0.6s ease-in;
}

.card::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -15px;
  right: -15px;
  background: #7952b3;
  height: 220px;
  width: 25px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card:hover::before {
  transition-delay: 0.2s;

  transform: scale(40);
}

.card:hover {
  color: #ffffff;
}

.card p {
  padding: 10px 0;
}
</style>
