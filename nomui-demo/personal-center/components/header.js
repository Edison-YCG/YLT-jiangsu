define([], function () {
  const Header = new nomui.Flex({
    rows: [
      {
        component: 'Flex',
        justify: 'center',
        align: 'center',
        attrs: {
          style: {
            height: '170px',
            backgroundColor: 'rgba(0, 28, 89, 0.06)',
            padding: '0 36px',
          },
        },
        cols: [
          {
            component: 'Avatar',
            icon: {
              component: 'Icon',
              type: 'user',
              attrs: {
                style: {
                  fontSize: '60px',
                },
              },
            },
            attrs: {
              style: {
                width: '78px',
                height: '78px',
                marginRight: '14px',
              },
            },
          },
          {
            component: 'Flex',
            rows: [
              {
                children: 'Mingzhi',
                attrs: {
                  style: {
                    fontSize: '24px',
                    color: 'rgba(43, 126, 251, 1)',
                  },
                },
              },
              {
                children: '信息完整度: 20%',
                attrs: {
                  style: {
                    fontSize: '12px',
                    color: 'rgba(43, 126, 251, 1)',
                  },
                },
              },
              {},
            ],
          },
        ],
      },
      {
        children: 'aaaaaaa',
      },
    ],
  })

  return Header
})
