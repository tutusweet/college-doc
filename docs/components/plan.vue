<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="week" label="" width="180" />
    <el-table-column prop="Mon.title" label="周一" width="200">
      <template #default="scope">
        <el-dropdown split-button type="primary">
            {{ scope.row.Mon.title }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in scope.row.Mon.details"
                :key="index"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-table-column>
    <el-table-column prop="Tue.title" label="周二" width="200">
      <template #default="scope">
        <el-dropdown split-button type="primary">
            {{ scope.row.Tue.title }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in scope.row.Tue.details"
                :key="index"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-table-column>
    <el-table-column prop="Wed.title" label="周三" width="200">
      <template #default="scope">
        <el-dropdown split-button type="primary">
            {{ scope.row.Wed.title }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in scope.row.Wed.details"
                :key="index"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-table-column>

    <el-table-column prop="Thu.title" label="周四" width="200">
      <template #default="scope">
        <el-dropdown split-button type="primary">
            {{ scope.row.Thu.title }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in scope.row.Thu.details"
                :key="index"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-table-column>
    <el-table-column prop="Fri.title" label="周五" width="200">
      <template #default="scope">
        <el-dropdown split-button type="primary">
            {{ scope.row.Fri.title }}
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="(item, index) in scope.row.Fri.details"
                :key="index"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {
  ElTable,
  ElTableColumn,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElButton,
} from "element-plus"
const tableData = [
  {
    week: "第一周",
    Mon: {
      title: "HTML基础",
      details: [
        "网页设计的基础概念",
        "网页开发的常用工具",
        "常见HTML标签",
        "块级元素和行内元素",
      ],
    },
    Tue: {
      title: "HTML5",
      details: ["HTML5新特性", "HTML5新标签"],
    },
    Wed: {
      title: "CSS常见样式",
      details: ["颜色", "背景", "文本", "字体", "边框"],
    },
    Thu: {
      title: "CSS布局",
      details: ["CSS盒模型", "CSS浮动", "CSS定位"],
    },
    Fri: {
      title: "CSS动画",
      details: ["CSS过渡", "CSS动画", "CSS弹性盒子"],
    },
  },
  {
    week: "第二周",
    Mon: {
      title: "JS基础",
      details: ["JS基础语法", "JS运算符", "JS流程语句"],
    },
    Tue: {
      title: "JS函数",
      details: ["函数的概念", "函数的使用"],
    },
    Wed: {
      title: "JS数组和对象",
      details: [
        "数组的基本操作",
        "数组的常见方法",
        "数组的遍历",
        "对象的基本操作",
      ],
    },
    Thu: {
      title: "DOM和BOM",
      details: ["DOM基本操作", "BOM常见属性", "定时器"],
    },
    Fri: {
      title: "电子简历项目",
      details: ["静态布局技巧", "常见样式练习", "常见标签练习"],
    },
  },
  {
    week: "第三周",
    Mon: {
      title: "Vue基础",
      details: ["Vue简介", "Vue模板语法"],
    },
    Tue: {
      title: "Vue语法",
      details: ["常见指令", "配置选项"],
    },
    Wed: {
      title: "Vue组件",
      details: ["生命周期", "组件的概念", "组件的使用"],
    },
    Thu: {
      title: "Vue生态体系",
      details: ["Vue-CLI", "组件通信", "Vue-Router"],
    },
    Fri: {
      title: "TodoList记事本",
      details: ["静态布局巩固", "组件通信练习", "Vue常见语法练习"],
    },
  },
]
</script>

<style lang="scss" scoped>
:deep(.el-table__header) {
  margin: 0 auto;
}

:deep(.el-table__cell) {
  text-align: center !important;
}

:deep(.el-scrollbar__wrap) {
  text-align: center;
}
</style>
