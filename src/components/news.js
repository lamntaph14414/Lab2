import data from "../data";
const News = {
    render() {
        return /* html */`
        <div class="text-blue-900	my-6 text-2xl"><h2>TIN TỨC HỌC TẬP</h2></div>
            <div>
                <div class="flex">
                    ${data.map((post) => `
                        <div class="border border-sky-500 p-4 mr-5">
                            <a href="/news/${post.id}"><img class="m-auto w-80" src="${post.img}" alt=""></a>
                            <h3 class="mt-2 m-auto w-80 text-red-600" ><a href="/news/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                            <p class="mt-2 m-auto w-80 text-blue-800">${post.desc}</p>
                        </div>
                        `).join("")}
                </div>
            </div>
        <div class="text-blue-900	my-6 text-2xl"><h2>HOẠT ĐỘNG SINH VIÊN</h2></div>
            <div>
                <div class="flex">
                    ${data.map((post) => `
                        <div class="border border-sky-500 p-4 mr-5">
                            <img class="m-auto w-80" src="${post.img}" alt="">
                            <h3 class="mt-2 m-auto w-80 text-red-600" ><a href="/news/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                            <p class="mt-2 m-auto w-80 text-blue-800">${post.desc}</p>
                        </div>
                        `).join("")}
                </div>
            </div>
       `;
    },
};
export default News;