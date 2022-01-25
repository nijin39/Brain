/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";

export default function Starred() {
  return (
    <section>
      <h2>Layout Example (Starred)</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we're returning a
        function, we can have complex nested layouts if desired.
      </p>
    </section>
  );
}

Starred.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  );
};
