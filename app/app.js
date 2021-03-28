var userVarName = "Variable";
var homeContent = `<section class="welcome-content">
<div class="welcome">
  <div class="welcome-image"></div>
  <div class="welcome-text">
    <h1>Welcome to Orange Cat Cafe!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptates tenetur aliquam adipisci facere voluptate quod
      aspernatur cumque. Odio veniam ipsum, facere at, iste praesentium,
      nemo earum sint excepturi deserunt natus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Blanditiis labore quaerat fuga perferendis! Impedit nesciunt
      expedita facilis temporibus consectetur odit laudantium,
      voluptatem vel nisi illum maxime cumque esse. Delectus, quod.
    </p>
  </div>
</div>

<!-- ============COZY SECTION================= -->
<div class="cozy">
  <div class="cozy-text">
    <h1>Your cozy coffee Place.</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Voluptates tenetur aliquam adipisci facere voluptate quod
      aspernatur cumque. Odio veniam ipsum, facere at, iste praesentium,
      nemo earum sint excepturi deserunt natus.
    </p>
  </div>
  <div class="cozy-image"></div>
</div>

<!-- ===========ORANGE CAT COLLAGE=========== -->

<div class="collage"></div>
</section>

<footer>
<div class="logo"></div>
<div class="locations">
  <p>Fountain Square</p>
  <p>Mass Ave</p>
  <p>Broad Ripple</p>
</div>
</footer>`;
var aboutContent = `<div class="about-content">
<div class="meetowners">
  <h1>Meet the Owners</h1>
  <div class="owner">
    <div class="owner-pic shelley"></div>
    <div class="owner-text">
      <h1>Shelley Long</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates tenetur aliquam adipisci facere voluptate quod
        aspernatur cumque. Odio veniam ipsum, facere at, iste praesentium,
        nemo deserunt natus.
      </p>
    </div>
  </div>
  <div class="owner">
    <div class="owner-pic jack"></div>
    <div class="owner-text">
      <h1>Jack Nicholson</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates tenetur aliquam adipisci facere voluptate quod
        aspernatur cumque. Odio veniam ipsum, facere at, iste praesentium,
        nemo deserunt natus.
      </p>
    </div>
  </div>
</div>

<div class="meetowners">
  <h1>Meet the Inspiration</h1>
  <div class="owner">
    <div class="owner-pic catsy"></div>
    <div class="owner-text">
      <h1>Catsy Cline</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates tenetur aliquam adipisci facere voluptate quod
        aspernatur cumque. Odio veniam ipsum, facere at, iste praesentium,
        nemo deserunt natus.
      </p>
    </div>
  </div>
  <div class="owner">
    <div class="owner-pic captain"></div>
    <div class="owner-text">
      <h1>Captain Purrcard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates tenetur aliquam adipisci facere voluptate quod
        aspernatur cumque. Odio veniam ipsum, facere at, iste praesentium,
        nemo deserunt natus.
      </p>
    </div>
  </div>
</div>
</div>
<footer>
        <div class="logo"></div>
        <div class="locations">
          <p>Fountain Square</p>
          <p>Mass Ave</p>
          <p>Broad Ripple</p>
        </div>
      </footer>
`;

// this is an example of a named function

// this is a click listener
function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    $("#app").html(eval(contentID));
  });
}

// this checks for all the elements to be read by the browser
$(document).ready(function () {
  init();
});
