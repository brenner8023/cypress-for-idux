# cypress-for-idux

基于idux组件库封装的Cypress测试指令库

## 主要代码结构

- cypress
  - support
    - commands --------------- 存放所有封装的指令
    - `component.ts` ---------- 组件测试初始化文件
    - `e2e.ts` ------------------ e2e测试初始化文件
    - `index.html` ------------- 初始化模板
  - `cypress.config.ts` --------- cypress配置文件
- src
  - demo -------------------------- 指令用法示例
    - `__tests__` -------------- 存放所有的测试文件
    - `*.vue` ------------------- 存放要测试的组件demo

## 已支持组件

- [x] Button 按钮
- [x] Header 页头
- [x] Tag 标签
- [x] Breadcrumb 面包屑
- [x] Dropdown 下拉菜单
- [x] Menu 导航菜单
- [x] Pagination 分页
- [x] Stepper 步骤条
- [x] Cascader 级联选择
- [x] Checkbox 复选框
- [x] DatePicker 日期选择器
- [x] DateRangePicker 日期范围选择器
- [x] Input 输入框
- [x] InputNumber 数字输入框
- [x] Radio 单选框
- [x] Rate 评分
- [x] Select 选择器
- [x] Slider 滑动输入条
- [x] Switch 开关
- [x] Textarea 文本域
- [x] TimePicker 时间选择器
- [x] TimeRangePicker 时间范围选择器
- [x] Transfer 穿梭框
- [x] TreeSelect 树型选择器
- [ ] Upload 文件上传
- [x] Badge 徽标数
- [x] Card 卡片
- [x] Carousel 轮播图
- [x] Collapse 折叠面板
- [x] Comment 评论
- [x] Empty 空数据
- [ ] List 列表
- [x] Popover 气泡卡片
- [x] Statistic 统计数值
- [x] Table 表格
- [x] Tabs 标签页
- [x] Timeline 时间轴
- [ ] Tooltip 文字提示
- [ ] Tree 树
- [x] Alert 警告提示
- [x] Drawer 抽屉
- [x] Message 全局提示
- [x] Modal 对话框
- [ ] Notification 通知提醒
- [ ] Popconfirm 气泡确认框
- [ ] Progress 进度条
- [ ] Result 结果
- [x] Spin 加载中
- [ ] Anchor 锚点
- [ ] BackTop 回到顶部
- [ ] Watermark 水印
