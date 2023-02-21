import type { Directory } from "@/types/config/directory";

export const directory: Directory[] = [
  {
    title: "基础",
    link: "base/percent.md",
  },
  {
    title: "测试2",
    link: "test.md",
    children: [
      {
        title: "测试2child1",
        link: "test.md",
      },
      {
        title: "测试2child2",
        link: "test.md",
        children: [
          {
            title: "测试2child2-children1",
            link: "test.md",
          },
          {
            title: "测试2child2-children2",
            link: "test.md",
          },
        ],
      },
    ],
  },
];
