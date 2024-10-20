import NavigationMenu from '../components/NavigationMenu';

function Achievement () {
    return (
    <div class="container">
        <NavigationMenu/>
        <h2>My achievements</h2>

        <div class="row">
            <div class="col-lg-6">
                <h4>Sport</h4>
                <p><img src="images/trophy.jpg" class="img-thumbnail" alt="My first trophy"/></p>
            </div>

            <div class="col-lg-6">
                <h4>Academia</h4>
                <figure class="figure">
                    <img src="images/gold-medal.jpg" class="figure-img img-fluid rounded" alt="..."/>
                    <figcaption class="figure-caption">My math olympic gold medal</figcaption>
                </figure>

            </div>
        </div>
        <h4>2024 Plan</h4>
        <div class="row">
            <table class="table" id="plan">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Goal</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>

            </table>
        </div>

        <footer class="footer">
            <p>© Company 2017</p>
        </footer>

    </div>
    )
}

export default Achievement