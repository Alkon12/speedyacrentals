export const GTM_ID = "GTM-W9BKS63H";
export const pageview = (url) => {
  window.dataLayer.push({ event: "pageview", page: url });
};
