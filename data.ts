export type FeatureProps = {
  title: string;
  text: string;
  img: string;
};

export const features: FeatureProps[] = [
  {
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    img: "/images/icon-online.svg",
  },
  {
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    img: "/images/icon-budgeting.svg",
  },
  {
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    img: "/images/icon-onboarding.svg",
  },
  {
    title: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    img: "/images/icon-api.svg",
  },
];

export type ArticlesProps = {
  name: string;
  title: string;
  text: string;
  img: string;
  id: number;
};

export const articles = [
  {
    name: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    img: "/images/image-currency.jpg",
    id: 1,
  },
  {
    name: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    img: "/images/image-restaurant.jpg",
    id: 2,
  },
  {
    name: "By Claire Robinson",
    title: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    img: "/images/image-plane.jpg",
    id: 3,
  },
  {
    name: "By Wilson Hutton",
    title: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    img: "/images/image-confetti.jpg",
    id: 4,
  },
];
