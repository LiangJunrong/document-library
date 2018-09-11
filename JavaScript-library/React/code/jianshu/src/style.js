import { injectGlobal } from 'styled-components';

injectGlobal`
  /* 
      * reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
      * The purpose of reset is not to allow default styles to be consistent across all browsers, but to reduce the potential problems of default styles.
      * create by jsliang
  */

  /** 清除内外边距 - clearance of inner and outer margins **/
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* 结构元素 - structural elements */
  dl, dt, dd, ul, ol, li, /* 列表元素 - list elements */
  pre, /* 文本格式元素 - text formatting elements */
  form, fieldset, legend, button, input, textarea, /* 表单元素 - from elements */
  th, td /* 表格元素 - table elements */ {
      margin: 0;
      padding: 0;
  }

  /** 设置默认字体 - setting the default font **/
  body, button, input, select, textarea {
      font: 18px/1.5 '宋体', Helvetica, sans-serif;
  }
  h1, h2, h3, h4, h5, h6, button, input, select, textarea { font-size: 100%; }

  /** 重置列表元素 - reset the list element **/
  ul, ol { list-style: none; }

  /** 重置文本格式元素 - reset the text format element **/
  a, a:hover { text-decoration: none; }

  /** 重置表单元素 - reset the form element **/
  button { cursor: pointer; }
  input { font-size: 18px; outline: none; }

  /** 重置表格元素 - reset the table element **/
  table { border-collapse: collapse; border-spacing: 0; }

  /** 图片自适应 - image responsize **/
  img { border: 0; display: inline-block; width: 100%; max-width: 100%; height: auto; }

  /* 
      * 默认box-sizing是content-box，该属性导致padding会撑大div，使用border-box可以解决该问题
      * set border-box for box-sizing when you use div, it solve the problem when you add padding and don't want to make the div width bigger
  */
  div, input { box-sizing: border-box; }

  /** 清除浮动 - clear float **/
  .jsliang-clear:after, .clear:after {
      content: " ";
      display: block;
      height: 0;
      clear: both;
  }
  .jsliang-clear, .clear {
      *zoom: 1;
  }

  /** 设置input的placeholder - set input placeholder **/
  input::-webkit-input-placeholder { color: #727272; } /* Webkit browsers */
  input::-moz-placeholder { color: #727272; } /* Mozilla Firefox */
  input::-ms-input-placeholder { color: #727272; } /* Internet Explorer */

  /** 引入 iconfont **/
  .icon {
      width: 1em;
      height: 1em;
      vertical-alian: -.15em;
      fill: currentColor;
      overflow: hidden;
  }
`