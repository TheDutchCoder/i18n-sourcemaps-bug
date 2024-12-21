/**
 * Injects Clarity Script into the head.
 */
export const injectClarity = ({
  isEnabled,
  id,
}: {
  isEnabled: boolean
  id: string
}) => {
  if (!isEnabled) {
    return
  }

  return {
    key: 'microsoft-clarity',
    type: 'text/javascript',
    innerHTML: injectClarityScript({ id }),
  }
}

/**
 * Generates and returns the actual script content for Microsoft Clarity to be
 * injected.
 */
const injectClarityScript = ({
  id,
}: {
  id: string
}) => {
  return `
  (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${id}");
  `
}
