/* ==========================================================
   项目与技能数据（可扩展入口）
   新增项目：只需在 PROJECTS 数组中添加一条记录，
   页面会自动渲染，无需修改 HTML 结构。
   字段说明：
     name        项目名称
     description 项目简介
     tech        技术栈数组
     date        完成时间
     category    类别（显示为强调色标签）
     image       项目配图地址（可替换为真实截图路径）
   ========================================================== */

const SKILLS = [
  { group: "Web 前端", items: ["HTML / CSS", "JavaScript", "Vue", "响应式布局"] },
  { group: "移动端", items: ["Flutter", "Dart", "Android"] },
  { group: "其他", items: ["Git", "Node.js", "Figma", "MySQL"] }
];

const PROJECTS = [
  {
    name: "校园二手交易平台",
    description: "面向在校学生的二手闲置交易平台，支持商品发布、分类检索、站内私信与订单管理，采用前后端分离架构，覆盖从浏览到成交的完整闭环。",
    tech: ["Vue", "Node.js", "MySQL"],
    date: "2025.10",
    category: "Web 全栈",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=campus%20second-hand%20trading%20web%20platform%20UI%2C%20clean%20modern%20e-commerce%20design%2C%20product%20card%20grid%2C%20warm%20orange%20accent%2C%20light%20interface%2C%20desktop%20web%20screenshot%2C%20high%20quality&image_size=landscape_16_9"
  },
  {
    name: "轻记账 Flutter App",
    description: "一款极简记账应用，支持快速记一笔、月度收支统计图表与预算提醒，使用 Flutter 实现双端一致体验，本地数据离线可用。",
    tech: ["Flutter", "Dart", "SQLite"],
    date: "2025.06",
    category: "移动端",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mobile%20expense%20tracking%20app%20UI%20on%20smartphone%20mockup%2C%20clean%20minimal%20finance%20app%20design%2C%20charts%20and%20card%20list%2C%20soft%20green%20accent%2C%20modern%20iOS%20style%2C%20high%20quality&image_size=landscape_16_9"
  },
  {
    name: "实验室数据可视化大屏",
    description: "课程团队项目中的前端部分：实时展示传感器数据曲线与统计指标，暗色主题配合高对比图表，支持大屏窗口自适应缩放。",
    tech: ["ECharts", "JavaScript", "WebSocket"],
    date: "2025.12",
    category: "数据可视化",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=data%20visualization%20dashboard%20UI%2C%20dark%20theme%20analytics%20big%20screen%2C%20colorful%20line%20and%20bar%20charts%2C%20monitoring%20interface%2C%20modern%20clean%20design%2C%20high%20quality&image_size=landscape_16_9"
  },
  {
    name: "个人作品集网站",
    description: "即你现在看到的这个网站：侧边固定介绍 + 右侧长卷式项目展示，纯原生 HTML / CSS / JavaScript 实现，响应式适配桌面与移动端。",
    tech: ["HTML", "CSS", "JavaScript"],
    date: "2026.09",
    category: "前端开发",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimal%20portfolio%20website%20design%20on%20laptop%20screen%2C%20editorial%20layout%20with%20large%20typography%2C%20beige%20paper%20background%2C%20orange%20accent%2C%20designer%20homepage%2C%20high%20quality&image_size=landscape_16_9"
  }
];
