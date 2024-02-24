<script setup lang="ts" >
</script>

<template>
        <nav>
    <div class="nav-content">
    
        <!-- logo -->
        <a href="" class="logo">
        </a>
        
        <!-- navigation button -->
        <div class="nav-icon">
            <div class="bar one"></div>
            <div class="bar two"></div>
        </div>
        
        <!-- naviagtion links -->
        <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">FAQ</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
        </div>

        <svg class="search-icon" viewBox="0 0 3.7041668 11.641667" height="44" width="14">
            <g transform="matrix(0.97865947,0,0,0.97865947,-18.209185,-74.390797)">
                <path d="m 19.070369,80.532362 c -0.618144,0.618143 -0.619255,1.62581 -7.32e-4,2.244333 0.570867,0.570865 1.473777,0.613735 2.095614,0.131181 l 0.945308,0.945309 0.280633,-0.280633 -0.945308,-0.945309 c 0.482552,-0.621838 0.439684,-1.524746 -0.131182,-2.095613 -0.618523,-0.618523 -1.62619,-0.617413 -2.244333,7.32e-4 z m 0.280632,0.280632 c 0.466517,-0.466515 1.216631,-0.467898 1.683433,-0.0011 0.466802,0.466801 0.466882,1.218378 3.64e-4,1.684894 -0.466512,0.466513 -1.21809,0.466436 -1.684892,-3.67e-4 -0.466803,-0.466801 -0.465418,-1.216918 0.0011,-1.683432 z" fill="white" />
            </g>
        </svg>
    </div>
</nav>
</template>

<style scoped>
   html {
    background: #fafafa;
    font-family: Roboto, sans-serif;
}

body {
    margin: 0;
}

nav {
    margin: 0;
    overflow: hidden;
    background: #333333;
    transition: 0.3s;
}

.nav-content {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
}

.nav-content a {
    display: block;
    font-size: 14px;
    line-height: 44px;
    text-decoration: none;
    transition: all 0.3s;
    color: #ffffff;
}

.nav-content a:hover,
.nav-icon:hover,
.search-icon:hover {
    opacity: 0.7;
}

.nav-links {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.nav-icon {
    display: none;
    grid-gap: 5px;
    grid-template-columns: auto;
    padding: 17px 0;
    height: 10px;
    cursor: pointer;
    transition: all 0.3s;
}

.bar {
    height: 1px;
    width: 18px;
    background: white;
    transition: 0.5s;
}

.search-icon {
    cursor: pointer;
    transition: all 0.3s;
}

@media (max-width: 768px) {
    .show {
        background-color: #000000;
    }

    .nav-links {
        position: fixed;
        top: 44px;
        right: 0;
        height: 0;
        width: 100%;
        background: #333333;
        flex-direction: column;
        justify-content: flex-start;
        transition: height 2s cubic-bezier(0.19, 1, 0.22, 1),
            background-color 0.3s;
    }

    .show .nav-links {
        height: 100%;
        background-color: #000000;
    }

    .nav-links a {
        height: 0;
        width: 0;
        opacity: 0;
        overflow: hidden;
        margin-right: 50px;
        margin-left: 50px;
        transition: opacity 1.5s, height 2s;
    }

    .show .nav-links a {
        opacity: 1;
        width: auto;
        height: auto;
    }

    .nav-icon {
        order: 1;
        display: grid;
    }

    .logo {
        order: 2;
    }

    .search-icon {
        order: 3;
    }
}

.show .one {
    transform: rotate(45deg) translateY(5.5px);
}

.show .two {
    transform: rotate(-45deg) translateY(-5.5px);
}

.content {
    max-width: 1024px;
    min-height: 380px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.content h1 {
    font-size: 64px;
    margin-bottom: 0;
    color: #111111;
}

@media (max-width: 960px) {
    .content h1 {
        font-size: 48px;
    }
}
</style>