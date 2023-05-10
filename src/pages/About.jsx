import MyPhoto from "../assets/my-photo.jpg";

export function About() {
    return (
        <section className="section about">
            <div className="about-container container" data-size="lg">
                <div className="about-content flow">
                    <p>
                        Hello! My name is Trung, and I enjoy learning about the
                        world around us. My interest in web programming began in
                        my third year of university, when I was introduced to
                        topics such as website administration and system
                        construction.
                    </p>
                    <p>
                        On April 7, this year, I was privileged to obtain a new
                        engineering degree from the university where I am
                        currently enrolled. In the days following graduation, my
                        main objective was to approach, learn, and improve the
                        abilities required to become a professional web
                        developer.
                    </p>
                    <p>
                        Recently, in addition to acquiring new web development
                        skills, I also discovered intriguing knowledge such as
                        data structures and algorithms, design with figma, and
                        design with figma from reading tutorials. blog or
                        watching video lessons on social networking platforms.
                    </p>
                    <p>
                        Here are a few technologies I’ve been learning with
                        recently:
                    </p>
                    <ul className="grid about-list" data-columns="columns">
                        <li className="about-list-item">c++ / c#</li>
                        <li className="about-list-item">python</li>
                        <li className="about-list-item">php</li>
                        <li className="about-list-item">html5 / css3</li>
                        <li className="about-list-item">sass</li>
                        <li className="about-list-item">javascript (ES6+)</li>
                        <li className="about-list-item">reactjs</li>
                        <li className="about-list-item">nodejs</li>
                        <li className="about-list-item">firebase</li>
                    </ul>
                </div>
                <div className="about-img">
                    <img src={MyPhoto} alt="My Photo" />
                </div>
            </div>
        </section>
    );
}
