var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./assets/green-socks-on-white.jpg",
    inStock: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/green-socks-on-white.jpg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/blue-socks-on-white.jpg",
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
  },
});
