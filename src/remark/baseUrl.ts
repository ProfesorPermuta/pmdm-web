// Prefija el baseUrl a los src/href absolutos (/img/..., /presentaciones/...)
// escritos como HTML/JSX dentro de los .md. Docusaurus solo lo hace con la
// sintaxis Markdown y con <Link>, no con <img src> ni <a href> a mano.
// Sin esto, en GitHub Pages (baseUrl=/pmdm-web/) las imágenes salen rotas.

type Node = {
  type: string;
  attributes?: {type: string; name: string; value?: unknown}[];
  children?: Node[];
};

const ATTRS = new Set(['src', 'href']);

export default function remarkBaseUrl(options: {baseUrl?: string} = {}) {
  const base = (options.baseUrl ?? '/').replace(/\/+$/, ''); // '/pmdm-web/' -> '/pmdm-web'

  return (tree: Node) => {
    if (!base) return; // baseUrl '/': nada que hacer

    const visit = (node: Node) => {
      if (
        node.type === 'mdxJsxFlowElement' ||
        node.type === 'mdxJsxTextElement'
      ) {
        for (const attr of node.attributes ?? []) {
          if (
            attr.type === 'mdxJsxAttribute' &&
            ATTRS.has(attr.name) &&
            typeof attr.value === 'string' &&
            attr.value.startsWith('/') &&
            !attr.value.startsWith('//') &&
            !attr.value.startsWith(base + '/')
          ) {
            attr.value = base + attr.value;
          }
        }
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
