module.exports = {
  title: "Anshul Goyal",
  tagline: "Open source contributor, Writer, Web developer, Anime lover",
  url: process.env.URL || "http://localhost:3000",
  baseUrl: process.env.BASE_URL || "/",
  favicon: "",
  organizationName: "anshulrgoyal", // Usually your GitHub org/user name.
  projectName: "anshulrgoyal", // Usually your repo name.
  themeConfig: {
    image: "/img/anshul.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "Anshul Goyal",
      links: [
        {
          to: "resume",
          activeBasePath: "resume",
          label: "Resume",
          position: "left",
        },
        {
          to: "projects",
          activeBasePath: "projects",
          label: "Conributions",
          position: "right",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/anshulrgoyal",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Resume",
              to: "resume/",
            },
            {
              label: "Contributions",
              to: "projects/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Dev.to",
              href: "https://dev.to/anshulgoyal15/",
            },
            {
              label: "Medium",
              href: "https://medium.com/@ar_goyal",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/anshul-goyal-8aa479135/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ar_goyal",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/anshulrgoyal",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anshul Goyal. Built with Docusaurus.`,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
