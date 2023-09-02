const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: 'http://kaileehamre.com', // Use just the base URL here
  consumerKey: 'Yck_172970003eb282b49c2e4df09aa302d447167708',
  consumerSecret: 'cs_35406847e53673216d0331fd500b0274d2910c70',
  version: 'wc/v3'
});

export async function getStaticProps() {
      console.log('Entering getStaticProps');

  try {
    // Using the WooCommerce library to fetch products
    const response = await WooCommerce.get("products");
    const products = response.data;
console.log("WooCommerce Response:", response);
console.log("Products:", products);
console.log("Client-side Products:", products);

    return {
      props: {
        products,
      },
      
    };
  } catch (error) {
    console.error("Error fetching products:", error.response ? error.response.data : error.message);
    return {
      props: {
    products: [{ id: 'error', name: 'Error fetching products', description: '', price_html: '' }],
      },
    };
  }
}
function Products({ products }) {
  return (
    <div>
      <h1>Products</h1>
      {products && products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price_html}</p>
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
export default Products;
