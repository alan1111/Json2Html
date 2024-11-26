## json2html-react 库停止更新公告
尊敬的各位用户：

    在此，我们怀着万分遗憾与诚挚的歉意告知大家，由于我们团队经过深入探索与研发，现已推出了更具创新性和卓越性能的替代方案，故而决定对 json2html-react 库停止更新维护。
我们深知，json2html-react 库在过去的日子里承蒙众多用户的信任与选用，为大家在项目开发过程中贡献了一份力量，对此我们深表感激。然而，技术的发展日新月异，为了能给大家带来更优质、高效且便捷的开发体验，我们不得不做出这一艰难的决定。

    但请大家放心，我们为此次的改变精心筹备了全新的方案，它将为大家开启全新的开发视野，带来诸多令人惊喜的特性：
一、真正的零编程体验
新方案实现了前所未有的突破，无需您编写繁杂的代码，即可轻松完成页面的创建与布局。无论您是经验丰富的开发者，还是刚刚入门的新手，都能在零编程的环境下快速实现自己心中理想的页面效果，大大节省了开发时间与精力，让您将更多的心思聚焦在业务逻辑与创意构思上。
二、高度的灵活性与可定制性
尽管无需编程，但新方案绝未牺牲灵活性与定制性。它提供了丰富多样的预设模板与组件，您可以根据具体项目需求，轻松对页面的各个元素进行个性化调整与定制。从页面风格、布局结构到元素样式，一切皆可按照您的意愿随心变换，确保您打造出独一无二且贴合项目需求的完美页面。
三、卓越的性能与兼容性
在追求便捷的同时，新方案在性能与兼容性方面也表现卓越。它经过了严格的测试与优化，能够在各种主流浏览器与设备上稳定运行，确保您的页面无论在何种环境下都能流畅展示，为用户提供优质的浏览体验。同时，其高效的渲染机制能够快速处理大量数据，即使面对复杂的页面结构与丰富的内容，也能轻松应对，毫无压力。

我们诚挚地邀请各位用户前往我们的[官方网站](https://i-simple.fun/)，亲身体验新方案所带来的这些令人惊叹的特性，一同见证零编程实现页面奇迹的精彩瞬间。

再次为给大家带来的不便深表歉意，我们衷心希望大家能够理解我们的决定，并期待新方案能为您的项目开发带来更多的便利与惊喜。
感谢大家一直以来对我们的支持与厚爱！

-- 小火球

## 文档
[英文](https://github.com/alan1111/json2html-react/blob/main/README.md)｜[中文](https://github.com/alan1111/json2html-react/blob/main/README_CN.md)

## 简介
json2html-react主要功能是：用于将json渲染成页面，包含页面的动作action，组件之间的联动linkage。

## 使用说明

1. 下载json2html-react：
```bash
npm i -S json2html-react
# or
yarn add json2html-react
# or
pnpm i -S json2html-react
```
2. 引用：

```bash
import { useState, useEffect } from 'react';
import components from '../utils/components'
import actions from '../utils/actions'
import { RenderJSON, registerAction, registerComponent } from 'json2html-react';
import data from '../examples/mock.json'

export default function DynamicLinkage() {
  const [renderData, setRenderData] = useState(null);

  // 注册页面定制化的action
  useEffect(() => {
    registerAction({
      onSubmit: async (d, {form}) => {
        console.log('json数据：', d);
        try {
          const values = await form.validateFields();
          console.log(values);
        } catch (errorList) {
          errorList.forEach(({ name, errors }) => {
            // Do something...
          });
        }
      },
    });
  }, []);

  useEffect(() => {
    // 注册通用actions
    registerAction(actions)
    // 注册通用components
    registerComponent(components)
  }, [])

  useEffect(() => {
    // json数据由后端保存，这边用timeout模拟请求数据
    const timer = setTimeout(() => {
      setRenderData(data)
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (!renderData) {
    return null;
  }

  const options = {
    initialValues: {}, // 非必须！初始化form值。
    renderJson: renderData, // 必须！待渲染的json数据
    css: '', 非必须！主要用于全局css样式的引入，可以添加class/id等。
    events: { //非必须！form组件绑定事件
      onChange: (v, opt) => {
        const {form, pathName}  = opt || {};
        console.log('表单变化的key:', pathName);
        console.log('表单变化的value:', v);
        console.log('表单form:', form);
        console.log('通过form获取值', form.getFieldValue(pathName));
      }
    }
  }

  return (<RenderJSON {...options} />)
}

```
## json数据结构字段说明：

```bash
{
  // 常规属性
  widget: String, // 用于作组件映射
  jChildren: Array | Object, // 用于渲染子组件
  jProps: Object, // 子组件属性透传
  action: Array | Object, // 用于给组件绑定onClick事件
    {
      type: String, // 用于action映射
      data: Any, // 作为传入action数据
    }
  
  // 表单属性
  dataBind: String, // 当前组件对应的form key值，也是path的一部分。
  isFormField: Boolean // 为true时，表示当前组件为表单组件
  rules: Array, // 表单规则
  linkage: String, // 联动脚本，返回Object会以属性方式传入子组件；返回空则隐藏子组件。
  validateTrigger： String, // 当前组件校验时机，onChange | onBlur 等，默认onBlur，即失焦时候校验。
}
```

## 表单

目前所有关于表单form的内容，json2html都已处理好了。会将form对象暴露给events和action。具体form属性了解，可参考[rc-field-form](https://www.npmjs.com/package/rc-field-form)

## 源码解读

推荐关注公众号："小火球烧屁股"。

嫌烦？不要紧。直接上链接： 

[json2html-react 核心代码源码解读](https://mp.weixin.qq.com/s?__biz=MzkzMTQ1NDU4Nw==&mid=2247484271&idx=1&sn=f8230fba87efed9a997a7f53c1198508&chksm=c26b887bf51c016d7f6085fee855c69596932c6af8d2478362caa128df25350a353f74daa40c&token=1854349548&lang=zh_CN#rd)

[json2html实战](https://mp.weixin.qq.com/s?__biz=MzkzMTQ1NDU4Nw==&mid=2247484526&idx=1&sn=ba82a0a3abd427d25cd0c96b3ac0a87e&chksm=c26b8f7af51c066c44336256ab1e7069dc968747ab4949d46cda73f56cf58377462db05124ae&token=1531096240&lang=zh_CN#rd)

## 例子🌰查看
1. clone项目：
```bash
git clone https://github.com/alan1111/json2html-react.git
```

2. 安装依赖： 
```bash
npm i
```

3. 启动应用：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. 访问http://location:3000即可。

## 还有疑惑？

[欢迎随时联系我](https://i-simple.fun/contactUs)

