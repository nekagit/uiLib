<script></script>

<template>
  <div class="main">
    <ul class="cards">
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <img
              src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg"
              alt="mixed vegetable salad in a mason jar. "
            />
          </div>
          <div class="card_content">
            <h2 class="card_title">Farmstand Salad &#x2022; $9</h2>
            <div class="card_text">
              <p>
                Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture
                of leafy greens and seasonal vegetables, fresh from the farmer's market.
              </p>
              <p>
                Served with your choice of dressing on the side: housemade ranch, cherry balsamic
                vinaigrette, creamy chipotle, avocado green goddess, or honey mustard. Add your
                choice of protein for $2 more.
              </p>
            </div>
          </div>
        </div>
      </li>

      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <img
              src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg"
              alt="a Reuben sandwich on wax paper. "
            />
          </div>
          <div class="card_content">
            <h2 class="card_title">Ultimate Reuben &#x2022; $18</h2>
            <div class="card_text">
              <p>
                All great meals take time, but this one takes it to the next level! More than 650
                hours of fermenting, brining, aging, and curing goes into each and every one of our
                legendary Reuben sandwiches.
              </p>
              <p>
                Every element of this extraordinary sandwich is handcrafted in our kitchens, from
                the rye bread baked from our secret recipe to the cave-aged Swiss cheese, right down
                to the pickle. The only thing we didn't make on the premises is the toothpick ( but
                we're looking into how to do that).
              </p>
              <p>
                This unforgettable sandwich has all of the classic Reuben elements: corned beef, rye
                bread, creamy Russian dressing, sauerkraut, plus a sweet gherkin pickle. No
                substitions please!
              </p>
              <p></p>
              <p>
                Add a side of french fries or sweet potato fries for $2 more, or our housemade pub
                chips for $1.
              </p>
            </div>
          </div>
        </div>
      </li>
      <li class="cards_item">
        <div class="card">
          <div class="card_image">
            <img
              src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg"
              alt="A side view of a plate of figs and berries. "
            />
          </div>
          <div class="card_content">
            <h2 class="card_title">Fig &amp; Berry Plate &#x2022; $16</h2>
            <div class="card_text">
              <p><span class="note">Seasonal.</span></p>
              <p>
                A succulent sextet of fresh figs join with a selection of bodacious seasonal berries
                in this refreshing, shareable dessert.
              </p>
              <p>
                Choose your drizzle: cherry-balsamic vinegar, local honey, or housemade chocolate
                sauce.
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

.card_image {
  height: calc(13 * 1.2rem);
  padding: 1.2rem 1.2rem 0;
  position: relative;
}
.card_image:before,
.card_image:after {
  content: '';
  position: absolute;
  width: 20px;
  left: 60%;
  top: 0;
  height: 45px;
  background: #e6e6e6b8;
  transform: rotate(45deg);
}
.card_image:after {
  transform: rotate(-45deg);
  top: auto;
  bottom: -22px;
  left: 40%;
}
.card_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cards_item {
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 30px;
  background:
    repeating-linear-gradient(#0000 0 calc(1.2rem - 1px), #66afe1 0 1.2rem) right bottom / 100% 100%,
    linear-gradient(red 0 0) 30px 0/2px 100% #fff;
  background-repeat: no-repeat;
  line-height: 1.2rem;
  -webkit-mask: radial-gradient(circle 0.8rem at 2px 50%, #0000 98%, #000) 0 0/100% 2.4rem;
}

.card_content {
  padding: 1.2rem;
}

h2.card_title,
p {
  margin: 1.2rem 0;
}
h2.card_title {
  font-size: 1.3em;
}
body {
  font-family: monospace;
  background: #eee;
}

html {
  font-size: 15px;
}
</style>
