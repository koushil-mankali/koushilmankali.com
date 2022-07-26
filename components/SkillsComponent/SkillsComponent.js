import { useState } from "react";

import css from "./SkillsComponent.module.css";

import javascriptImg from '../../public/Images/Skills/javascript.svg'
import reactjsImg from '../../public/Images/Skills/reactjs.svg'
import nextjsImg from '../../public/Images/Skills/nextjs.png'
import reduxImg from '../../public/Images/Skills/redux.svg'
import html5Img from '../../public/Images/Skills/html5.svg'
import css3Img from '../../public/Images/Skills/css3.svg'
import sassImg from '../../public/Images/Skills/sass.png'
import bootstrapImg from '../../public/Images/Skills/bootstrap.svg'
import materialuiImg from '../../public/Images/Skills/materialui.svg'
import reactrouterImg from '../../public/Images/Skills/reactrouter.png'


import nodejsImg from '../../public/Images/Skills/nodejs.svg'
import expressjsImg from '../../public/Images/Skills/expressjs.svg'
import mongodbImg from '../../public/Images/Skills/mongodb.svg'
import nestjsImg from '../../public/Images/Skills/nestjs.png'
import mongooseImg from '../../public/Images/Skills/mongoose.png'


import jwtImg from '../../public/Images/Skills/jwt.png'
import githubImg from '../../public/Images/Skills/github.png'
import gitImg from '../../public/Images/Skills/git.svg'
import vitejsImg from '../../public/Images/Skills/vitejs.svg'
import npmImg from '../../public/Images/Skills/npm.svg'
import yarnImg from '../../public/Images/Skills/yarn.png'
import vscodeImg from '../../public/Images/Skills/vscode.png'
import postmanImg from '../../public/Images/Skills/postman.png'

import jestImg from '../../public/Images/Skills/jest.png'

import SkillCard from '../Cards/SkillCard/SkillCard'
import GreyBtn from "../Button/GreyBtn/Button";

const SkillsComponent = () => {
  const [active, setActive] = useState({
    all: true,
    frontend: false,
    backend: false,
    tools: false,
    testing: false
  });

  const data = [
    {
      imgSrc: javascriptImg,
      name: "Javascript",
      type: "frontend",
    },
    {
      imgSrc: reactjsImg,
      name: "React Js",
      type: "frontend",
    },
    {
      imgSrc: nextjsImg,
      name: "Next Js",
      type: "frontend",
    },
    {
      imgSrc: reduxImg,
      name: "Redux",
      type: "frontend",
    },
    {
      imgSrc: html5Img,
      name: "HTML",
      type: "frontend",
    },
    {
      imgSrc: css3Img,
      name: "CSS",
      type: "frontend",
    },
    {
      imgSrc: sassImg,
      name: "SASS",
      type: "frontend",
    },
    {
      imgSrc: bootstrapImg,
      name: "Bootstrap",
      type: "frontend",
    },
    {
      imgSrc: materialuiImg,
      name: "Material UI",
      type: "frontend",
    },
    {
      imgSrc: reactrouterImg,
      name: "React Router",
      type: "frontend",
    },
    {
      imgSrc: nodejsImg,
      name: "Node Js",
      type: "backend",
    },
    {
      imgSrc: expressjsImg,
      name: "Express Js",
      type: "backend",
    },
    {
      imgSrc: nestjsImg,
      name: "Nest Js",
      type: "backend",
    },
    {
      imgSrc: mongodbImg,
      name: "MongoDB",
      type: "backend",
    },
    {
      imgSrc: mongooseImg,
      name: "Mongoose",
      type: "backend",
    },
    {
      imgSrc: jwtImg,
      name: "JWT",
      type: "tools",
    },
    {
      imgSrc: gitImg,
      name: "GIT",
      type: "tools",
    },
    {
      imgSrc: githubImg,
      name: "Gighub",
      type: "tools",
    },
    {
      imgSrc: vitejsImg,
      name: "Vite Js",
      type: "tools",
    },
    {
      imgSrc: npmImg,
      name: "NPM",
      type: "tools",
    },
    {
      imgSrc: yarnImg,
      name: "Yarn",
      type: "tools",
    },
    {
      imgSrc: vscodeImg,
      name: "VSCode",
      type: "tools",
    },
    {
      imgSrc: postmanImg,
      name: "Postman",
      type: "tools",
    },
    {
      imgSrc: jestImg,
      name: "Jest",
      type: 'testing',
    },
  ];

  const handleBtn = (key) => {
    setActive((val) => {
      return { [val]: false, [key]: true };
    });
  };

  let cardData = "";

  if(active.all){
    cardData = data?.filter((item) => {
      return item;
    })
  } else if (active.frontend){
    cardData = data?.filter((item) => {
      if(item.type === "frontend"){
        return item;
      }
    })
  } else if (active.backend){
    cardData = data?.filter((item) => {
      if(item.type === "backend"){
        return item;
      }
    })
  } else if (active.testing){
    cardData = data?.filter((item) => {
      if(item.type === "testing"){
        return item;
      }
    })
  } else if (active.tools){
    cardData = data?.filter((item) => {
      if(item.type === "tools"){
        return item;
      }
    })
  }

  return (
    <div className={css.outerDiv} id='skills'>
      <div className={css.innerDiv}>
        <div className={css.ttl}>
          My <span className={css.ttlS}>Skills</span>
        </div>
        <div className={css.btns}>
          <GreyBtn
            txt="All"
            onClick={() => handleBtn("all")}
            isActive={active?.all}
          />
          <GreyBtn
            txt="Frontend"
            onClick={() => handleBtn("frontend")}
            isActive={active?.frontend}
          />
          <GreyBtn
            txt="Backend"
            onClick={() => handleBtn("backend")}
            isActive={active?.backend}
          />
          <GreyBtn
            txt="Tools"
            onClick={() => handleBtn("tools")}
            isActive={active?.tools}
          />
          <GreyBtn
            txt="Testing"
            onClick={() => handleBtn("testing")}
            isActive={active?.testing}
          />
        </div>
        <div className={css.bdy}>
          {cardData?.map((item, id) => {
            return <SkillCard key={id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
