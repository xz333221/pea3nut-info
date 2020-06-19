<template>
  <div>
    <article-header title="个人简历"/>
    <!--        <article-header title="个人简历" :description="headerDescription" />-->
    <profile-card :information="cardInfo">
      <radar-img
              title="Dominance (D), Influence (I), Steadiness (S), and Conscientiousness (C)."
              :radar-value="JobRadarInfo"
      ></radar-img>
    </profile-card>
    <block-collapsible lang="md" title="求职意向">
      Web前端应用设计开发、JavaScript应用开发。

      vue项目开发
    </block-collapsible>
    <!--        <short-night-timeline :data="jobResume" title="职业履历" />-->
    <block-collapsible lang="md" title="技术剖面" class="skill-profile">

      <radar-img :radar-value="SkillRadarInfo"></radar-img>

      - **扎实稳固**的JavaScript：<br/>曾不使用框架的情况下，使用canvas独自完成数字货币交易k线图及深度图制作
      - **轻车熟路**的Vue：<br/>
        熟练使用Vue.js全家桶及相关UI框架，熟练使用nuxt服务端渲染开发

      - 其他技术储备：<br/>
        小程序开发、uni-app开发、apiclude开发、vue+koa2+sequelize+mysql+linux全栈开发

    </block-collapsible>
    <block-justify title="工作">
      <block-justify-row lang="md" title="尚知科技">
        2019.4 - 2020.6 前端工程师

        ---

        - 主要负责公司产品前端部分的项目架构设计、公共组件编写、日常开发维护

      </block-justify-row>
      <block-justify-row lang="md" title="凯拓软件">
        2018.1 - 2019.2 前端工程师

        ---

        - 负责公司各项目前端页面的编写及与后台接口的对接工作


      </block-justify-row>
      <block-justify-row lang="md" title="天津滨海迅腾科技">
        2017.8 - 2017.11 研发工程师

        ---

        - 完成微信小程序书稿的编写及资料包的整理，包括教学大纲、ppt、视频录制等
        审查书稿中的错误


      </block-justify-row>
    </block-justify>
    <block-collapsible lang="md" title="自我评价" :folded="true" v-if="false">
      好胜心强，崇尚竞争。喜欢第一名的畅快淋漓，也不讨厌失败后的惨痛教训！

      互联网的真爱粉，开源运动的践行者。一直在尽自己绵薄之力让互联网变的更好：开源、发Pull request、勘误、翻译MDN。

      富有童心，积极乐观。永远保持一颗好奇心不断向前，擅长融入新环境，交际虽略显笨拙，但却真实。
    </block-collapsible>
    <block-collapsible lang="md" title="校园经历" v-if="false">

      1. 2014年9月考入青岛理工大学网络工程专业
      2. 大一上学期：
      - 创建技术交流社团“Web开发协会”，担当会长
      3. 大一下学期：
      - 注册公司“青岛卓然独立网络科技有限公司”，担当企业法人
      - 创建“Nutjs团队”，获批入驻“青岛理工大学创业孵化基地”
      4. 大二上学期：
      - 使用WordPress搭建个人博客：[blog.pea3nut.com](http://blog.pea3nut.com/)
      - 将协会推广至山东科技大学、中国石油大学，协会总人数100+
      - 担任Mozilla Firefox校园大使
      5. 大二下学期：
      - 获火狐2015年秋季学期优秀校园大使称号
      - 发起“青理助手”创业项目，获“创青春挑战杯大赛”校级金奖
      - 个人博客累计发表50篇文章
      6. 大三上学期：
      - 获5000元创新创业奖学（5%）
      7. 大三下学期：
      - 取得360前端星计划参与资格，顺利毕业（60/1000）
      - GitHub开源项目Pxer，100+ Star达成！
      - 取得Mozilla Beijing Web前端实习Offer
      8. 大四上学期：
      - Mozilla Beijing实习
      - 斩获百度2017校园秋季招聘Special Offer
      9. 大四下学期
      - 百度度秘团队实习
      - 校优秀毕业论文一等奖，顺利毕业
    </block-collapsible>
    <block-justify title="技能">
      <block-justify-row lang="md" title="HTML+CSS">
        扎实稳固的HTML+CSS基础，熟练完成各种动态效果的实现。

        熟练使用flex布局。

        熟练使用Sass等css扩展语音
      </block-justify-row>
      <block-justify-row lang="md" title="Java Script">
        游刃有余的JavaScript。

        熟悉ES6标准。

        熟悉Vue.js生态，熟练使用Vue全家桶，理解MVVM数据驱动思想。
      </block-justify-row>
      <block-justify-row lang="md" title="其他">
        常用的算法

        熟练使用Git
      </block-justify-row>
    </block-justify>
    <block-justify title="项目">
      <block-justify-row lang="md" title="Goldex">
        GOLDEX金网

        负责部分：网站首页，合约行情，合约交易中的合约列表、买卖盘、最新成交、k线部分，kyc实名认证部分，理财部分

        - nuxt的使用
        - tradingview图表库的使用
        - websocket数据处理与分发
        - vue组件设计

        项目地址[Goldex](https://www.goldex.cc)
      </block-justify-row>
      <block-justify-row lang="md" title="天津工业大学60周年校庆特别版">

        简介：天津工业大学60周年校庆官方指定唯一报名通道，其功能主要有点赞、直播、点灯活动、捐赠、资讯等
        负责部分：前端所有页面的编写、接口的对接、功能实现方案、项目的上线后的维护及版本更新

        项目技术栈：apiclude+vue+thinkPHP

        - apiclude相关api使用
        - 七牛直播相关api使用及功能实现
        - aMap高德地图模块相关api使用及功能实现
        - 微信支付模块、微信、qq、新浪模块的分享功能实现
        - html2canvas海报生成
        - 极光推送相关配置

        项目地址 应用商店搜索
      </block-justify-row>
      <block-justify-row lang="md" title="个人项目">
        最初的想法是仿Infinity，然后添加了一些自己的功能，目前网站正在建设中

        - 前端使用的vue-admin框架
        - 后台使用的koa2，使用Nginx做的代理
        - ORM框架使用的sequelize
        - mysql的数据库
        - CentOS7的阿里云服务器

        项目地址[xz333221](http://39.105.188.48/) (随意注册使用)
      </block-justify-row>
    </block-justify>

<!--    <block-collapsible lang="md" title="其他链接" class="other-link po-print-hidden">-->

<!--      - [花生PeA in Github](https://github.com/pea3nut)-->
<!--      - [花生PeAの博客](http://blog.pea3nut.com)-->
<!--      - [花生PeA in 掘金](https://juejin.im/user/58fed8a7a22b9d0065b13e30)-->

<!--    </block-collapsible>-->
  </div>
</template>

<script>
import { formatDate } from 'pea-scripts/dist/function.browser.js'
import { jobResume } from '../../config/timeline'

export default {
  extends: require('@/components/abstract/page.vue'),
  name: 'page-job',
  data() {
    return {
      jobResume
    }
  },
  computed: {
    cardInfo() {
      var reArr = [{
        label: '姓名',
        text: '徐泽'
      }, {
        label: '性别',
        text: `男`
      }, {
        label: '出生日期',
        text: `1994.10.1`
      }, {
        label: '户口',
        text: '天津市 滨海新区',
        print: false
      }, {
        label: '毕业院校',
        text: '天津工业大学（2013-2017）'
      }, {
        label: '所学专业',
        text: '机械工程'
      },
          // {
          //   label: '婚姻状况',
          //   text: this.Info['marriage'],
          //   print: false
          // }, {
          //   label: '政治面貌',
          //   text: '共青团员',
          //   print: false
          // },
          {
          label: '手机号',
          text: '13110025936'
        }, {
          label: 'E-mail',
          text: '569552263@qq.com'
        },
        //   {
        //   label: '希望地区',
        //   text: '互联网一二线城市',
        //   print: false
        // },
          {
          label: '现状态',
          text: '求职中',
          print: false
        }]
      return reArr
    },
    headerDescription() {
      return [{
        label: '下载',
        text: `
                    <a href="/static/resource/resume/pea3nut-web-resume.pdf" target="_blank">正常版</a>
                    /
                    <a href="/static/resource/resume/pea3nut-web-image-resume.png" target="_blank">单页图片版</a>
                `
      }, {
        label: '最后更新',
        text: formatDate(this.LastUpdateTime, { hasTime: false, fillZeroOfDate: true })
      }]
    }
  },
  created() {
    console.log('job')
  }
}
</script>
