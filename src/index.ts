const prefetchResources = (params: string[] | string) => {
  if (typeof params === 'string') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = params;
    document.head.appendChild(link);
  } else {
    params.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

export default prefetchResources;
