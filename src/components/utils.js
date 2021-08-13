export function flexUnit(amount, min, max, unit = 'vw', prop = 'font-size') {
  const minBreakpoint = (min / amount) * 100;
  const maxBreakpoint = max ? (max / amount) * 100 : false;
  const dimension = unit === 'vw' ? 'width' : 'height';

  return `
    @media (max-${dimension}: ${minBreakpoint}px) {
      ${prop}: ${min}px;
    }

    ${
      max
        ? `
      @media (min-${dimension}: ${maxBreakpoint}px) {
        ${prop}: ${max}px;
      }
    `
        : ''
    }

    ${prop}: ${amount}${unit}
  `;
}

export function truncateStr(str, length) {
  if (str.length <= length) {
    return str;
  }
  return `${str.slice(0, length)}...`;
}

// https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/copy-to-clipboard.js

export const copyToClipboard = str => {
  const { clipboard } = window.navigator;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, true);
    textarea.setAttribute(`contenteditable`, true);
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.appendChild(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    document.body.removeChild(textarea);

    return Promise.resolve(true);
  }

  return clipboard.writeText(str);
};
