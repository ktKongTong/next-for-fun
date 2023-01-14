import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Hello VuePress",
  description: "Just playing around",
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: "Home",
        link: "/",
      },
    ],
  }),

  plugins: [],
});
