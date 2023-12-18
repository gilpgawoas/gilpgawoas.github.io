const MUESTRA_CODIGO_SHADOW_HTML = /* html */
 `<style>
   :host {
    display: block;
    font-family: var(--fontMono);
   }
   table {
    margin-left: auto;
    margin-right: auto;
   }
   td:first-child {
    text-align: right;
    padding: 0 0 0 0;
    vertical-align: top;
    font-family: var(--fontMono);
    white-space: pre;
    font-size: 1rem;
    line-height:1.2rem;
    /* Avoid selection */
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   }
   td:nth-child(2) {
    padding: 0 0 0 0.25rem;
    vertical-align: top;
    font-family: var(--fontMono);
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    font-size: 1rem;
    line-height:1.2rem;
   }
   div>div {
    white-space: pre;
   }
   .resaltado {
    background-color: rgb(255, 255, 89);
   }
   .resaltado2 {
    background-color: rgb(255, 214, 139);
   }
   .resaltado3 {
    background-color: rgb(235, 234, 233);
   }
   @media print {
    button {
     display:none;
    }
   }
 </style>
 <table>
  <caption style="text-align: left">
   <button type=button title="Copiar al portapapeles">📋</button>
  </caption>
  <tbody></tbody>
 </table>
 <div hidden style="display: none">
  <slot></slot>
 </div>`
class MuestraCodigo extends HTMLElement {
 constructor() {
  super()
  const shadowRoot = this.attachShadow({ mode: "open" })
  shadowRoot.innerHTML = MUESTRA_CODIGO_SHADOW_HTML
  this.copia = this.copia.bind(this)
  /**
   * @readonly
   * @type {HTMLTableSectionElement | null}
   */
  this.tbody = shadowRoot.querySelector("tbody")
  const button = shadowRoot.querySelector("button")
  if (button) {
   button.addEventListener("click", this.copia)
  }
  /** @type {HTMLSlotElement | null} */
  const slot = shadowRoot.querySelector("slot")
  if (slot) {
   slot.addEventListener("slotchange", () => {
    const arr = slot.assignedElements()
    /** @type {string[]} */
    let codigo = []
    switch (arr.length) {
     case 0:
      codigo = []
      break
     case 1:
      codigo = this.analizaHtml(
       Array.from(arr[0].children))
      break
     default:
      codigo = this.analizaHtml(arr)
      break
    }
    const total = codigo.length
    let inner = ""
    for (let i = 0; i < total;) {
     const linea = codigo[i]
     inner += /* html */
      `<tr>
        <td>${++i}</td>
        <td>${linea}</td>
       </tr>`
    }
    if (this.tbody) {
     this.tbody.innerHTML += inner
    }
   })
  }
 }
 /** @param {Element[]} elementos */
 analizaHtml(elementos) {
  const codigo = []
  for (const elemento of elementos) {
   const innerHTML = elemento.innerHTML
   const limpio = innerHTML
    .replace(/(\u00a0|\n\s*|&nbsp;)/g, " ")
    .replace(/\s+$/g, "")
   codigo.push(limpio)
  }
  return codigo
 }
 async copia() {
  try {
   if (this.tbody) {
    const lineas = Array.from(this.tbody.querySelectorAll("td:nth-child(2)"))
    const codigo = lineas
     .map(linea => linea.textContent || "")
     .join("\n")
    if (codigo) {
     await navigator.clipboard.writeText(codigo)
     alert("Texto copiado al portapapeles.")
    }
   }
  } catch (e) {
   alert(e.message)
  }
 }
}
customElements.define("muestra-codigo", MuestraCodigo)