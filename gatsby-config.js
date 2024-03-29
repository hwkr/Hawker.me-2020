module.exports = {
  siteMetadata: {
    title: 'Brynn Hawker',
    description: 'The personal portfolio for Brynn Hawker, a designer from Victoria, BC.',
    host: 'hawker.me',
    tracking_id: 'UA-71953845-1',
    themecolor: '#5764c6',
    tag_spec: [
      {
        id: 'uiux',
        icon: 'device-laptop',
        label: 'UI / UX Design',
      },
      {
        id: 'visual',
        icon: 'brush',
        label: 'Illustration',
      },
      {
        id: 'brand',
        icon: 'lightbulb',
        label: 'Branding',
      },
      {
        id: 'development',
        icon: 'code',
        label: 'Development',
      },
      {
        id: 'talk',
        icon: 'messages',
        label: 'Talk',
      },
    ],
    console_cats: [
      String.raw`
%c           *     ,MMM8&&&.            *
%c                MMMM88&&&&&    .
%c               MMMM88&&&&&&&
%c   *           MMM88&&&&&&&&
%c               MMM88&&&&&&&&
%c               "MMM88&&&&&&"
%c                 "MMM8&&&"      *
%c        |\___/|     /\___/\
%c        )     (     )    ~( .              "
%c       =\     /=   =\~    /=
%c         )===(       ) ~ (
%c        /     \     /     \
%c        |     |     ) ~   (
%c       /       \   /     ~ \
%c       \       /   \~     ~/
%c_/\_/\_/\__  _/_/\_/\__~__/_/\_/\_/\_/\_/\_
%c|  |  |  |( (  |  |  | ))  |  |  |  |  |  |
%c|  |  |  | ) ) |  |  |//|  |  |  |  |  |  |
%c|  |  |  |(_(        ((          |  |  |  |
%c|  |  |               \)            |  |  |
%c|         Want to work together?          |
%c
             github.com/hwkr
            twitter.com/bnhwkr
      `,
      'color:#EFF1FA',
      'color:#E7E9F7',
      'color:#DFE2F4',
      'color:#D8DBF2',
      'color:#D0D4EF',
      'color:#C9CDED',
      'color:#C1C6EA',
      'color:#B9BFE7',
      'color:#B2B8E5',
      'color:#AAB1E2',
      'color:#A3AAE0',
      'color:#9BA3DD',
      'color:#939CDA',
      'color:#8C95D8',
      'color:#848ED5',
      'color:#7D87D3',
      'color:#7580D0',
      'color:#6D79CD',
      'color:#6672CB',
      'color:#5E6BC8',
      'color:#5764C6',
      'color:#000000',
    ],
    social_links: [
      {
        href: 'https://www.messenger.com/t/bnhwkr',
        tooltip: 'Chat with me',
        icon: 'social-facebook-messenger-bubble',
      },
      {
        href: 'https://twitter.com/bnhwkr/',
        tooltip: 'Tweet me',
        icon: 'social-twitter',
      },
      {
        href: 'http://www.facebook.com/bnhwkr/',
        tooltip: 'Friend me',
        icon: 'social-facebook',
      },
      {
        href: 'http://github.com/hwkr',
        tooltip: 'Develop with me',
        icon: 'social-github',
      },
      {
        href: 'https://dribbble.com/hwkr',
        tooltip: 'Rebound me',
        icon: 'social-dribbble',
      },
      {
        href: 'http://ux.stackexchange.com/users/77302/brynn',
        tooltip: 'Exchange with me',
        icon: 'social-stack-exchange',
      },
      {
        href: 'https://steamcommunity.com/id/FreckleBytes/',
        tooltip: 'Game with me',
        icon: 'social-steam',
      },
    ],
    chat_url: 'https://www.messenger.com/t/bnhwkr',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [
          {
            resolve: 'gatsby-yaml-full-file',
            options: {
              path: `${__dirname}/src/`,
            },
          },
          'gatsby-yaml-full-markdown',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-less',
  ],
};
