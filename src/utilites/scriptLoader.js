// utils/scriptLoader.js

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };
  
  const loadScripts = async (scripts) => {
    const promises = scripts.map(loadScript);
    await Promise.all(promises);
  };
  
  export default loadScripts;
  