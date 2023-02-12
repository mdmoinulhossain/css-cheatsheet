class GridFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `</body>
    </html>`;
  }
}

customElements.define("grid-foot", GridFooter);
