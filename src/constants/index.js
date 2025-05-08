import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";


export const navLinks = [
  {
    id: "home",
    title: "首页",
  },
    {
    id: "product",
    title: "产品",
  },
  {
    id: "features",
    title: "指南",
  },
  // {
  //   id: "technology",
  //   title: "技术",
  // },
  {
    id: "clients",
    title: "客户",
  },
  {
    id: "footer",
    title: "关于",
  }

];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "奖励",
    content: "优质的信用卡提供诱人的促销活动和奖品组合。",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100%安全保障",
    content: "我们采取积极措施确保您的信息和交易安全。",
  },
  {
    id: "feature-3",
    icon: send,
    title: "余额转账",
    content: "余额转账信用卡可以为您节省大量利息费用。",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content: "它传递了社会包容与平等的理念，呼吁社会各界共同关注听障人士的就业问题，推动构建更加公平和谐的就业环境",
    name: "韩宝荣",
    title: "西安市盲哑学校特级教师",
    img: people01,
  },
  {
    id: "feedback-2",
    content: "此调研犹如一把利刃，划破信息隔阂，让社会大众直观知晓听障人士就业难的症结所在",
    name: "李玉霞",
    title: "西安市聋人协会常任理事长",
    img: people02,
  },
  {
    id: "feedback-3",
    content: "为企业而言，是打造无障碍办公、科学管理听障员工的指导手册",
    name: "曹瑞华",
    title: "伊然静默咖啡馆高级咖啡师",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "听力障碍人士",
    value: "2780万+",
  },
  {
    id: "stats-2",
    title: "语序调整准确率",
    value: "92%+",
  },
  {
    id: "stats-3",
    title: "听障群体偏好行业深度调研",
    value: "12个",
  },
];

export const footerLinks = [
  {
    title: "产品",
    links: [
      {
        name: "探索",
        link: "#",
      },
      {
        name: "条款与服务",
        link: "#",
      },
      {
        name: "社区",
        link: "#",
      },
    ],
  },
  {
    title: "支持",
    links: [
      {
        name: "帮助中心",
        link: "#",
      },
      {
        name: "合作伙伴",
        link: "#",
      },
      {
        name: "建议",
        link: "#",
      },
    ],
  },
  {
    title: "合作",
    links: [
      {
        name: "新闻通讯",
        link: "#",
      },
      {
        name: "我们的合作伙伴",
        link: "#",
      },
      {
        name: "成为合作伙伴",
        link: "#",
      },
    ],
  },
];
export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];