new nomui.Component({
  reference: document.getElementById("app"),
  children: [
    {
      component: "Flex",
      rows: [
        {
          component: "Flex",
          //justify: 'between',
          align: "center",
          classes: { "personal-header": true },
          attrs: {
            style: {
              height: "170px",
              backgroundColor: "rgba(244, 246, 250, 1)",
              padding: "0 36px",
            },
          },
          cols: [
            {
              component: "Avatar",
              icon: {
                component: "Icon",
                type: "user",
                attrs: {
                  style: {
                    fontSize: "60px",
                  },
                },
              },
              attrs: {
                style: {
                  width: "78px",
                  height: "78px",
                  marginRight: "14px",
                },
              },
            },
            {
              grow: true,
              children: {
                component: "Flex",
                attrs: {
                  style: { width: "80%" },
                },
                rows: [
                  {
                    children: "Mingzhi",
                    attrs: {
                      style: {
                        fontSize: "24px",
                        color: "rgba(43, 126, 251, 1)",
                      },
                    },
                  },
                  {
                    children: "信息完整度: 20%",
                    attrs: {
                      style: {
                        fontSize: "12px",
                        color: "rgba(43, 126, 251, 1)",
                      },
                    },
                  },
                  {
                    component: "Progress",
                    percent: 20,
                    grow: true,
                    showInfo: false,
                  },
                ],
              },
            },
            {
              children: "去完善",
              attrs: {
                style: {
                  width: "88px",
                  height: "32px",
                  borderRadius: "16px",
                  color: "#2B7EFB",
                  border: "1px solid #2B7EFB",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            },
          ],
        },
        // {
        //   component: "Flex",
        //   classes: {
        //     nav: true,
        //   },
        //   align: "center",
        //   cols: [
        //     {
        //       children: "我的项目",
        //       classes: {
        //         "nav-active": true,
        //         "nav-item": true,
        //       },
        //       attrs: {
        //         style: { marginLeft: "36px" },
        //       },
        //     },
        //     {
        //       children: "我的组织",
        //       classes: {
        //         "nav-item": true,
        //       },
        //     },
        //     {
        //       children: "我的消息",
        //       classes: {
        //         "nav-item": true,
        //       },
        //       badge: {
        //         number: 1000,
        //         overflowCount: 999,
        //       },
        //     },
        //     {
        //       children: "我的资料",
        //       classes: {
        //         "nav-item": true,
        //       },
        //     },
        //   ],
        // },
        {
          component: "Tabs",
          classes: { 'personal-tabs': true },
          ref: (c) => {
            tabRef = c;
          },
          uistyle: "line",
          tabs: [
            {
              key: "my-project",
              item: { text: "我的项目" },
              panel: {
                /**
                 * -------------------------- 我的项目 ----------------------------------
                 */
                children: {
                  component: "Panel",
                  header: false,
                  uistyle: "plain",
                  classes: { "personal-panel": true },
                  body: {
                    component: "Rows",
                    items: [
                      {
                        component: "Flex",
                        gap: "small",
                        classes: { "form-flex": true },
                        cols: [
                          {
                            component: "Group",
                            attrs: { style: { width: "100%" } },
                            // inline: true,
                            fields: [
                              {
                                component: "Textbox",
                                label: "项目名",
                                placeholder:
                                  "可输入项目名称、方案号关键字进行搜索",
                                labelWidth: 80,
                                span: 4,
                              },
                              {
                                component: "Select",
                                label: "项目类型",
                                labelWidth: 90,
                                span: 4,
                              },
                              {
                                component: "Select",
                                label: "项目状态",
                                labelWidth: 90,
                                span: 4,
                              },
                            ],
                          },
                          {
                            justify: "center",
                            gap: "medium",
                            align: "center",
                            span: 3,
                            cols: [
                              {
                                component: "Button",
                                text: "搜索",
                                type: "primary",
                                onClick: () => {},
                              },
                              {
                                component: "Button",
                                text: "重置",
                                onClick: () => {},
                              },
                              {
                                component: "Button",
                                type: "link",
                                text: "更多条件↓",
                                onClick: () => {},
                              },
                            ],
                          },
                        ],
                      },
                      {
                        component: "Grid",
                        striped: true,
                        columns: [
                          {
                            field: "name",
                            key: "name",
                            title: "标题",
                            width: 200,
                          },
                          {
                            field: "projecttype",
                            key: "projecttype",
                            title: "项目类型",
                          },
                          {
                            field: "registerType",
                            key: "registerType",
                            title: "销量",
                          },
                          {
                            field: "fanganhao",
                            key: "fanganhao",
                            title: "方案号",
                          },
                          {
                            field: "zhongxinleibie",
                            key: "zhongxinleibie",
                            title: "中心类别",
                          },
                          {
                            field: "guojixiangmu",
                            key: "guojixiangmu",
                            title: "是否为国际项目",
                          },
                          {
                            field: "canyuzhognxin",
                            key: "canyuzhognxin",
                            title: "参与中心",
                          },
                          {
                            field: "cro",
                            key: "cro",
                            title: "申办方",
                          },
                          {
                            field: "status",
                            key: "status",
                            title: "项目状态",
                          },
                          {
                            field: "submitStatus",
                            key: "submitStatus",
                            title: "提交状态",
                            cellRender: (args) => {
                              // 根据状态展示字体颜色和内容
                              return {
                                tag: "span",
                                children: `${
                                  args.index === 0 ? "待提交" : "已提交"
                                }`,
                                styles: {
                                  text: `${
                                    args.index === 0 ? "yellow" : "green"
                                  }`,
                                },
                              };
                            },
                          },
                          {
                            field: "process",
                            key: "process",
                            title: "伦理审查进度",
                          },
                          {
                            field: "oper",
                            key: "oper",
                            title: "操作",
                            width: 200,
                            cellRender: (args) => {
                              // 根据状态展示字体颜色和内容
                              return {
                                component: "Flex",
                                cols: [
                                  {
                                    component: "Button",
                                    type: "link",
                                    text: "编辑",
                                    onClick: () => {},
                                  },
                                  {
                                    component: "Button",
                                    type: "link",
                                    text: "意向中心",
                                    onClick: () => {},
                                  },
                                  {
                                    component: "Button",
                                    type: "text",
                                    text: "删除",
                                    danger: true,
                                    onClick: () => {},
                                  },
                                ],
                              };
                            },
                          },
                        ],
                        data: [
                          {
                            name: "测试项目",
                            projecttype: "项目类型",
                            registerType: "注册类临床研究",
                            fanganhao: "0001",
                            zhongxinleibie: "多中心",
                            guojixiangmu: "国内",
                            canyuzhognxin: "3",
                            cro: "申办方名字",
                            status: "项目状态",
                            submitStatus: "提交状态",
                            process: "审查进度",
                          },
                          {
                            name: "测试项目",
                            projecttype: "项目类型",
                            registerType: "注册类临床研究",
                            fanganhao: "0001",
                            zhongxinleibie: "多中心",
                            guojixiangmu: "国内",
                            canyuzhognxin: "3",
                            cro: "申办方名字",
                            status: "项目状态",
                            submitStatus: "提交状态",
                            process: "审查进度",
                          },
                        ],
                      },
                      {
                        component: "Pager",
                        totalCount: 100,
                        texts: {
                          prev: "<",
                          next: ">",
                        },
                        compact: true,
                        itemsSort: ["count", "pages", "sizes"],
                        onPageChange: function (e) {},
                      },
                    ],
                  },
                },
              },
            },
            {
              key: "my-orgn",
              item: { text: "我的组织" },
              panel: {
                /**
                 * ------------------------      我的组织       ---------------------------------------
                 */
                children: {
                  component: "Panel",
                  header: false,
                  uistyle: "plain",
                  classes: { "personal-panel": true },
                  styles: { padding: 2 },
                  body: {
                    component: "Rows",
                    items: [
                      {
                        component: "Grid",
                        striped: true,
                        columns: [
                          {
                            field: "name",
                            key: "name",
                            title: "组织名称",
                            cellRender: (args) => {
                              // 根据状态展示字体颜色和内容
                              let items = [
                                {
                                  tag: "div",
                                  styles: {
                                    text: ["primary"],
                                  },
                                  children: "组织名称",
                                },
                              ];
                              if (args.rowData.isDefault) {
                                items.push({
                                  component: "Tag",
                                  text: "默认",
                                  color: "blue",
                                });
                              }
                              return {
                                component: "Cols",
                                items,
                              };
                            },
                          },
                          {
                            field: "oper",
                            key: "oper",
                            title: "操作",
                            width: 250,
                            cellRender: (args) => {
                              if (args.rowData.isDefault) {
                                return;
                              }
                              // 根据状态展示按钮
                              return {
                                component: "Button",
                                type: "link",
                                text: "设为默认",
                                onClick: () => {},
                              };
                            },
                          },
                        ],
                        data: [
                          {
                            name: "测试项目",
                            isDefault: true,
                          },
                          {
                            name: "测试项目",
                            isDefault: false,
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
            {
              key: "my-news",
              item: { text: "我的消息",
                badge: {
                  number: 12,
                  overflowCount: 99,
                },
              },
              panel: {
                /**
                 * ---------------------------- 我的消息 ---------------------------------
                 */
                children:   {
                  component: "Panel",
                  header: false,
                  uistyle: "plain",
                  classes: { "personal-panel": true },
                  body: {
                    component: "Rows",
                    items: [
                      {
                        component: "Tabs",
                        uistyle: "pill",
                        tabs: [
                          {
                            item: { text: "咨询" },
                            panel: {
                              children: [
                                {
                                  component: "Grid",
                                  striped: true,
                                  columns: [
                                    { field: "ID", key: "ID", title: "会话ID" },
                                    {
                                      field: "customer",
                                      key: "customer",
                                      title: "接待客服",
                                    },
                                    {
                                      field: "startTime",
                                      key: "startTime",
                                      title: "会话开始时间",
                                    },
                                    {
                                      field: "endTime",
                                      key: "endTime",
                                      title: "会话结束时间",
                                    },
                                    { field: "rate", key: "rate", title: "评分" },
                                    { field: "remark", key: "remark", title: "备注" },
                                    {
                                      field: "oper",
                                      key: "oper",
                                      title: "操作",
                                      width: 250,
                                      cellRender: (args) => {
                                        return {
                                          component: "Button",
                                          type: "link",
                                          text: "查看",
                                          onClick: () => {},
                                        };
                                      },
                                    },
                                  ],
                                  data: [
                                    {
                                      ID: "12312312",
                                      customer: "12312312",
                                      startTime: "12312312",
                                      endTime: "12312312",
                                      rate: "12312312",
                                      remark: "12312312",
                                    },
                                    {
                                      ID: "12312312",
                                      customer: "12312312",
                                      startTime: "12312312",
                                      endTime: "12312312",
                                      rate: "12312312",
                                      remark: "12312312",
                                    },
                                  ],
                                },
                                {
                                  component: "Pager",
                                  totalCount: 100,
                                  texts: {
                                    prev: "<",
                                    next: ">",
                                  },
                                  compact: true,
                                  itemsSort: ["count", "pages", "sizes"],
                                  onPageChange: function (e) {},
                                },
                              ],
                            },
                          },
                          {
                            item: {
                              text: "系统通知",
                              badge: {
                                number: 12,
                                overflowCount: 99,
                              },
                            },
                            panel: {
                              children:
                                "另外一个表格和分页，也可使用同一个Grid，通过切换 tabsRef.panel控制展示",
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
            {
              key: "my-info",
              item: { text: "我的资料" },
              panel: {
                /**
                 * ---------------------------- 我的资料 ---------------------------------
                 */
                children: {
                  component: "Panel",
                  header: false,
                  uistyle: "plain",
                  classes: { "personal-panel": true, "panel-info": true },
                  styles: { padding: 2 },
                  body: {
                    component: "Rows",
                    items: [
                      {
                        component: "Tabs",
                        uistyle: "pill",
                        tabs: [
                          {
                            item: { text: "个人信息" },
                            panel: {
                              children: [
                                {
                                  component: "Group",
                                  classes: { "group-info": true },
                                  ref: (c) => {
                                    group = c;
                                  },
                                  fieldDefaults: { span: 6, labelAlign: "top" },
                                  value: {
                                    nickname: "huzj",
                                    rate: "LV3（积分：20）",
                                    tags: [1, 2],
                                  },
                                  fields: [
                                    {
                                      component: "StaticText",
                                      name: "nickname",
                                      disabled: true,
                                      label: "用户名",
                                    },
                                    {
                                      component: "StaticText",
                                      name: "rate",
                                      disabled: true,
                                      label: "等级（积分）",
                                    },
                                    {
                                      component: "Textbox",
                                      name: "name",
                                      label: "姓名",
                                      required: true,
                                    },
                                    {
                                      component: "RadioList",
                                      name: "gender",
                                      label: "性别",
                                      options: [
                                        { text: "男", value: 0 },
                                        { text: "女", value: 1 },
                                      ],
                                    },
                                    {
                                      component: "Textbox",
                                      name: "mobild",
                                      label: "手机号",
                                      required: true,
                                    },
                                    {},
                                    {
                                      component: "Textbox",
                                      name: "email",
                                      label: "Email",
                                      required: true,
                                      rules: [
                                        { type: "email", message: "Email 格式不正确" },
                                      ],
                                    },
                                    {
                                      component: "Textbox",
                                      name: "tel",
                                      label: "联系电话",
                                      placeholder: "请输入联系电话",
                                    },
                                    {
                                      component: "Textbox",
                                      name: "tel",
                                      label: "职称/职位",
                                      placeholder:
                                        "可用英文”,”隔开录入多个职位（如：主任医师，教授）",
                                    },
                                    {
                                      component: "Textbox",
                                      name: "unit",
                                      label: "工作单位",
                                      placeholder: "请输入工作单位",
                                    },
        
                                    {
                                      component: "DatePicker",
                                      name: "birthDate",
                                      label: "出生年月",
                                    },
                                    {
                                      component: "Select",
                                      name: "city",
                                      label: "学历",
                                      value: 3,
                                      options: [
                                        { text: "研究生", value: 1 },
                                        { text: "本科", value: 2 },
                                        { text: "大专", value: 3 },
                                      ],
                                    },
                                    {
                                      component: "Group",
                                      name: "address",
                                      label: "所在省市",
                                      flatValue: true,
                                      inline: true,
                                      fields: [
                                        {
                                          component: "Select",
                                          name: "province",
                                          attrs: {
                                            style: {
                                              width: "35%",
                                            },
                                          },
                                          placeholder: "省份",
                                          options: [
                                            { text: "湖南", value: 1 },
                                            { text: "广东", value: 2 },
                                          ],
                                        },
                                        {
                                          component: "StaticText",
                                          value: "-",
                                        },
                                        {
                                          component: "Select",
                                          name: "city",
                                          attrs: {
                                            style: {
                                              width: "35%",
                                            },
                                          },
                                          placeholder: "城市",
                                          options: [
                                            { text: "长沙", value: 1 },
                                            { text: "广州", value: 2 },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      component: "Textbox",
                                      name: "address",
                                      label: "地址",
                                      placeholder: "请输入地址",
                                    },
                                    {
                                      component: "CheckboxList",
                                      name: "tags",
                                      label: "职业标签",
                                      options: [
                                        { text: "CRO", value: 1 },
                                        { text: "CRA", value: 2 },
                                        { text: "机构老师", value: 3 },
                                        { text: "CTA", value: 3 },
                                        { text: "QA", value: 3 },
                                        { text: "QC", value: 3 },
                                        { text: "SSU", value: 3 },
                                        // ...更多
                                      ],
                                    },
                                    // {
                                    //   component: 'Field',
                                    //   name: 'tags',
                                    //   label: '职业标签',
                                    //   labelAlign: "left",
                                    //   control: {
                                    //     children: {
                                    //       component: 'List',
                                    //       items: ['CRO', 'CRA'],
                                    //       // itemDefaults: {
                                    //       //   component: 'Tag'
                                    //       // }
                                    //       itemRender: ({ itemData, item }) => {
                                    //       console.log("🚀 ~ file: my-project.js ~ line 723 ~ itemData", itemData)
                                    //         return {
                                    //           component: 'Tag',
                                    //           text: itemData,
                                    //           color: 'blue',
                                    //         }
                                    //       }
                                    //     }
                                    //   },
                                    //   action: [{ component: 'Button', type: 'link', text: '设置职业标签' }]
                                    // },
                                    {},
                                    {
                                      component: "CheckboxList",
                                      name: "area",
                                      label: "关注领域",
                                      options: [
                                        { text: "CRO", value: 1 },
                                        { text: "CRA", value: 2 },
                                        { text: "机构老师", value: 3 },
                                        { text: "CTA", value: 3 },
                                        { text: "QA", value: 3 },
                                        { text: "QC", value: 3 },
                                        { text: "SSU", value: 3 },
                                        // ...更多
                                      ],
                                    },
                                  ],
                                },
                                {
                                  component: "Flex",
                                  gap: "medium",
                                  cols: [
                                    {
                                      component: "Button",
                                      text: "保存",
                                      type: "primary",
                                    },
                                    { component: "Button", text: "取消" },
                                  ],
                                },
                              ],
                            },
                          },
                          {
                            item: { text: "修改密码" },
                            panel: {
                              classes: { "tab-panel-password": true },
                              children: [
                                {
                                  component: "Group",
                                  classes: { "group-info": true },
                                  ref: (c) => {
                                    group = c;
                                  },
                                  fieldDefaults: { labelAlign: "top" },
                                  fields: [
                                    {
                                      component: "Password",
                                      name: "oldPsw",
                                      label: "密码",
                                      required: true,
                                    },
                                    {
                                      component: "Password",
                                      name: "newPsw",
                                      label: "新密码",
                                      required: true,
                                    },
                                    {
                                      component: "Password",
                                      name: "confirmPsw",
                                      label: "确认密码",
                                      required: true,
                                    },
                                  ],
                                },
                                {
                                  component: "Flex",
                                  classes: { "panel-password-btns": true },
                                  gap: "medium",
                                  justify: "center",
                                  cols: [
                                    {
                                      component: "Button",
                                      text: "保存",
                                      type: "primary",
                                    },
                                    { component: "Button", text: "取消" },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          ],
        },
      ],
    },
  ],
});
