const BeusableScript = () => {
    if (typeof window !== "undefined") {
      (function (w: Window, d: Document, a: string) {
        (w as any).__beusablerumclient__ = {
          load: function (src: string) {
            var b: HTMLScriptElement = d.createElement("script");
            b.src = src;
            b.async = true;
            b.type = "text/javascript";
            d.getElementsByTagName("head")[0].appendChild(b);
          },
        };
        (w as any).__beusablerumclient__.load(a + "?url=" + encodeURIComponent(d.URL));
      })(window, document, "//rum.beusable.net/load/b230930e134632u394");
    }
  
    return null; // You can return null since this component doesn't render anything
  };
  
  export default BeusableScript;
  