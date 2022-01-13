import News from "../components/news";

const HomePage = {
    render() {
        return /* html */`
                <!-- banner -->
            <div class="mt-4">
                <img class="w-full h-auto" src="./img//banner.jpg" alt="">
            </div>
            <!-- nd -->
            <div>
                ${News.render()}
            </div>
        `;
    },
};
export default HomePage;