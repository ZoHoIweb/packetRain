
export function isLocal() {
  return process.env.NODE_ENV !== 'production';
}

export function toTmUrl(itemId, skuId) {
  const base = 'https://detail.tmall.com/item.htm';
  if (skuId) {
    return `${base}?id=${itemId}&skuId=${skuId}`;
  }
  return `${base}?id=${itemId}`;
}
