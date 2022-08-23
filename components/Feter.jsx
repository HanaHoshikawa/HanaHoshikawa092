import Link from "next/link";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import configs from "../daymd.config";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "零基础上手",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner1.png",
    desc: "全面封装API,只需要填写预留的设置选项,就可以快速搭建出个人网站",
  },
  {
    title: "高度自定义",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner2.png",
    desc: "Next.js应用，可用React快速自定义样式，增加新功能，预留多种主题",
  },
  {
    title: "低代码迅速部署上线",
    file: "https://jetzihan-img.oss-cn-beijing.aliyuncs.com/blog/banner3.png",
    desc: "不需要任何环境准备，不需要写代码，快速自动化部署上线",
  },
];

function Feature({ file, title, desc }) {
  return (
    <div className="flex flex-col hover:opacity-70 transition duration-500 ease-in-out">
      <div className="text-center">
        <img src={file} alt="banner" />
      </div>
      <div className="text-center pl-25 pr-25">
        <h3 className="text-lg">{title}</h3>
        <p className="text-center  text-sm">{desc}</p>
      </div>
    </div>
  );
}

export function Feter() {
  return (
    <div>
      <div className="w-screen h-10 flex justify-center items-center">
        <span className="mb-20 w-30 text-center font-black largetext">
          Daymd's Features
        </span>
      </div>
      <div className="gap-x-2.5  w-screen mb-10  h-30 ">
        <div className="flex flex-row flex-nowrap auto-cols-max">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}
