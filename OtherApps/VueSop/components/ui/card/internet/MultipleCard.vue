<script setup lang="ts">
import { useCardStore } from '@/stores/card'
const { setActive, setInactive, activeCard } = useCardStore()
const allCards = useCardStore().cards
</script>

<template>
  <div>
    <div class="">
      <div class="grid h-screen w-fit mx-auto p-20">
        <div class="ag-courses_item" v-for="(item, index) in allCards" :key="index">
          <div v-if="item.active == true">
            <div class="flip">
              <div class="front">
                <h1 class="text-shadow">{{ item.title }}</h1>
                <h2>{{ item.description }}</h2>
              </div>
              <div class="back">
                <h2>{{ item.description }}</h2>
                <!-- <p>{{ item.sectionHeaders }}</p> -->
              </div>
            </div>
            <!--
          <a href="#" class="ag-courses-item_link_main">
            <div class="ag-courses-item_title text-black" @click="setInactive(item.title)">
              {{ item.title }}
            </div>
            <Stars />
            <div class="ag-courses-item_bg"></div>
          </a> -->
          </div>
          <div v-else>
            <div class="flip">
              <div class="front">
                <h1 class="text-shadow">{{ item.title }}</h1>
                <h2>{{ item.description }}</h2>
              </div>
              <div class="back">
                <h2>{{ item.description }}</h2>
                <!-- <p>{{ item.sectionHeaders }}</p> -->
              </div>
            </div>
            <!-- <a href="#" class="ag-courses-item_link">
            <Stars />
            <div class="ag-courses-item_bg">
              <div class="ag-courses-item-bg-text"></div>
            </div>

            <div class="ag-courses-item_title text-white" @click="setActive(item.title)">
              {{ item.title }}
            </div>

            <div class="ag-courses-item_date-box">
              <span class="ag-courses-item_date"> {{ item.description }}</span>
            </div>
          </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="trick">
    <div class="grid h-screen w-fit mx-auto p-20">
      <div class="ag-courses_item" v-for="(item, index) in allCards" :key="index">
        <div v-if="item.active == true">
          <!-- <div class="flip">
            <div class="front">
              <h1 class="text-shadow">{{ item.title }}</h1>
              <h2>{{ item.description }}</h2>
            </div>
            <div class="back">
              <h2>{{ item.description }}</h2>
            </div>
          </div> -->

          <a href="#" class="ag-courses-item_link_main">
            <div class="ag-courses-item_title text-black" @click="setInactive(item.title)">
              {{ item.title }}
            </div>
            <Stars />
            <div class="ag-courses-item_bg"></div>
          </a>
        </div>
        <div v-else>
          <!-- <div class="flip">
            <div class="front">
              <h1 class="text-shadow">{{ item.title }}</h1>
              <h2>{{ item.description }}</h2>
            </div>
            <div class="back">
              <h2>{{ item.description }}</h2>
            </div>
          </div> -->
          <a href="#" class="ag-courses-item_link">
            <Stars />
            <div class="ag-courses-item_bg">
              <div class="ag-courses-item-bg-text"></div>
            </div>

            <div class="ag-courses-item_title text-white" @click="setActive(item.title)">
              {{ item.title }}
            </div>

            <div class="ag-courses-item_date-box">
              <span class="ag-courses-item_date"> {{ item.description }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trick {
  position: absolute;
  right: -240px;
}
.ag-courses-item_link_main::-webkit-scrollbar {
  display: none;
}
.ag-courses-item_link_main {
  position: relative;
  /* top: 33%;
  left: 33%; */
  display: block;
  height: 33vh;
  padding: 10px 20px;
  background-color: rgba(181, 54, 54, 0.848);
  overflow: hidden;
  overflow-y: auto;
  color: black;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  animation: fadeIn 1s ease-in-out forwards; /* 1s delay */
}
.ag-courses-item_link {
  display: block;
  max-height: 10vh;
  padding: 15px;
  background-color: #121212;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  -ms-overflow-style: none; /* IE and Edge */
  box-shadow:
    0px 10px 83px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  scrollbar-width: none; /* Firefox */
  animation: fadeIn 1s ease-in-out forwards; /* 1s delay */
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  /* 90% {
    opacity: 0;
  } */
  100% {
    opacity: 1;
  }
}
.ag-courses-item_link:hover,
.ag-courses-item_link:hover .ag-courses-item_date {
  text-decoration: none;
  color: #fff;
}
.ag-courses-item_link:hover .ag-courses-item_bg {
  -webkit-transform: scale(10);
  -ms-transform: scale(10);
  transform: scale(10);
}
.ag-courses-item_title {
  min-height: 87px;
  overflow: hidden;
  font-weight: bold;
  font-size: 30px;
  z-index: 2;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
.ag-courses-item_date-box {
  font-size: 18px;

  z-index: 2;
  position: relative;
}
.ag-courses-item_date {
  font-weight: bold;
  color: #f9b234;

  -webkit-transition: color 1s ease;
  -o-transition: color 1s ease;
  transition: color 1s ease;
}
.ag-courses-item_bg {
  height: 128px;
  width: 128px;
  background-color: #f9b234;

  z-index: 1;
  position: absolute;
  top: -75px;
  right: -75px;

  border-radius: 50%;

  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;
}
.ag-courses-item-bg-text {
  position: absolute;
  bottom: 18px;
  left: 21px;
  font-size: x-large;
  font-weight: 800;
}
.ag-courses_item:nth-child(2n) .ag-courses-item_bg {
  background-color: #3ecd5e;
}
.ag-courses_item:nth-child(3n) .ag-courses-item_bg {
  background-color: #e44002;
}
.ag-courses_item:nth-child(4n) .ag-courses-item_bg {
  background-color: #ff2a2a;
}
.ag-courses_item:nth-child(5n) .ag-courses-item_bg {
  background-color: #0c10a0;
}
.ag-courses_item:nth-child(6n) .ag-courses-item_bg {
  background-color: #4c49ea;
}
.gradient {
  background: linear-gradient(-45deg, #a82a03, #000000, #8d370f, #a2951c);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
.gradient2 {
  background: linear-gradient(-45deg, #000000, #7f5700, #025f81, #9c1919);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}
.gradient3 {
  background: linear-gradient(-45deg, #d4d4d4, #810000, #8d8d8d, #9c1919);
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@media only screen and (max-width: 979px) {
  .ag-courses_item {
    -ms-flex-preferred-size: calc(50% - 30px);
    flex-basis: calc(50% - 30px);
  }
  .ag-courses-item_title {
    font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }
}
@media only screen and (max-width: 639px) {
  .ag-courses_item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .ag-courses-item_title {
    min-height: 72px;
    line-height: 1;

    font-size: 24px;
  }
  .ag-courses-item_link {
    padding: 22px 40px;
  }
  .ag-courses-item_date-box {
    font-size: 16px;
  }
}

// base
.flip {
  position: relative;
  > .front,
  > .back {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 0.5s;
    transition-property: transform, opacity;
  }
  > .front {
    transform: rotateY(0deg);
  }
  > .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  &:hover {
    > .front {
      transform: rotateY(180deg);
    }
    > .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
  &.flip-vertical {
    > .back {
      transform: rotateX(-180deg);
    }
    &:hover {
      > .front {
        transform: rotateX(180deg);
      }
      > .back {
        transform: rotateX(0deg);
      }
    }
  }
}

.flip {
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;
  width: 400px;
  > .front,
  > .back {
    display: block;
    color: white;
    width: inherit;
    background-size: cover !important;
    background-position: center !important;
    height: 220px;
    padding: 1em 2em;
    background: #313131;
    border-radius: 10px;
    p {
      font-size: 0.9125rem;
      line-height: 160%;
      color: #999;
    }
  }
}

.text-shadow {
  text-shadow:
    1px 1px rgba(0, 0, 0, 0.04),
    2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04),
    4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04),
    6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04),
    8px 8px rgba(0, 0, 0, 0.04),
    9px 9px rgba(0, 0, 0, 0.04),
    0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
    11px 11px rgba(0, 0, 0, 0.04),
    12px 12px rgba(0, 0, 0, 0.04),
    13px 13px rgba(0, 0, 0, 0.04),
    14px 14px rgba(0, 0, 0, 0.04),
    0.625rem 0.625rem rgba(0, 0, 0, 0.04),
    16px 16px rgba(0, 0, 0, 0.04),
    17px 17px rgba(0, 0, 0, 0.04),
    18px 18px rgba(0, 0, 0, 0.04),
    19px 19px rgba(0, 0, 0, 0.04),
    1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}
</style>
