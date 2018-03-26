function openWebview(url) {
  if (url.indexOf('h5://') >= 0) {
    window
      .HWH5
      .openWebview({ uri: url });
    return;
  }
  window.location.href = `${window.location.origin}${window.location.pathname}#${url}`;
}

export default openWebview;
