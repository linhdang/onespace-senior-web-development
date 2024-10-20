import NavigationMenu from '../components/NavigationMenu';

function Home() {
    return (
        <div class="container">
          <NavigationMenu/>

          <h2>What i like</h2>

          <div class="row">
            <div class="col-lg-4">
              <h4>Food</h4>
              <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

              <h4>Subheading</h4>
              <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

              <h4>Subheading</h4>
              <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>

            <div class="col-lg-4">
              <h4>Sport</h4>
              <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

              <h4>Subheading</h4>
              <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

              <h4>Subheading</h4>
              <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>

            <div class="col-lg-4">
              <h4>Game</h4>
              <p>Dota</p>

              <h4>Subheading</h4>
              <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

              <h4>Subheading</h4>
              <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>
          </div>

          <footer class="footer">
            <p>© Company 2017</p>
          </footer>

        </div>
    )
}

export default Home;