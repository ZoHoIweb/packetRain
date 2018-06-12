

const assetResources = {
  img: {
    xulie1: [
      {
        url: '1.png',
        crossOrigin: true,
      },
      {
        url: '2.png',
        crossOrigin: true,
      },
      {
        url: '3.png',
        crossOrigin: true,
      },
      {
        url: '4.png',
        crossOrigin: true,
      },
    ],
    xulie2: [
      {
        url: '11.png',
        crossOrigin: true,
      },
      {
        url: '22.png',
        crossOrigin: true,
      },
      {
        url: '33.png',
        crossOrigin: true,
      },
      {
        url: '44.png',
        crossOrigin: true,
      },
    ],
    otherImgs: [
      {
        url: '618.png',
        crossOrigin: true,
      },
      {
        url: 'bg.jpg',
        crossOrigin: true,
      },
      {
        url: 'bi.png',
        crossOrigin: true,
      },
      {
        url: 'bottom1.png',
        crossOrigin: true,
      },
      {
        url: 'close.png',
        crossOrigin: true,
      },
      {
        url: 'end1.png',
        crossOrigin: true,
      },
      {
        url: 'end2.png',
        crossOrigin: true,
      },
      {
        url: 'end3.png',
        crossOrigin: true,
      },
      {
        url: 'end4.png',
        crossOrigin: true,
      },
      {
        url: 'end5.png',
        crossOrigin: true,
      },
      {
        url: 'end6.png',
        crossOrigin: true,
      },
      {
        url: 'end7.png',
        crossOrigin: true,
      },
      {
        url: 'endQuan.png',
        crossOrigin: true,
      },
      {
        url: 'head.png',
        crossOrigin: true,
      },
      {
        url: 'item.png',
        crossOrigin: true,
      },
      {
        url: 'logo.png',
        crossOrigin: true,
      },
      {
        url: 'packetBg.png',
        crossOrigin: true,
      },
      {
        url: 'qie2.png',
        crossOrigin: true,
      },
      {
        url: 'qie4.png',
        crossOrigin: true,
      },
      {
        url: 'qrBack.png',
        crossOrigin: true,
      },
      {
        url: 'startPacket.png',
        crossOrigin: true,
      },
    ],
  }

};

export const addRes = async (type) => {
  let resources = [];

  for (let key in assetResources[type]) {

    let value = assetResources[type][key];

    value.forEach(item => {
      item.url = `${type}/${key}/${item.url}`;
      resources.push(item);
    });

  }

  await Promise.all(resources.map(item => {
    return new Promise((resolve) => {
      import(`assert/${item.url}`).then(res => {
        item.url = res;
        resolve(item);
      });
    });
  })).then(res => {
    resources = res;
  });

  return resources;
};
