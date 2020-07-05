module.exports = {
  title: "Anshul Goyal",
  tagline: "Open source contributor, Writer, Web developer, anime lover",
  url: process.env.URL,
  baseUrl: "/",
  favicon: "",
  organizationName: "anshulrgoyal", // Usually your GitHub org/user name.
  projectName: "anshulrgoyal", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
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
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Anshul Goyal. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "resume",
          routeBasePath: "/resume",
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
