import Navigo from "navigo";
import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/tsinh": () => {
        print("Trang tuyển sinh");
    },
    "/ctdt": () => {
        print("Trương trình đào tạo");
    },
    "/goctsinh": () => {
        print("Góc tuyển sinh");
    },
    "/tdung": () => {
        print("Tuyển dụng");
    },
    "/news/:id": (value) => {
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
    },
});

router.notFound(() => print("Not Found Page"));

router.resolve();